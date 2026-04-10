const { createClient } = require('@supabase/supabase-js');

const PROD_URL = 'https://yuuulgbqputqtlmydxaa.supabase.co';
const PROD_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dXVsZ2JxcHV0cXRsbXlkeGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MDc2NzQsImV4cCI6MjA5MTM4MzY3NH0.Fnk9Nnh2yFvvhCGvsBbuN3C2Bo8l2jxcPt3vqwm2zrI';

const supabase = createClient(PROD_URL, PROD_ANON_KEY);

async function check() {
  const { data, error } = await supabase
    .from('invitations')
    .select('id, slug, content');
  
  if (error) {
    console.error(error);
    return;
  }
  
  data.forEach(row => {
    console.log(`Slug: ${row.slug}, Date in content: ${row.content.date}`);
  });
}

check();
