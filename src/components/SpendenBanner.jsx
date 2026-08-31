import { ORGANISATION } from '../data/organisation'
import './SpendenBanner.css'

export default function SpendenBanner({ daten, eyebrow = '🎄 Spendenaktion', mailtoBetreff }) {
  if (!daten.aktiv) return null

  const { titel, einleitung, termin, aufruf, hervorgehoben, abschluss, plattform, kampagnenUrl, spendenkonto } = daten
  const kampagneVerfuegbar = !kampagnenUrl.startsWith('[')
  const mailto = `mailto:${ORGANISATION.email}?subject=${encodeURIComponent(mailtoBetreff || titel)}`

  return (
    <section className="section">
      <div className="container">
        <div className="spenden-banner">
          <span className="spenden-banner__eyebrow">{eyebrow}</span>
          <h2>{titel}</h2>

          <div className="spenden-banner__grid">
            <div>
              {einleitung.map((absatz) => (
                <p key={absatz.slice(0, 24)}>{absatz}</p>
              ))}
              {termin && (
                <p className="spenden-banner__konzert">
                  {termin.datum && <span>📅 {termin.datum}</span>}
                  {termin.ort && <span>📍 {termin.ort}</span>}
                </p>
              )}
              <p>{aufruf}</p>
              {(hervorgehoben || []).map((absatz) => (
                <p
                  key={absatz.text.slice(0, 24)}
                  className={
                    absatz.betont
                      ? 'spenden-banner__besonderheit'
                      : 'spenden-banner__foerderhinweis'
                  }
                >
                  {absatz.text}
                </p>
              ))}
              {abschluss && <p>{abschluss}</p>}
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
