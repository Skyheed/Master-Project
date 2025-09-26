import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            height: 70,
          },
        }}
      >
        <Tabs.Screen
          name="(home)"
          listeners={{
            tabPress: () => {Speech.stop()}
          }}
          options={{
            title: "Hjem",
            headerShown: false,
            popToTopOnBlur: true,
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons 
                    name="home" 
                    color={color} 
                    size={size}
                />
            )
        }}
        />
        <Tabs.Screen
          name="quiz"
          listeners={{
            tabPress: () => {Speech.stop()}
          }}
          options={{
            title: "Quiz",
            headerShown: false,
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons 
                    name="format-list-checks" 
                    color={color} 
                    size={size}
                />
            )
        }}
        />
        <Tabs.Screen
          name="favourites"
          listeners={{
            tabPress: () => {Speech.stop()}
          }}
          options={{
            title: "Favoritter",
            headerShown: false,
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons 
                    name="star" 
                    color={color} 
                    size={size}
                />
            )
        }}
        />
        <Tabs.Screen
          name="alarm"
          listeners={{
            tabPress: () => {Speech.stop()}
          }}
          options={{
            title: "Beredskab",
            headerShown: false,
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons 
                    name="medical-bag" 
                    color={color} 
                    size={size}
                />
            )
        }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout