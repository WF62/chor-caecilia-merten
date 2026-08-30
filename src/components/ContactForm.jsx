import { useState } from 'react'
import { ORGANISATION } from '../data/organisation'
import './ContactForm.css'

const EMPFAENGER = ORGANISATION.email

const ANLIEGEN_OPTIONEN = [
  'Allgemeine Frage',
  'Ich möchte aktives Mitglied werden',
  'Ich möchte passives Mitglied werden',
  'Sonstiges',
]

export default function ContactForm({ anliegenVorgabe }) {
  const [form, setForm] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    anliegen: anliegenVorgabe || ANLIEGEN_OPTIONEN[0],
    nachricht: '',
  })
  const [zustimmung, setZustimmung] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const body = [
      form.nachricht,
      '',
      `— ${form.vorname} ${form.nachname} (${form.email}${form.telefon ? `, ${form.telefon}` : ''})`,
    ].join('\n')
    const mailto = `mailto:${EMPFAENGER}?subject=${encodeURIComponent(form.anliegen)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Vorname
        <input type="text" name="vorname" required value={form.vorname} onChange={handleChange} />
      </label>
      <label>
        Nachname
        <input type="text" name="nachname" required value={form.nachname} onChange={handleChange} />
      </label>
      <label>
        E-Mail
        <input type="email" name="email" required value={form.email} onChange={handleChange} />
      </label>
      <label>
        Telefon (optional)
        <input type="tel" name="telefon" value={form.telefon} onChange={handleChange} />
      </label>
      <label>
        Anliegen
        <select name="anliegen" value={form.anliegen} onChange={handleChange}>
          {ANLIEGEN_OPTIONEN.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        Nachricht
        <textarea name="nachricht" rows={5} required value={form.nachricht} onChange={handleChange} />
      </label>
      <label className="contact-form__checkbox">
        <input
          type="checkbox"
          required
          checked={zustimmung}
          onChange={(e) => setZustimmung(e.target.checked)}
        />
        <span>
          Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage
          verwendet werden (siehe <a href="/datenschutz">Datenschutzerklärung</a>).
        </span>
      </label>
      <button type="submit" className="btn">Nachricht senden</button>
      <p className="contact-form__hint">
        Öffnet dein E-Mail-Programm mit vorausgefüllter Nachricht an {EMPFAENGER}.
      </p>
    </form>
  )
}
