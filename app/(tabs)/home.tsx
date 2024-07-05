import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { FC } from 'react'

const HomeScreen: FC = () => {
  return (
    <ThemedView>
      <ThemedText>Hello, Home</ThemedText>
    </ThemedView>
  )
}

export default HomeScreen
