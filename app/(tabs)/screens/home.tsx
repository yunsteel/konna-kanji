import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

const HomeScreen: FC = () => {
  return (
    <ScrollView>
      <ThemedView>
        <ThemedView>
          <ThemedText>안녕하세요</ThemedText>
          <View>
            <Text>(대충 홈화면 레이아웃)</Text>
          </View>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  )
}

export default HomeScreen
