const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://vhgeajunebshovovonntr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im1yay1kNThjMmRjOWExNjg0ZTliOTYyNjAzMmNkNGU4YTVhYiJ9.eyJpc3MiOiJodHRwczovL29pZGMuc3VwYWJhc2UuY29tL3ZoSFAzUDRqZ081N254bm50cl9wcm9qZWN0Iiwic3ViIjoicHJvamVjdDp2SFAzUDRqZ081N254bm50ciIsImF1ZCI6Imh0dHBzOi8vdkhQM1A0amdPNTdueG5udHIuc3VwYWJhc2UuY29tLyIsImV4cCI6MTc3NTgxNTQwNn0.V9X_7b_9_X-Y-Z-A...'; 
// Oh wait, I don't have the real anon key!
// Let me use the one from .env.local if it exists...
