import { Grade } from '@/lib/supabase/type'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type KanjiStackParamList = {
  Grades: undefined
  Kanji: { grade: Grade }
}

export type GradesScreenNavigationProps = NativeStackScreenProps<KanjiStackParamList, 'Grades'>
export type KanjiScreenNavigationProps = NativeStackScreenProps<KanjiStackParamList, 'Kanji'>
