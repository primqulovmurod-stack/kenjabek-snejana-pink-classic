const { createClient } = require('@supabase/supabase-js');

const PROD_URL = 'https://yuuulgbqputqtlmydxaa.supabase.co';
const PROD_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dXVsZ2JxcHV0cXRsbXlkeGFhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTgwNzY3NCwiZXhwIjoyMDkxMzgzNjc0fQ.NeStPJ063yA6PKFXj1ALo6sQ0ZINkWKeqsE6-C9Qht8';

const supabase = createClient(PROD_URL, PROD_SERVICE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function createTestUser() {
    console.log('Creating test user for development...');
    
    const { data, error } = await supabase.auth.admin.createUser({
        email: 'test@taklifnoma.asia',
        password: 'password123',
        email_confirm: true,
        user_metadata: { full_name: 'Murodbek Primqulov (Test)' }
    });

    if (error) {
        if (error.message.includes('already registered')) {
            console.log('Test user already exists.');
        } else {
            console.error('Error creating test user:', error.message);
        }
    } else {
        console.log('Test user created successfully:', data.user.id);
    }
}

createTestUser();
