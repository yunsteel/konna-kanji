import KanjiText from '@/components/kanji/Kanji/Text'
import { ThemedView } from '@/components/ThemedView'
import { getKanjiListByGrade } from '@/lib/supabase/queries/knaji/select'
import { 상용한자 } from '@/lib/supabase/type'
import { KanjiScreenNavigationProps } from '@/types/KanjiStack'
import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

const KanjiScreen = () => {
  const { params } = useRoute<KanjiScreenNavigationProps['route']>()
  const grade = params?.grade

  const [kanjiList, setKanjiList] = useState<Array<상용한자>>([])

  useEffect(() => {
    if (!grade) return
    getKanjiListByGrade(grade, { page: 0 }).then(({ data, count }) => {
      setKanjiList(data ?? [])
    })
  }, [grade])

  return (
    <ThemedView>
      <FlatList
        data={kanjiList}
        renderItem={({ item }) => (
          <View>
            <KanjiText kanji={item} />
          </View>
        )}
        keyExtractor={(item) => item.아이디.toString()}
      />
    </ThemedView>
  )
}

export default KanjiScreen
