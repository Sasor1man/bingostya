import { supabase } from "../lib/supabaseClient"

export const getTitles = async () => {

    const { data, error } = await supabase.from('titles').select('*');

    if (error) {
    console.error('request error:', error);
    return false
  }

    return data
    
}

export const setTitleRequest = async (title) => {
  
    const { error } = await supabase.from('titles').insert({ title })
  
   if (error) {
    console.error('set error:', error);
    return false
  }
}

export const deleteTitle = async (id) => {
  const { error } = await supabase
    .from('titles')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('delete error:', error);
    return false
  }

  return true;
};