import { useSEO } from '../hooks/useSEO'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

export default function Kontakt() {
  useSEO('Kontakt', 'So erreichst du den Chor Cäcilia Merten.')

  return (
    <>
      <Hero eyebrow="Kontakt" title="Wir freuen uns von dir zu hören" />

      <section className="section">
        <div className="container" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 280px' }}>
            <h2>Adresse & Erreichbarkeit</h2>
            <p>
              Chor Cäcilia Merten
              <br />
              Pfarrheim Merten
              <br />
              Kirchstraße 1
              <br />
              50389 Merten
            </p>
            <p>
              E-Mail: <a href="mailto:info@chor-caecilia-merten.de">info@chor-caecilia-merten.de</a>
              <br />
              Telefon: <a href="tel:+4922329912345">02232 / 99123 45</a>
            </p>
            <p>Proben: donnerstags, 19:30 Uhr im Pfarrheim Merten.</p>
          </div>

          <div style={{ flex: '1 1 320px' }}>
            <h2>Nachricht senden</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
