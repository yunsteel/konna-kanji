import { KanjiStackParamList } from '@/types/KanjiStack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'
import GradeListScreen from './gradeList'
import ChapterListScreen from './chapterList'
import ChapterItemScreen from './chapter'

const KanjiStack = createNativeStackNavigator<KanjiStackParamList>()

const KanjiTabScreen: FC = () => {
  return (
    <KanjiStack.Navigator>
      <KanjiStack.Screen name="GradeList" component={GradeListScreen} />
      <KanjiStack.Screen name="ChapterList" component={ChapterListScreen} />
      <KanjiStack.Screen name="ChapterItem" component={ChapterItemScreen} />
    </KanjiStack.Navigator>
  )
}

export default KanjiTabScreen
