import GradeList from '@/components/kanji/Grades'
import { ThemedView } from '@/components/ThemedView'
import { FC } from 'react'
import { Pressable, View } from 'react-native'
import { ScrollView, Text } from 'react-native'
import WebView from 'react-native-webview'

const HomeScreen: FC = () => {
  return (
    <ScrollView>
      <ThemedView>
        <Text>홈</Text>
        <View>
          <WebView source={{ uri: 'https://otakara.vercel.app/' }}>
            <Pressable>웹뷰 테스트 버튼</Pressable>
          </WebView>
        </View>
        <GradeList />
      </ThemedView>
    </ScrollView>
  )
}

export default HomeScreen
