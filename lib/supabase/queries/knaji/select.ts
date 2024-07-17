import { supabase } from '../..'
import { Grade } from '../../type'

const grades: Grade[] = ['1', '2', '3', '4', '5', '6', 'S']

export const getKanjiListByGrade = async (grade: (typeof grades)[number]) => {
  return supabase.from('상용한자').select('*').eq('학년', grade).order('총획', { ascending: true })
}
