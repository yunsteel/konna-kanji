import GradeList from '@/components/kanji/Grades'
import { ThemedView } from '@/components/ThemedView'
import { FC } from 'react'
import { ScrollView, Text } from 'react-native'

const HomeScreen: FC = () => {
  return (
    <ScrollView>
      <ThemedView>
        <Text>홈</Text>
        <GradeList />
      </ThemedView>
    </ScrollView>
  )
}

export default HomeScreen
