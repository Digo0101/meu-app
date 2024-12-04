// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dhtzvaszykfcftepdjar.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRodHp2YXN6eWtmY2Z0ZXBkamFyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzE5MTM5NiwiZXhwIjoyMDQ4NzY3Mzk2fQ.PKxjIvW4oSs5VGV5UtfPR9sJ23QT2V5gfG8_Nl6qZr4';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
