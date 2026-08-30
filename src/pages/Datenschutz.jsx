import { useSEO } from '../hooks/useSEO'
import { ORGANISATION } from '../data/organisation'

export default function Datenschutz() {
  useSEO('Datenschutz', 'Datenschutzerklärung des Chores Cäcilia Merten.')

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortlicher</h2>
        <p>
          {ORGANISATION.name}, {ORGANISATION.strasse}, {ORGANISATION.plzOrt}
          <br />
          E-Mail: {ORGANISATION.email}
        </p>

        <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
        <p>
          Beim Besuch dieser Website werden keine personenbezogenen Daten automatisch
          gespeichert, außer den technisch notwendigen Server-Logdaten, die zur Bereitstellung
          der Seite erforderlich sind.
        </p>

        <h2>3. Kontaktformular</h2>
        <p>
          Nutzt du das Kontaktformular, öffnet sich dein E-Mail-Programm mit einer
          vorausgefüllten Nachricht. Die Übermittlung erfolgt direkt per E-Mail an uns, es
          werden keine Formulardaten auf einem Server gespeichert.
        </p>

        <h2>4. Deine Rechte</h2>
        <p>
          Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung sowie Einschränkung
          der Verarbeitung deiner bei uns gespeicherten personenbezogenen Daten. Wende dich
          hierzu an die oben genannte Kontaktadresse.
        </p>

        <p style={{ fontSize: '0.85rem', marginTop: '2rem' }}>
          Hinweis: Dies ist ein Platzhaltertext. Bitte vor Veröffentlichung durch eine
          rechtssichere Datenschutzerklärung ersetzen (z. B. mit einem Generator oder durch
          rechtliche Beratung), insbesondere falls Cookies, Analyse-Tools oder eingebettete
          Karten/Videos ergänzt werden.
        </p>
      </div>
    </section>
  )
}
