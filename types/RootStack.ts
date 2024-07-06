import { Grade } from '@/lib/supabase/type'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

export type RootStackParamList = {
  Home: undefined
  NotFound: undefined
  Grade: { grade: Grade }
}

export type HomeScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type GradeScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Grade'>
