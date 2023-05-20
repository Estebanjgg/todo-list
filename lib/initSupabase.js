import { createClient } from '@supabase/supabase-js'
import { Database } from './schema'

const NEXT_PUBLIC_SUPABASE_URL = 'https://svbpdxwqubvvexfqjlrz.supabase.co'

export const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
