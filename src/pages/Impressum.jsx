import { useSEO } from '../hooks/useSEO'
import { ORGANISATION } from '../data/organisation'

export default function Impressum() {
  useSEO('Impressum', 'Impressum des Chores Cäcilia Merten.')

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          {ORGANISATION.name}
          <br />
          {ORGANISATION.rechtsform}
          <br />
          {ORGANISATION.strasse}
          <br />
          {ORGANISATION.plzOrt}
        </p>

        <h2>Vertreten durch</h2>
        <p>{ORGANISATION.vertretenDurch}</p>

        <h2>Kontakt</h2>
        <p>
          Telefon: {ORGANISATION.telefon}
          <br />
          E-Mail: {ORGANISATION.email}
        </p>

        <h2>Vereinsregister</h2>
        <p>
          {ORGANISATION.registergericht} · Registernummer: {ORGANISATION.registernummer}
        </p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>[Name, Anschrift wie oben]</p>

        <p style={{ fontSize: '0.85rem', marginTop: '2rem' }}>
          Hinweis: Dies ist ein Platzhaltertext. Bitte durch die tatsächlichen
          rechtlichen Angaben des Vereins ersetzen (siehe <code>src/data/organisation.js</code>).
        </p>
      </div>
    </section>
  )
}
