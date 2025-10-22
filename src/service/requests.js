import { supabase } from "../lib/supabaseClient"

export const getTitles = async () => {
    const { data }= await supabase.from('titles').select('*')

    return data
}

export const setTitleRequest = async (title) => {
    const data = await supabase.from('titles').insert({title})

    return data
}

export const deleteTitle = async (id) => {
  const { error } = await supabase
    .from('titles')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Ошибка удаления:', error);
    throw error; // или return false;
  }

  return true;
};