import { useEffect, useState } from 'react'
import { useSEO } from '../hooks/useSEO'
import { useAuth } from '../hooks/useAuth'
import { supabase } from '../lib/supabaseClient'
import { ladeMitgliedProfil, ladeDokumentStruktur } from '../utils/mitgliederStorage'
import MitgliederLogin from '../components/MitgliederLogin'
import AdminBereich from '../components/AdminBereich'
import Hero from '../components/Hero'
import './Mitgliederbereich.css'

export default function Mitgliederbereich() {
  useSEO('Mitgliederbereich', 'Interner Bereich für Mitglieder des Chores Cäcilia Merten.')

  const { session, loading } = useAuth()
  const [profil, setProfil] = useState(undefined) // undefined = lädt, null = kein Zugang
  const [struktur, setStruktur] = useState([])
  const [fehler, setFehler] = useState(null)

  useEffect(() => {
    if (!session) {
      setProfil((bisher) => (bisher === undefined ? bisher : undefined))
      return
    }

    let aktiv = true

    ladeMitgliedProfil(session.user.id)
      .then((p) => {
        if (aktiv) setProfil(p)
      })
      .catch((e) => aktiv && setFehler(e.message))

    return () => {
      aktiv = false
    }
  }, [session])

  useEffect(() => {
    if (!profil) return

    let aktiv = true
    ladeDokumentStruktur()
      .then((s) => aktiv && setStruktur(s))
      .catch((e) => aktiv && setFehler(e.message))

    return () => {
      aktiv = false
    }
  }, [profil])

  async function strukturNeuLaden() {
    try {
      setStruktur(await ladeDokumentStruktur())
    } catch (e) {
      setFehler(e.message)
    }
  }

  const vorstandKategorien = struktur.filter((kategorie) => kategorie.nur_vorstand)

  if (loading) {
    return (
      <section className="section">
        <div className="container">
          <p>Lädt …</p>
        </div>
      </section>
    )
  }

  if (!session) {
    return (
      <>
        <Hero eyebrow="Mitgliederbereich" title="Nur für Mitglieder" text="Bitte melde dich an, um auf interne Dokumente zuzugreifen." />
        <section className="section">
          <div className="container">
            <MitgliederLogin />
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Hero eyebrow="Mitgliederbereich" title="Interner Bereich" />
      <section className="section">
        <div className="container">
          <div className="mitgliederbereich__kopf">
            <span>Angemeldet als {session.user.email}</span>
            <button type="button" className="btn btn-outline" onClick={() => supabase.auth.signOut()}>
              Abmelden
            </button>
          </div>

          {fehler && <p className="mitglieder-login__status mitglieder-login__status--fehler">{fehler}</p>}

          {profil === undefined && !fehler && <p>Lädt …</p>}

          {profil === null && (
            <div className="card" style={{ marginTop: '1.5rem' }}>
              <h3>Noch kein Zugang</h3>
              <p>
                Dein Konto ist angelegt, aber noch nicht für den Mitgliederbereich freigeschaltet.
                Bitte wende dich an den Vorstand, damit deine E-Mail-Adresse eingetragen wird.
              </p>
            </div>
          )}

          {profil && (
            <div className="mitgliederbereich__struktur">
              {struktur
                .filter((kategorie) => !kategorie.nur_vorstand)
                .map((kategorie) => (
                  <KategorieKarte key={kategorie.id} kategorie={kategorie} />
                ))}
            </div>
          )}

          {profil && vorstandKategorien.length > 0 && (
            <div className="mitgliederbereich__vorstandsbereich">
              <h2>🗂️ Vorstandsbereich</h2>
              <p className="mitgliederbereich__desc">
                Nur für den Vorstand sichtbar.
              </p>
              <div className="mitgliederbereich__struktur">
                {vorstandKategorien.map((kategorie) => (
                  <KategorieKarte key={kategorie.id} kategorie={kategorie} />
                ))}
              </div>
            </div>
          )}

          {profil?.ist_admin && <AdminBereich struktur={struktur} onAenderung={strukturNeuLaden} />}
        </div>
      </section>
    </>
  )
}

function KategorieKarte({ kategorie }) {
  return (
    <div className="card">
      <h3>{kategorie.titel}</h3>
      {kategorie.beschreibung && <p>{kategorie.beschreibung}</p>}
      {kategorie.dokumente.length === 0 ? (
        <p className="mitgliederbereich__leer">Noch keine Dokumente in dieser Kategorie.</p>
      ) : (
        <ul className="mitgliederbereich__liste">
          {kategorie.dokumente.map((dokument) => (
            <li key={dokument.id}>
              {dokument.dateiurl ? (
                <a href={dokument.dateiurl} target="_blank" rel="noreferrer">
                  {dokument.titel}
                </a>
              ) : (
                <span>{dokument.titel}</span>
              )}
              {dokument.beschreibung && <span className="mitgliederbereich__desc"> — {dokument.beschreibung}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
