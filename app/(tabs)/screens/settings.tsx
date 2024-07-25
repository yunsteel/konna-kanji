import Auth from '@/components/auth/Auth'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { FC } from 'react'

const SettingsScreen: FC = () => {
  return (
    <ThemedView>
      <ThemedText>Settings</ThemedText>
      <Auth />
    </ThemedView>
  )
}

export default SettingsScreen
