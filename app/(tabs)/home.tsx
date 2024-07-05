import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { getKanjiListByGrade } from '@/lib/supabase/queries/knaji/select'
import { 상용한자 } from '@/lib/supabase/type'
import { FC, useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native'

const HomeScreen: FC = () => {
  const [kanjiList, setKanjiList] = useState<Array<상용한자>>([])

  useEffect(() => {
    getKanjiListByGrade('1').then(({ data, count }) => {
      setKanjiList(data ?? [])
    })
  }, [])

  return (
    <ScrollView>
      <ThemedView>
        <ThemedText>1학년 한자</ThemedText>
        <FlatList
          data={kanjiList}
          renderItem={({ item }) => (
            <ThemedView>
              <ThemedText>{item.한자}</ThemedText>
              <ThemedText>{item.발음}</ThemedText>
              <ThemedText>{item.훈음}</ThemedText>
              <ThemedText>{item.뜻}</ThemedText>
            </ThemedView>
          )}
          keyExtractor={(item) => item.아이디.toString()}
        />
      </ThemedView>
    </ScrollView>
  )
}

export default HomeScreen
