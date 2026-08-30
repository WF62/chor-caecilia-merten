import { useSEO } from '../hooks/useSEO'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import { ORGANISATION } from '../data/organisation'

const ablauf = [
  { schritt: '1', titel: 'Probe besuchen', text: 'Komm einfach unverbindlich zu einer unserer wöchentlichen Proben.' },
  { schritt: '2', titel: 'Kennenlernen', text: 'Wir hören dir zu und finden gemeinsam die passende Stimmlage.' },
  { schritt: '3', titel: 'Mitsingen', text: 'Nach ein paar Proben entscheidest du, ob du dauerhaft dabei bleibst.' },
]

const faq = [
  {
    frage: 'Wie melde ich mich zum Singen an?',
    antwort: `Einfach ${ORGANISATION.probentag} zur Probe im ${ORGANISATION.probenort} kommen und mitsingen.`,
  },
  {
    frage: 'Muss ich zur Aufnahme in den Chor vorsingen?',
    antwort: 'Nein, ein Vorsingen ist nicht nötig. Komm einfach vorbei und sing bei ein paar Proben mit.',
  },
  {
    frage: 'Was kostet der Mitgliedsbeitrag pro Jahr?',
    antwort: '[Höhe des Mitgliedsbeitrags einfügen]',
  },
]

export default function MitgliedWerden() {
  useSEO('Mitglied werden', 'Werde Teil des Chores Cäcilia Merten – Informationen zum Einstieg und Kontaktformular.')

  return (
    <>
      <Hero
        eyebrow="Mitmachen"
        title="Mitglied werden"
        text="Egal ob erfahrene Sängerin oder blutiger Anfänger – bei Cäcilia Merten ist jede Stimme willkommen."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {ablauf.map((a) => (
              <div className="card" key={a.schritt}>
                <span className="eyebrow">Schritt {a.schritt}</span>
                <h3>{a.titel}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Häufig gestellte Fragen</h2>
          <div className="grid" style={{ gridTemplateColumns: '1fr', marginTop: '1.5rem', gap: '1rem' }}>
            {faq.map((f) => (
              <details key={f.frage} className="card">
                <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{f.frage}</summary>
                <p style={{ marginTop: '0.75rem', marginBottom: 0 }}>{f.antwort}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Interesse geweckt?</h2>
          <p>Schreib uns eine kurze Nachricht, wir melden uns bei dir.</p>
          <ContactForm anliegenVorgabe="Ich möchte aktives Mitglied werden" />
        </div>
      </section>
    </>
  )
}
