import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ggyqnbeojqtapyvuqhmd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdneXFuYmVvanF0YXB5dnVxaG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MzI3MDAsImV4cCI6MjA1NTIwODcwMH0.zormHOxmxCcVId4Ic6R4f_VMLeROHwsyByS43UcfyGA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})