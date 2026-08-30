import { useSEO } from '../hooks/useSEO'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

const ablauf = [
  { schritt: '1', titel: 'Probe besuchen', text: 'Komm einfach unverbindlich zu einer unserer wöchentlichen Proben.' },
  { schritt: '2', titel: 'Kennenlernen', text: 'Wir hören dir zu und finden gemeinsam die passende Stimmlage.' },
  { schritt: '3', titel: 'Mitsingen', text: 'Nach ein paar Proben entscheidest du, ob du dauerhaft dabei bleibst.' },
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
          <h2>Interesse geweckt?</h2>
          <p>Schreib uns eine kurze Nachricht, wir melden uns bei dir.</p>
          <ContactForm betreffVorgabe="Interesse an Mitgliedschaft" />
        </div>
      </section>
    </>
  )
}
