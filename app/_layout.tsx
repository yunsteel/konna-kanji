import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { useColorScheme } from '@/hooks/useColorScheme'
import 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import { ThemedText } from '@/components/ThemedText'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <NavigationContainer independent>
      <StatusBar />
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: true, header: () => <ThemedText>콘나 칸지</ThemedText> }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </NavigationContainer>
  )
}
