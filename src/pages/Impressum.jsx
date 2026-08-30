import { useSEO } from '../hooks/useSEO'

export default function Impressum() {
  useSEO('Impressum', 'Impressum des Chores Cäcilia Merten.')

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Chor Cäcilia Merten
          <br />
          [Rechtsform, z. B. e. V.]
          <br />
          Kirchstraße 1
          <br />
          50389 Merten
        </p>

        <h2>Vertreten durch</h2>
        <p>[Name des/der 1. Vorsitzenden]</p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 02232 / 99123 45
          <br />
          E-Mail: info@chor-caecilia-merten.de
        </p>

        <h2>Vereinsregister</h2>
        <p>
          [Registergericht] · Registernummer: [VR-Nummer]
        </p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>[Name, Anschrift wie oben]</p>

        <p style={{ fontSize: '0.85rem', marginTop: '2rem' }}>
          Hinweis: Dies ist ein Platzhaltertext. Bitte durch die tatsächlichen
          rechtlichen Angaben des Vereins ersetzen.
        </p>
      </div>
    </section>
  )
}
