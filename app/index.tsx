import { ThemedText } from '@/components/ThemedText'
import { useColorScheme } from '@/hooks/useColorScheme'
import { useSupabaseAuth } from '@/lib/supabase/hooks/useSupabaseAuth'
import { RootStackParamList } from '@/types/RootStack'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'
import TabNavigation from './(tabs)'
import NotFoundScreen from './error/NotFoundScreen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

const RootStack = createNativeStackNavigator<RootStackParamList>()

const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}>
      <NavigationContainer independent>
        <StatusBar />
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <RootStack.Navigator>
            <RootStack.Screen
              name="Home"
              component={TabNavigation}
              options={{ headerShown: true, header: () => <ThemedText>콘나 칸지</ThemedText> }}
            />
            <RootStack.Screen name="NotFound" component={NotFoundScreen} />
          </RootStack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </QueryClientProvider>
  )
}
