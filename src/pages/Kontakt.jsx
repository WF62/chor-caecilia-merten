import { useSEO } from '../hooks/useSEO'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import { ORGANISATION } from '../data/organisation'

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
              {ORGANISATION.name}
              <br />
              {ORGANISATION.probenort}
              <br />
              {ORGANISATION.strasse}
              <br />
              {ORGANISATION.plzOrt}
            </p>
            <p>
              E-Mail: <a href={`mailto:${ORGANISATION.email}`}>{ORGANISATION.email}</a>
              <br />
              Telefon: <a href={ORGANISATION.telefonHref}>{ORGANISATION.telefon}</a>
            </p>
            <p>Proben: {ORGANISATION.probentag} im {ORGANISATION.probenort}.</p>
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
