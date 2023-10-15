
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://djaskyrortimanxgzctm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqYXNreXJvcnRpbWFueGd6Y3RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwODI3MzcsImV4cCI6MjAxMDY1ODczN30.xrjrEytrTXEgGyWdFo8xhVFOA8chDVWts4WuxKpjhdM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;