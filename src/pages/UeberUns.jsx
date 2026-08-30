import { useSEO } from '../hooks/useSEO'
import Hero from '../components/Hero'

const vorstand = [
  { rolle: 'Chorleitung', name: 'N.N.' },
  { rolle: '1. Vorsitzende/r', name: 'N.N.' },
  { rolle: 'Schriftführung', name: 'N.N.' },
  { rolle: 'Kassenführung', name: 'N.N.' },
]

export default function UeberUns() {
  useSEO(
    'Über uns',
    'Geschichte, Chorleitung und Vorstand des Chores Cäcilia Merten.'
  )

  return (
    <>
      <Hero eyebrow="Über uns" title="Unser Chor" text="Tradition, Gemeinschaft und die Freude an der Musik – das ist Cäcilia Merten." />

      <section className="section">
        <div className="container">
          <h2>Geschichte</h2>
          <p style={{ maxWidth: 700 }}>
            Der Chor Cäcilia Merten wurde benannt nach der heiligen Cäcilia, der Patronin der
            Kirchenmusik. Seit Jahrzehnten prägt der Chor das musikalische Leben in Merten – von
            feierlichen Gottesdiensten über weltliche Konzerte bis hin zu geselligen
            Chorfahrten. Hier ist Platz für die vollständige Vereinsgeschichte, wichtige
            Meilensteine und besondere Ereignisse.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Vorstand & Chorleitung</h2>
          <div className="grid grid-3" style={{ marginTop: '1.5rem' }}>
            {vorstand.map((v) => (
              <div className="card" key={v.rolle}>
                <h3>{v.rolle}</h3>
                <p>{v.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Unser Repertoire</h2>
          <p style={{ maxWidth: 700 }}>
            Von klassischer Kirchenmusik über Gospel bis zu bekannten Chorwerken – unser
            Repertoire ist vielseitig. Wir proben wöchentlich neue Stücke ein und gestalten
            regelmäßig Gottesdienste sowie eigene Konzerte.
          </p>
        </div>
      </section>
    </>
  )
}
