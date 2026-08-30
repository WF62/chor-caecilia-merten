import { supabase } from '../lib/supabaseClient'

export async function ladeMitgliedProfil(userId) {
  const { data, error } = await supabase
    .from('chor_mitglieder')
    .select('id, name, ist_admin')
    .eq('id', userId)
    .maybeSingle()

  if (error) throw error
  return data
}

export async function ladeDokumentStruktur() {
  const { data: kategorien, error: fehlerKategorien } = await supabase
    .from('chor_dokument_kategorien')
    .select('id, titel, beschreibung, reihenfolge')
    .order('reihenfolge', { ascending: true })

  if (fehlerKategorien) throw fehlerKategorien

  const { data: dokumente, error: fehlerDokumente } = await supabase
    .from('chor_dokumente')
    .select('id, kategorie_id, titel, beschreibung, dateiurl, reihenfolge')
    .order('reihenfolge', { ascending: true })

  if (fehlerDokumente) throw fehlerDokumente

  return kategorien.map((kategorie) => ({
    ...kategorie,
    dokumente: dokumente.filter((dokument) => dokument.kategorie_id === kategorie.id),
  }))
}
