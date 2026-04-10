const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://yuuulgbqputqtlmydxaa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dXVsZ2JxcHV0cXRsbXlkeGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MDc2NzQsImV4cCI6MjA5MTM4MzY3NH0.Fnk9Nnh2yFvvhCGvsBbuN3C2Bo8l2jxcPt3vqwm2zrI'
);

async function inspect() {
  const { data, error } = await supabase
    .from('invitations')
    .select('id, slug, content');

  if (error) { console.error('Error:', error); return; }

  console.log(`Total invitations: ${data.length}`);
  data.forEach(inv => {
    console.log('\n--- Invitation ---');
    console.log('Slug:', inv.slug);
    console.log('Date raw:', JSON.stringify(inv.content?.date));
    console.log('Date chars:', [...(inv.content?.date || '')].map(c => c + '(' + c.charCodeAt(0) + ')').join(''));
    console.log('locationAddress:', inv.content?.locationAddress);
    console.log('theme:', inv.content?.theme);
  });
}

inspect();
