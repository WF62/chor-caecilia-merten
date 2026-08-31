import { supabase } from '../lib/supabaseClient'

// Einladungen

export async function ladeEinladungen() {
  const { data, error } = await supabase
    .from('chor_einladungen')
    .select('email, verwendet, erstellt_am')
    .order('erstellt_am', { ascending: false })

  if (error) throw error
  return data
}

export async function legeEinladungAn(email) {
  const { error } = await supabase.from('chor_einladungen').insert({ email: email.trim().toLowerCase() })
  if (error) throw error
}

export async function loescheEinladung(email) {
  const { error } = await supabase.from('chor_einladungen').delete().eq('email', email)
  if (error) throw error
}

// Mitglieder (nur lesend, für die Admin-Übersicht)

export async function ladeAlleMitglieder() {
  const { data, error } = await supabase
    .from('chor_mitglieder')
    .select('id, name, ist_admin, erstellt_am')
    .order('erstellt_am', { ascending: false })

  if (error) throw error
  return data
}

// Kategorien

export async function legeKategorieAn({ titel, beschreibung, reihenfolge, nur_vorstand }) {
  const { error } = await supabase
    .from('chor_dokument_kategorien')
    .insert({ titel, beschreibung: beschreibung || null, reihenfolge, nur_vorstand: !!nur_vorstand })
  if (error) throw error
}

export async function aktualisiereKategorie(id, patch) {
  const { error } = await supabase.from('chor_dokument_kategorien').update(patch).eq('id', id)
  if (error) throw error
}

export async function loescheKategorie(id) {
  const { error } = await supabase.from('chor_dokument_kategorien').delete().eq('id', id)
  if (error) throw error
}

// Dokumente

export async function legeDokumentAn({ kategorie_id, titel, beschreibung, dateiurl, reihenfolge }) {
  const { error } = await supabase
    .from('chor_dokumente')
    .insert({ kategorie_id, titel, beschreibung: beschreibung || null, dateiurl: dateiurl || null, reihenfolge })
  if (error) throw error
}

export async function aktualisiereDokument(id, patch) {
  const { error } = await supabase.from('chor_dokumente').update(patch).eq('id', id)
  if (error) throw error
}

export async function loescheDokument(id) {
  const { error } = await supabase.from('chor_dokumente').delete().eq('id', id)
  if (error) throw error
}
