import { supabase } from '../..'

const grades = ['1', '2', '3', '4', '5', '6', 'S']

export const getKanjiListByGrade = async (grade: (typeof grades)[number]) => {
  return supabase.from('상용한자').select('*').eq('학년', grade)
}
