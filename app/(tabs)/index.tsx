import React from 'react'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabScreenProps } from '@/types/Tab'
import SettingsScreen from './settings'
import HomeScreen from './home'

const Tab = createBottomTabNavigator<BottomTabScreenProps>()

export default function ButtonTabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        component={SettingsScreen}
        name="Settings"
        options={{
          tabBarLabel: '설정',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
