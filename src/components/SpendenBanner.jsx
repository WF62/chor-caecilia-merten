import { SPENDENAKTION } from '../data/spendenaktion'
import { ORGANISATION } from '../data/organisation'
import './SpendenBanner.css'

export default function SpendenBanner() {
  if (!SPENDENAKTION.aktiv) return null

  const {
    titel,
    einleitung,
    konzertDatum,
    konzertOrt,
    aufruf,
    foerderhinweis,
    besonderheit,
    plattform,
    kampagnenUrl,
    spendenkonto,
  } = SPENDENAKTION
  const kampagneVerfuegbar = !kampagnenUrl.startsWith('[')
  const mailto = `mailto:${ORGANISATION.email}?subject=${encodeURIComponent(
    '5-Euro-Aktion – Weihnachtskonzert'
  )}`

  return (
    <section className="section">
      <div className="container">
        <div className="spenden-banner">
          <span className="spenden-banner__eyebrow">🎄 Spendenaktion</span>
          <h2>{titel}</h2>

          <div className="spenden-banner__grid">
            <div>
              {einleitung.map((absatz) => (
                <p key={absatz.slice(0, 24)}>{absatz}</p>
              ))}
              <p className="spenden-banner__konzert">
                <span>📅 {konzertDatum}</span>
                <span>📍 {konzertOrt}</span>
              </p>
              <p>{aufruf}</p>
              <p className="spenden-banner__foerderhinweis">{foerderhinweis}</p>
              <p className="spenden-banner__besonderheit">{besonderheit}</p>
              {kampagneVerfuegbar ? (
                <a href={kampagnenUrl} target="_blank" rel="noreferrer" className="btn">
                  Zur Spendenaktion auf „{plattform}"
                </a>
              ) : (
                <>
                  <p className="spenden-banner__hinweis">
                    Die Crowdfunding-Kampagne auf „{plattform}" wird in Kürze freigeschaltet.
                  </p>
                  <a href={mailto} className="btn">Ich möchte informiert werden</a>
                </>
              )}
            </div>

            <div className="spenden-banner__konto">
              <h3>Alternativ: Spendenkonto</h3>
              <dl>
                <dt>Empfänger</dt>
                <dd>{spendenkonto.inhaber}</dd>
                <dt>IBAN</dt>
                <dd>{spendenkonto.iban}</dd>
                <dt>BIC</dt>
                <dd>{spendenkonto.bic}</dd>
                <dt>Verwendungszweck</dt>
                <dd>{spendenkonto.verwendungszweck}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
