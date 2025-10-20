import { supabase } from "../lib/supabaseClient"

export const getTitles = async () => {
    const data = await supabase.from('titles').select()

    return data
}

