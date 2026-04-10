import { createClient } from '@supabase/supabase-js';

// NEW Supabase Project (yuuulgbqputqtlmydxaa) - April 2026
const PROD_URL = 'https://yuuulgbqputqtlmydxaa.supabase.co';
const PROD_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dXVsZ2JxcHV0cXRsbXlkeGFhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTgwNzY3NCwiZXhwIjoyMDkxMzgzNjc0fQ.NeStPJ063yA6PKFXj1ALo6sQ0ZINkWKeqsE6-C9Qht8';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || PROD_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || PROD_SERVICE_KEY;

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});
