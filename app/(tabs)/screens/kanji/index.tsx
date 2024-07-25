import { KanjiStackParamList } from '@/types/KanjiStack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'
import GradesScreen from './grades'
import KanjiScreen from './kanji'

const Stack = createNativeStackNavigator<KanjiStackParamList>()

const KanjiTabScreen: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Grades" component={GradesScreen} />
      <Stack.Screen name="Kanji" component={KanjiScreen} />
    </Stack.Navigator>
  )
}

export default KanjiTabScreen
