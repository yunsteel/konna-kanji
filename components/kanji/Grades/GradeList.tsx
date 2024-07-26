import { ThemedView } from '@/components/ThemedView'
import { Grade } from '@/lib/supabase/type'
import { GradesScreenNavigationProps } from '@/types/KanjiStack'
import { FC } from 'react'
import { Pressable, ScrollView, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const GRADE_LIST: Grade[] = ['1', '2', '3', '4', '5', '6', 'S']

const GradeList = ({ navigation }: GradesScreenNavigationProps) => {
  const handleClickGradeItem = (grade: Grade) => {
    navigation.navigate('ChapterList', { grade })
  }

  return (
    <ScrollView>
      <ThemedView>
        <FlatList
          data={GRADE_LIST}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GradeItem grade={item} onClickItem={() => handleClickGradeItem(item)} />
          )}
        />
      </ThemedView>
    </ScrollView>
  )
}

export default GradeList

interface GradeItemProps {
  onClickItem: () => void
  grade: Grade
}

const GradeItem: FC<GradeItemProps> = ({ onClickItem, grade }) => {
  const buttonText = grade === 'S' ? '중등한자' : grade + '학년'

  return (
    <Pressable onPress={onClickItem}>
      <Text>{buttonText}</Text>
    </Pressable>
  )
}
