import FailedToFetchFallback from '@/app/error/FailedToFetchFallback'
import KanjiText from '@/components/kanji/Kanji/Text'
import { ThemedView } from '@/components/ThemedView'
import { kanjiQueryKeys } from '@/lib/tanstack/queryKeys/kanji'
import { KanjiScreenNavigationProps } from '@/types/KanjiStack'
import { useRoute } from '@react-navigation/native'
import { useQueryErrorResetBoundary, useSuspenseQuery } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { FlatList, View } from 'react-native'

const KanjiScreen = () => {
  const { params } = useRoute<KanjiScreenNavigationProps['route']>()
  const grade = params?.grade

  const { data, isLoading } = useSuspenseQuery(kanjiQueryKeys.list(grade, { page: 0 }))

  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary onReset={reset} fallback={<FailedToFetchFallback />}>
      <ThemedView>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <KanjiText kanji={item} />
            </View>
          )}
          keyExtractor={(item) => item.아이디.toString()}
        />
      </ThemedView>
    </ErrorBoundary>
  )
}

export default KanjiScreen
