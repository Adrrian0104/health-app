import {createClient} from "@supabase/supabase-js";
const SUPABASE_URL="https://qjosnidnptmyjvfxvfis.supabase.co";
const SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqb3NuaWRucHRteWp2Znh2ZmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NjIxNTMsImV4cCI6MjA1OTEzODE1M30.tD1Lh4rq2oF3bYjATub0tOxRZbuJThzZSa4KincsJs8";
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);