import { createClient } from '@supabase/supabase-js'

// Der Publishable Key ist bewusst öffentlich (Client-seitig eingebettet) —
// der eigentliche Zugriffsschutz läuft über Row Level Security in Supabase,
// nicht über Geheimhaltung dieses Keys. Per .env überschreibbar, falls das
// Projekt einmal auf ein eigenes, unabhängiges Supabase-Projekt umzieht
// (siehe README: "Mitgliederbereich" für Hintergrund zum geteilten Projekt).
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hcbqmqyxpasojbrewnps.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_YaDqjG6QEuNzSC4TC5I4cQ_7Ax3IPX5'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
