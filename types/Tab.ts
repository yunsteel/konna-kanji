import { Grade } from '@/lib/supabase/type'

export type BottomTabScreenProps = {
  Home: undefined
  Settings: undefined
  Kanji: { grade: Grade }
}
