import { useSEO } from '../hooks/useSEO'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline'

const vorstand = [
  { rolle: 'Chorleitung', name: 'Stephan Krings' },
  { rolle: '1. Vorsitzender', name: 'Raimund Meyer' },
  { rolle: '2. Vorsitzende', name: 'Monika Hüsgen' },
  { rolle: 'Kassierer', name: 'Werner Nenner' },
  { rolle: 'Schriftführerin', name: 'Maria Kortz' },
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
    jahr: '1978',
    titel: 'Erstes Weihnachtskonzert',
    text: 'Im Advent 1978 veranstaltet der Kirchenchor erstmals ein Weihnachtskonzert in der Pfarrkirche St. Martin — seither jährlicher musikalischer Höhepunkt der Chorarbeit, meist am 3. Adventssonntag.',
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
  {
    jahr: '2022',
    titel: '150 Jahre Kirchenchor',
    text: 'Jubiläumsjahr mit Festkonzert am 11. Juni 2022 gemeinsam mit den drei weiteren Mertener Chören (Kinderchor Merten, MGV Römer, Chor Esperanza), der Cäcilienfest-Messe mit der Missa Brevis von Jacob de Haan und dem 42. Weihnachtskonzert — nach zweijähriger, coronabedingter Zwangspause und zu Gast der St. Michael Chor aus Waldorf.',
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
            50 aktiven Sängerinnen und Sängern sowie einer großen Zahl inaktiver Mitglieder.
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
            Das Repertoire reicht von anspruchsvoller Chorliteratur – u. a. Werke von J. S. Bach,
            A. Diabelli, G. F. Händel, C. R. Kristinus, F. Mendelssohn Bartholdy, W. A. Mozart und
            H. F. Müller – über Volkslieder bis hin zu neuem geistlichen Liedgut. Schwerpunkt ist
            die musikalische Mitgestaltung der Gottesdienste in der Pfarrkirche St. Martin in
            Merten; die Aufführung weltlicher Chorstücke bildet die zweite Säule. Bei Konzerten
            wird der Chor instrumental begleitet – bis 2014 vom Minsker Streichquartett, seit 2015
            vom Streicherensemble Ars Millennium – sowie seit Jahren von der Organistin und
            Cembalistin Barbara Klinkhammer.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Chorfahrten</h2>
          <p style={{ maxWidth: 700 }}>
            Alle drei Jahre unternimmt der Chor eine mehrtägige Fahrt, verbunden mit der
            musikalischen Gestaltung eines Gottesdienstes am Zielort: 2004 im Dom zu Speyer,
            2007 in Zwiesel im Böhmerwald, 2010 in Mühlhausen im Thüringer Wald, 2013 an den
            Kaiserstuhl und ins Elsass (im Straßburger Münster erklang die „Messe brève" in
            F-Dur von Théodore Dubois), 2016 zum Abschluss einer Schweiz-Tour in der Basler
            Kirche St. Clara und 2019 in St. Antonius in Papenburg. Die nächste Fahrt führt 2027
            nach Schwerin und Umgebung.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Weitere Informationen</h2>
          <p style={{ maxWidth: 700 }}>
            Mehr über den Kirchenchor gibt es auch auf der Website der Pfarrei St. Martin
            Merten:{' '}
            <a
              href="https://www.sankt-martin-merten.de/gemeindeleben/choere/kirchenchor"
              target="_blank"
              rel="noreferrer"
            >
              sankt-martin-merten.de/gemeindeleben/choere/kirchenchor
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
