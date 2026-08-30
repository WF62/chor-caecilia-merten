import { useEffect, useState } from 'react'
import {
  ladeEinladungen,
  legeEinladungAn,
  loescheEinladung,
  ladeAlleMitglieder,
  legeKategorieAn,
  aktualisiereKategorie,
  loescheKategorie,
  legeDokumentAn,
  aktualisiereDokument,
  loescheDokument,
} from '../utils/chorAdminStorage'
import './AdminBereich.css'

const TABS = [
  { id: 'einladungen', label: 'Einladungen' },
  { id: 'dokumente', label: 'Dokumentstruktur' },
  { id: 'mitglieder', label: 'Mitglieder' },
]

export default function AdminBereich({ struktur, onAenderung }) {
  const [tab, setTab] = useState('einladungen')

  return (
    <div className="admin-bereich card">
      <h3>🔐 Admin-Bereich</h3>
      <div className="admin-bereich__tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={tab === t.id ? 'is-active' : ''}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'einladungen' && <EinladungenVerwaltung />}
      {tab === 'dokumente' && <DokumenteVerwaltung struktur={struktur} onAenderung={onAenderung} />}
      {tab === 'mitglieder' && <MitgliederUebersicht />}
    </div>
  )
}

function EinladungenVerwaltung() {
  const [einladungen, setEinladungen] = useState([])
  const [email, setEmail] = useState('')
  const [fehler, setFehler] = useState(null)
  const [ladend, setLadend] = useState(true)

  async function neuLaden() {
    setLadend(true)
    try {
      setEinladungen(await ladeEinladungen())
      setFehler(null)
    } catch (e) {
      setFehler(e.message)
    } finally {
      setLadend(false)
    }
  }

  useEffect(() => {
    neuLaden()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    try {
      await legeEinladungAn(email)
      setEmail('')
      await neuLaden()
    } catch (e) {
      setFehler(e.message)
    }
  }

  async function handleLoeschen(mail) {
    try {
      await loescheEinladung(mail)
      await neuLaden()
    } catch (e) {
      setFehler(e.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="admin-bereich__inline-form">
        <input
          type="email"
          placeholder="neue.person@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn">Einladen</button>
      </form>

      {fehler && <p className="admin-bereich__fehler">{fehler}</p>}

      {ladend ? (
        <p>Lädt …</p>
      ) : einladungen.length === 0 ? (
        <p className="admin-bereich__leer">Noch keine Einladungen.</p>
      ) : (
        <table className="admin-bereich__tabelle">
          <thead>
            <tr>
              <th>E-Mail</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {einladungen.map((e) => (
              <tr key={e.email}>
                <td>{e.email}</td>
                <td>
                  <span className={`admin-bereich__badge ${e.verwendet ? 'is-verwendet' : 'is-offen'}`}>
                    {e.verwendet ? 'registriert' : 'offen'}
                  </span>
                </td>
                <td>
                  <button type="button" className="admin-bereich__loeschen" onClick={() => handleLoeschen(e.email)}>
                    Löschen
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

function MitgliederUebersicht() {
  const [mitglieder, setMitglieder] = useState([])
  const [fehler, setFehler] = useState(null)
  const [ladend, setLadend] = useState(true)

  useEffect(() => {
    ladeAlleMitglieder()
      .then(setMitglieder)
      .catch((e) => setFehler(e.message))
      .finally(() => setLadend(false))
  }, [])

  return (
    <div>
      <p className="admin-bereich__hinweis">
        Nur lesend. Um jemanden zum Admin zu machen, im Supabase-Dashboard ausführen:{' '}
        <code>update chor_mitglieder set ist_admin = true where id = '…';</code>
      </p>
      {fehler && <p className="admin-bereich__fehler">{fehler}</p>}
      {ladend ? (
        <p>Lädt …</p>
      ) : (
        <table className="admin-bereich__tabelle">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rolle</th>
            </tr>
          </thead>
          <tbody>
            {mitglieder.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.ist_admin ? 'Admin' : 'Mitglied'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

function DokumenteVerwaltung({ struktur, onAenderung }) {
  const [neueKategorie, setNeueKategorie] = useState({ titel: '', beschreibung: '' })
  const [fehler, setFehler] = useState(null)

  async function handleFehler(fn) {
    try {
      await fn()
      onAenderung()
    } catch (e) {
      setFehler(e.message)
    }
  }

  async function handleNeueKategorie(e) {
    e.preventDefault()
    if (!neueKategorie.titel.trim()) return
    await handleFehler(() =>
      legeKategorieAn({
        titel: neueKategorie.titel,
        beschreibung: neueKategorie.beschreibung,
        reihenfolge: struktur.length,
      })
    )
    setNeueKategorie({ titel: '', beschreibung: '' })
  }

  return (
    <div>
      <form onSubmit={handleNeueKategorie} className="admin-bereich__inline-form">
        <input
          type="text"
          placeholder="Neue Kategorie (Titel)"
          value={neueKategorie.titel}
          onChange={(e) => setNeueKategorie((k) => ({ ...k, titel: e.target.value }))}
          required
        />
        <input
          type="text"
          placeholder="Beschreibung (optional)"
          value={neueKategorie.beschreibung}
          onChange={(e) => setNeueKategorie((k) => ({ ...k, beschreibung: e.target.value }))}
        />
        <button type="submit" className="btn">Kategorie anlegen</button>
      </form>

      {fehler && <p className="admin-bereich__fehler">{fehler}</p>}

      <div className="admin-bereich__kategorien">
        {struktur.map((kategorie) => (
          <KategorieBlock key={kategorie.id} kategorie={kategorie} onAenderung={handleFehler} />
        ))}
      </div>
    </div>
  )
}

function KategorieBlock({ kategorie, onAenderung }) {
  const [neuesDokument, setNeuesDokument] = useState({ titel: '', beschreibung: '', dateiurl: '' })

  async function handleTitelAendern() {
    const neuerTitel = window.prompt('Neuer Titel:', kategorie.titel)
    if (neuerTitel && neuerTitel !== kategorie.titel) {
      onAenderung(() => aktualisiereKategorie(kategorie.id, { titel: neuerTitel }))
    }
  }

  async function handleKategorieLoeschen() {
    if (window.confirm(`Kategorie "${kategorie.titel}" inklusive aller enthaltenen Dokumente löschen?`)) {
      onAenderung(() => loescheKategorie(kategorie.id))
    }
  }

  async function handleNeuesDokument(e) {
    e.preventDefault()
    if (!neuesDokument.titel.trim()) return
    onAenderung(() =>
      legeDokumentAn({
        kategorie_id: kategorie.id,
        titel: neuesDokument.titel,
        beschreibung: neuesDokument.beschreibung,
        dateiurl: neuesDokument.dateiurl,
        reihenfolge: kategorie.dokumente.length,
      })
    )
    setNeuesDokument({ titel: '', beschreibung: '', dateiurl: '' })
  }

  async function handleDokumentLoeschen(id) {
    if (window.confirm('Dokument löschen?')) {
      onAenderung(() => loescheDokument(id))
    }
  }

  async function handleDokumentUrlAendern(dokument) {
    const neueUrl = window.prompt('Datei-URL:', dokument.dateiurl || '')
    if (neueUrl !== null) {
      onAenderung(() => aktualisiereDokument(dokument.id, { dateiurl: neueUrl || null }))
    }
  }

  return (
    <div className="admin-bereich__kategorie">
      <div className="admin-bereich__kategorie-kopf">
        <strong>{kategorie.titel}</strong>
        <span>
          <button type="button" onClick={handleTitelAendern}>Umbenennen</button>
          <button type="button" className="admin-bereich__loeschen" onClick={handleKategorieLoeschen}>
            Löschen
          </button>
        </span>
      </div>

      {kategorie.dokumente.length > 0 && (
        <ul className="admin-bereich__dokumentliste">
          {kategorie.dokumente.map((d) => (
            <li key={d.id}>
              <span>{d.titel}{d.dateiurl ? ' 🔗' : ''}</span>
              <span>
                <button type="button" onClick={() => handleDokumentUrlAendern(d)}>URL setzen</button>
                <button type="button" className="admin-bereich__loeschen" onClick={() => handleDokumentLoeschen(d.id)}>
                  Löschen
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={handleNeuesDokument} className="admin-bereich__inline-form admin-bereich__inline-form--klein">
        <input
          type="text"
          placeholder="Neues Dokument (Titel)"
          value={neuesDokument.titel}
          onChange={(e) => setNeuesDokument((d) => ({ ...d, titel: e.target.value }))}
          required
        />
        <input
          type="url"
          placeholder="Datei-URL (optional)"
          value={neuesDokument.dateiurl}
          onChange={(e) => setNeuesDokument((d) => ({ ...d, dateiurl: e.target.value }))}
        />
        <button type="submit" className="btn btn-outline">Hinzufügen</button>
      </form>
    </div>
  )
}
