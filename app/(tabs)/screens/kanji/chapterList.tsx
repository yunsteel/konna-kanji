import { ThemedView } from '@/components/ThemedView'
import { kanjiQueryKeys } from '@/lib/tanstack/queryKeys/kanji'
import { useChapterStore } from '@/stores/chapterStore'
import { KanjiScreenNavigationProps } from '@/types/KanjiStack'
import { useRoute } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'

const ChapterListScreen = () => {
  const {
    params: { grade = '1' },
  } = useRoute<KanjiScreenNavigationProps['route']>()

  const chapter = useChapterStore((state) => state.chapter)

  const { data } = useQuery(kanjiQueryKeys.metadata(grade, chapter ?? 1))

  return (
    <ThemedView>
      {/* <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <KanjiText kanji={item} />
          </View>
        )}
        keyExtractor={(item) => item.아이디.toString()}
      /> */}
    </ThemedView>
  )
}

export default ChapterListScreen
