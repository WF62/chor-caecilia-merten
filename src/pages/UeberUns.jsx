import { useSEO } from '../hooks/useSEO'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline'

const vorstand = [
  { rolle: 'Chorleitung', name: 'Stephan Krings' },
  { rolle: '1. Vorsitzende/r', name: 'N.N.' },
  { rolle: 'Schriftführung', name: 'N.N.' },
  { rolle: 'Kassenführung', name: 'N.N.' },
]

const geschichte = [
  {
    jahr: '1871',
    titel: 'Gründung',
    text: 'Auf Anregung des damaligen Pfarrers entsteht der Männergesangverein „Eintracht" — die Wurzel des heutigen Kirchenchores.',
  },
  {
    jahr: 'Später',
    titel: 'Zwei eigene Chöre',
    text: 'Der reine Männerchor wird mit Frauenstimmen verstärkt, um auch für gemischte Chöre geschriebene Messen zu singen. Daraus entwickeln sich zwei eigenständige Vereine: der Kirchenchor Cäcilia Merten und der Männergesangverein „Eintracht".',
  },
  {
    jahr: '1992',
    titel: 'Neue Chorleitung',
    text: 'Seit April 1992 leitet Stephan Krings den Kirchenchor, der heute rund 50 aktive Mitglieder zählt.',
  },
  {
    jahr: '2010',
    titel: 'Erstes Benefizkonzert',
    text: 'Der Chor tritt erstmals gemeinsam mit Nichtmitgliedern zugunsten des Fördervereins St. Martin e.V. auf.',
  },
  {
    jahr: '2011',
    titel: '140 Jahre & Palestrina-Medaille',
    text: 'Festmesse in der Pfarrkirche St. Martin in Merten mit der Missa „Laetatus sum" von Wolfram Menschick zum 140-jährigen Bestehen. Der Allgemeine Cäcilien-Verband für Deutschland zeichnet den Chor mit der Palestrina-Medaille aus.',
  },
  {
    jahr: '2015–2016',
    titel: 'Kooperation mit Krefeld',
    text: 'Gemeinsames Benefizkonzert mit dem Gesangverein Sängerbund 1884 Krefeld-Bockum, zunächst in Merten, im April 2016 wiederholt in Krefeld.',
  },
]

export default function UeberUns() {
  useSEO(
    'Über uns',
    'Geschichte, Chorleitung und Vorstand des Kirchenchores Cäcilia Merten seit 1871.'
  )

  return (
    <>
      <Hero eyebrow="Über uns" title="Unser Chor" text="Tradition, Gemeinschaft und die Freude an der Musik – das ist Cäcilia Merten." />

      <section className="section">
        <div className="container">
          <h2>Geschichte</h2>
          <p style={{ maxWidth: 700, marginBottom: '2.5rem' }}>
            Der Kirchenchor Cäcilia Merten blickt auf eine über 150-jährige Geschichte zurück —
            von den Anfängen als Männergesangverein bis zum heutigen gemischten Chor mit rund
            50 aktiven Mitgliedern.
          </p>
          <Timeline eintraege={geschichte} />
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
            regelmäßig Gottesdienste in der Pfarrkirche St. Martin sowie eigene Konzerte.
          </p>
        </div>
      </section>
    </>
  )
}
