import { useSEO } from '../hooks/useSEO'
import Hero from '../components/Hero'
import { termine, formatiereDatum } from '../data/termine'

export default function Termine() {
  useSEO('Termine', 'Alle kommenden Termine, Proben und Auftritte des Chores Cäcilia Merten.')

  return (
    <>
      <Hero eyebrow="Termine" title="Kommende Termine" text="Proben, Gottesdienste und Konzerte auf einen Blick." />

      <section className="section">
        <div className="container">
          <p style={{ fontSize: '0.85rem', marginBottom: '2rem' }}>
            Hinweis: Die folgenden Termine sind Beispiele zur Veranschaulichung und müssen durch
            die echten Termine des Chors ersetzt werden (siehe <code>src/data/termine.js</code>).
          </p>
          <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
            {termine.map((t) => (
              <div className="card" key={t.id} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ minWidth: 140 }}>
                  <strong style={{ color: 'var(--gold)', display: 'block' }}>{formatiereDatum(t.datum)}</strong>
                  <span style={{ color: 'var(--text-muted)' }}>{t.zeit} Uhr</span>
                </div>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <h3 style={{ margin: 0 }}>{t.titel}</h3>
                  <p style={{ margin: '0.3em 0' }}>{t.ort}</p>
                  <p style={{ margin: 0 }}>{t.beschreibung}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
