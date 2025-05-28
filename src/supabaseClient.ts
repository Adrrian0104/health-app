import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://bebzmruuhophabtcuyxf.supabase.co";
const SUPABASE_ANON_KEY = "+bJ33uIzBQml+pNR1zqUfXeZFabilP7FEgkQG1/S3Aqmr5ip6SFdq1s39KkJ3WmKEoh5yAZW7uTfbOTfQlJ8Vg==";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
