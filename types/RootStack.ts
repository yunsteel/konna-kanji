import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

export type RootStackParamList = {
  Home: undefined
  NotFound: undefined
}

export type HomeScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>
