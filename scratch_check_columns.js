const { createClient } = require('@supabase/supabase-js');

// NEW Supabase Project (yuuulgbqputqtlmydxaa) - April 2026
const PROD_URL = 'https://yuuulgbqputqtlmydxaa.supabase.co';
const PROD_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dXVsZ2JxcHV0cXRsbXlkeGFhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NTgwNzY3NCwiZXhwIjoyMDkxMzgzNjc0fQ.NeStPJ063yA6PKFXj1ALo6sQ0ZINkWKeqsE6-C9Qht8'; 

if (!PROD_SERVICE_KEY) {
    console.error('SUPABASE_SERVICE_ROLE_KEY missing');
    process.exit(1);
}

const supabase = createClient(PROD_URL, PROD_SERVICE_KEY);

async function checkTableInfo() {
    const { data: columns, error } = await supabase
        .rpc('get_table_columns', { table_name_input: 'invitations' });

    if (error) {
        // Alternative: try a direct query to get one row
        console.log('RPC error (maybe function doesnt exist):', error.message);
        const { data, error: queryError } = await supabase.from('invitations').select('*').limit(1);
        if (queryError) {
            console.error('Query error:', queryError.message);
        } else if (data && data.length > 0) {
            console.log('Columns found in first row:', Object.keys(data[0]));
        } else {
            console.log('Table is empty, cannot infer columns.');
        }
    } else {
        console.log('Columns:', columns);
    }
}

checkTableInfo();
