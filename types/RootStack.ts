import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

export type RootStackParamList = {
  TabNavigation: undefined
  NotFound: undefined
}

export type TabNavigationScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'TabNavigation'
>
