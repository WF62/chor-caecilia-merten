import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import Hero from '../components/Hero'
import SpendenBanner from '../components/SpendenBanner'
import { termine, formatiereDatum } from '../data/termine'
import { ORGANISATION } from '../data/organisation'

const stimmen = [
  { name: 'Sopran', desc: 'Helle, hohe Frauenstimmen' },
  { name: 'Alt', desc: 'Tiefe Frauenstimmen' },
  { name: 'Tenor', desc: 'Hohe Männerstimmen' },
  { name: 'Bass', desc: 'Tiefe Männerstimmen' },
]

export default function Home() {
  useSEO(
    'Start',
    `${ORGANISATION.name} – ${ORGANISATION.slogan}. Herzlich willkommen auf unserer Website.`
  )

  const naechsteTermine = termine.slice(0, 3)

  return (
    <>
      <Hero
        eyebrow="Willkommen"
        title="Kirchenchor Cäcilia Merten"
        text={ORGANISATION.slogan}
      >
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2rem',
            fontWeight: 700,
            letterSpacing: '0.3em',
            color: 'var(--accent)',
            margin: '0 0 0.3em',
          }}
        >
          KCM
        </p>
        <p style={{ fontStyle: 'italic', maxWidth: 400, marginInline: 'auto', lineHeight: 1.8 }}>
          <strong style={{ color: 'var(--accent)' }}>K</strong>langvoll schwingt der Ton empor,
          <br />
          <strong style={{ color: 'var(--accent)' }}>C</strong>horgeist strahlt in euer Ohr,
          <br />
          <strong style={{ color: 'var(--accent)' }}>M</strong>agie der Stimmen klingt hervor.
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '-0.5em' }}>
          {ORGANISATION.kurzname} steht für {ORGANISATION.name}
        </p>
        <p style={{ maxWidth: 640, marginInline: 'auto' }}>
          Seit 1871 gestaltet unser katholischer Kirchenchor Gottesdienste und Konzerte in
          Bornheim-Merten mit. Ob Kirchenmusik oder weltliches Repertoire – bei uns ist jede
          Stimme willkommen.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/mitglied-werden" className="btn">Mitglied werden</Link>
          <Link to="/termine" className="btn btn-outline">Termine ansehen</Link>
        </div>
      </Hero>

      <SpendenBanner />

      <section className="section">
        <div className="container">
          <span className="eyebrow">Über uns</span>
          <h2>Singen verbindet</h2>
          <p style={{ maxWidth: 680 }}>
            Seit 1871 gestaltet der Kirchenchor Cäcilia Merten Gottesdienste, Konzerte und Feste
            in unserer Gemeinde mit. Unter der Leitung von Chorleiter Stephan Krings proben rund
            50 aktive Sängerinnen und Sänger wöchentlich ein vielseitiges Repertoire aus
            geistlicher und weltlicher Chormusik.
          </p>
          <div className="grid grid-3" style={{ marginTop: '2rem' }}>
            {stimmen.map((s) => (
              <div className="card" key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">Proben</span>
          <h2>Jede Woche neu</h2>
          <p style={{ maxWidth: 680 }}>
            Wir proben {ORGANISATION.probentag} im {ORGANISATION.probenort},{' '}
            {ORGANISATION.strasse}, {ORGANISATION.plzOrt}. Neue Sängerinnen und Sänger sind
            jederzeit willkommen — einfach vorbeikommen und mitsingen, ein Vorsingen ist nicht
            nötig.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Termine</span>
          <h2>Was als Nächstes ansteht</h2>
          <div className="grid grid-3" style={{ marginTop: '2rem' }}>
            {naechsteTermine.map((t) => (
              <div className="card" key={t.id}>
                <strong style={{ color: 'var(--gold)' }}>{formatiereDatum(t.datum)} · {t.zeit} Uhr</strong>
                <h3 style={{ marginTop: '0.4em' }}>{t.titel}</h3>
                <p>{t.ort}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/termine" className="btn btn-outline">Alle Termine</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Mitmachen</span>
          <h2>Lust, mitzusingen?</h2>
          <p style={{ maxWidth: 560, marginInline: 'auto' }}>
            Neue Sängerinnen und Sänger sind bei uns jederzeit willkommen – Notenkenntnisse
            sind keine Voraussetzung. Schau einfach bei einer Probe vorbei!
          </p>
          <Link to="/mitglied-werden" className="btn">Jetzt Kontakt aufnehmen</Link>
        </div>
      </section>
    </>
  )
}
