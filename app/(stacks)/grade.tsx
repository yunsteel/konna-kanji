import KanjiText from '@/components/kanji/Text/Kanji'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { getKanjiListByGrade } from '@/lib/supabase/queries/knaji/select'
import { 상용한자 } from '@/lib/supabase/type'
import { GradeScreenNavigationProps, RootStackParamList } from '@/types/RootStack'
import { useRoute } from '@react-navigation/native'
import { FC, useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

const GradeScreen: FC = () => {
  const { params } = useRoute<GradeScreenNavigationProps['route']>()
  const grade = params?.grade

  const [kanjiList, setKanjiList] = useState<Array<상용한자>>([])

  useEffect(() => {
    if (!grade) return
    getKanjiListByGrade(grade).then(({ data, count }) => {
      setKanjiList(data ?? [])
    })
  }, [grade])

  return (
    <FlatList
      data={kanjiList}
      renderItem={({ item }) => (
        <View>
          <KanjiText kanji={item} />
        </View>
      )}
      keyExtractor={(item) => item.아이디.toString()}
    />
  )
}

export default GradeScreen
