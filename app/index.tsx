import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { useColorScheme } from '@/hooks/useColorScheme'
import 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'
import { ThemedText } from '@/components/ThemedText'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ButtonTabLayout from './(tabs)'
import NotFoundScreen from './error/NotFoundScreen'
import { RootStackParamList } from '@/types/RootStack'
import { useSupabaseAuth } from '@/lib/auth/useSupabaseAuth'
import Auth from '@/lib/auth/Auth'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

const Stack = createNativeStackNavigator<RootStackParamList>()

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

  useSupabaseAuth()

  if (!loaded) {
    return null
  }

  return (
    <NavigationContainer independent>
      <StatusBar />
      <Auth />
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ButtonTabLayout}
            options={{ headerShown: true, header: () => <ThemedText>콘나 칸지</ThemedText> }}
          />
          <Stack.Screen name="NotFound" component={NotFoundScreen} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  )
}
