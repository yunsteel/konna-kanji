import { KanjiStackParamList } from '@/types/KanjiStack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'
import GradesScreen from './grades'
import KanjiScreen from './kanji'

const KanjiStack = createNativeStackNavigator<KanjiStackParamList>()

const KanjiTabScreen: FC = () => {
  return (
    <KanjiStack.Navigator>
      <KanjiStack.Screen name="Grades" component={GradesScreen} />
      <KanjiStack.Screen name="Kanji" component={KanjiScreen} />
    </KanjiStack.Navigator>
  )
}

export default KanjiTabScreen
