import { ThemedView } from '@/components/ThemedView'
import { 상용한자 } from '@/lib/supabase/type'
import { FC } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

interface Props {
  kanji: 상용한자
}

const KanjiText: FC<Props> = ({ kanji: { 한자, 발음, 뜻 } }) => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.kanji}>{한자}</Text>
      <Text>{발음}</Text>
      <View>
        <FlatList data={뜻?.split(' ')} renderItem={({ item }) => <Text>{item}</Text>} />
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 1,
    padding: 16,
    alignItems: 'center',
  },
  kanji: {
    fontWeight: '500',
    fontSize: 50,
  },
})

export default KanjiText
