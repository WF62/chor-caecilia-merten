import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import './MitgliederLogin.css'

export default function MitgliederLogin() {
  const [modus, setModus] = useState('anmelden') // 'anmelden' | 'registrieren'
  const [email, setEmail] = useState('')
  const [passwort, setPasswort] = useState('')
  const [status, setStatus] = useState(null) // { art: 'fehler' | 'erfolg', text }
  const [ladend, setLadend] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(null)
    setLadend(true)

    if (modus === 'anmelden') {
      const { error } = await supabase.auth.signInWithPassword({ email, password: passwort })
      if (error) setStatus({ art: 'fehler', text: 'Anmeldung fehlgeschlagen: ' + error.message })
    } else {
      const { error } = await supabase.auth.signUp({ email, password: passwort })
      if (error) {
        setStatus({ art: 'fehler', text: 'Registrierung fehlgeschlagen: ' + error.message })
      } else {
        setStatus({
          art: 'erfolg',
          text: 'Konto angelegt. Bitte bestätige deine E-Mail-Adresse über den Link, den wir dir geschickt haben, und melde dich danach an.',
        })
      }
    }

    setLadend(false)
  }

  return (
    <div className="mitglieder-login">
      <div className="mitglieder-login__tabs">
        <button
          type="button"
          className={modus === 'anmelden' ? 'is-active' : ''}
          onClick={() => setModus('anmelden')}
        >
          Anmelden
        </button>
        <button
          type="button"
          className={modus === 'registrieren' ? 'is-active' : ''}
          onClick={() => setModus('registrieren')}
        >
          Konto anlegen
        </button>
      </div>

      {modus === 'registrieren' && (
        <p className="mitglieder-login__hinweis">
          Konten können nur für vom Vorstand eingeladene E-Mail-Adressen angelegt werden. Nutze
          hier die E-Mail-Adresse, unter der du eingeladen wurdest.
        </p>
      )}

      <form onSubmit={handleSubmit} className="mitglieder-login__form">
        <label>
          E-Mail
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Passwort
          <input
            type="password"
            required
            minLength={6}
            value={passwort}
            onChange={(e) => setPasswort(e.target.value)}
          />
        </label>
        <button type="submit" className="btn" disabled={ladend}>
          {modus === 'anmelden' ? 'Anmelden' : 'Konto anlegen'}
        </button>
      </form>

      {status && (
        <p className={`mitglieder-login__status mitglieder-login__status--${status.art}`}>
          {status.text}
        </p>
      )}
    </div>
  )
}
