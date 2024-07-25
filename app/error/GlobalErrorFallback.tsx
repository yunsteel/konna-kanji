import { ThemedView } from '@/components/ThemedView'
import { FC } from 'react'
import { Text } from 'react-native'

interface Props {}

const GlobalErrorFallback: FC<Props> = () => {
  return (
    <ThemedView>
      <Text>몬가 일어나고 있음..</Text>
    </ThemedView>
  )
}

export default GlobalErrorFallback
