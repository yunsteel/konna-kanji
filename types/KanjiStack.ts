import { Grade } from '@/lib/supabase/type'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type KanjiStackParamList = {
  GradeList: undefined
  ChapterList: { grade: Grade }
  ChapterItem: { grade: Grade; chapter: number }
}

export type GradesScreenNavigationProps = NativeStackScreenProps<KanjiStackParamList, 'GradeList'>
export type KanjiScreenNavigationProps = NativeStackScreenProps<KanjiStackParamList, 'ChapterList'>
