import { createClient } from '@supabase/supabase-js';

// NEW Supabase Project (yuuulgbqputqtlmydxaa) - April 2026
const PROD_URL = 'https://yuuulgbqputqtlmydxaa.supabase.co';
const PROD_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dXVsZ2JxcHV0cXRsbXlkeGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MDc2NzQsImV4cCI6MjA5MTM4MzY3NH0.Fnk9Nnh2yFvvhCGvsBbuN3C2Bo8l2jxcPt3vqwm2zrI';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || PROD_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || PROD_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
