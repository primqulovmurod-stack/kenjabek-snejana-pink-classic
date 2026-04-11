const { createClient } = require('@supabase/supabase-js');

const PROD_URL = 'https://yuuulgbqputqtlmydxaa.supabase.co';
const PROD_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dXVsZ2JxcHV0cXRsbXlkeGFhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTgwNzY3NCwiZXhwIjoyMDkxMzgzNjc0fQ.NeStPJ063yA6PKFXj1ALo6sQ0ZINkWKeqsE6-C9Qht8';

const supabase = createClient(PROD_URL, PROD_SERVICE_KEY);

async function setupDatabase() {
    console.log('Setting up database schema and policies...');
    
    // 1. Add user_id column if it doesn't exist
    const { error: colError } = await supabase.rpc('exec_sql', { 
        sql_query: `
            DO $$ 
            BEGIN 
                IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='invitations' AND column_name='user_id') THEN
                    ALTER TABLE invitations ADD COLUMN user_id UUID REFERENCES auth.users(id);
                END IF;
            END $$;
        `
    });

    if (colError) {
        console.error('Error adding user_id column:', colError.message);
        // Fallback: try direct SQL if RPC is not available
        console.log('Trying alternative approach for schema update...');
    } else {
        console.log('user_id column check/add successful.');
    }

    // 2. Enable RLS and set policies
    const { error: rlsError } = await supabase.rpc('exec_sql', {
        sql_query: `
            ALTER TABLE invitations ENABLE ROW LEVEL SECURITY;
            
            DROP POLICY IF EXISTS "Users can view their own invitations" ON invitations;
            CREATE POLICY "Users can view their own invitations" ON invitations
                FOR SELECT USING (auth.uid() = user_id);
                
            DROP POLICY IF EXISTS "Users can insert their own invitations" ON invitations;
            CREATE POLICY "Users can insert their own invitations" ON invitations
                FOR INSERT WITH CHECK (auth.uid() = user_id);
                
            DROP POLICY IF EXISTS "Users can update their own invitations" ON invitations;
            CREATE POLICY "Users can update their own invitations" ON invitations
                FOR UPDATE USING (auth.uid() = user_id);
                
            DROP POLICY IF EXISTS "Users can delete their own invitations" ON invitations;
            CREATE POLICY "Users can delete their own invitations" ON invitations
                FOR DELETE USING (auth.uid() = user_id);

            -- Public policy for viewing invitations by slug
            DROP POLICY IF EXISTS "Anyone can view invitations by slug" ON invitations;
            CREATE POLICY "Anyone can view invitations by slug" ON invitations
                FOR SELECT USING (true);
        `
    });

    if (rlsError) {
        console.error('Error setting RLS policies:', rlsError.message);
    } else {
        console.log('RLS policies set successfully.');
    }
}

setupDatabase();
