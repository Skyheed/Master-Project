import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const TypeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="handverk" options={{ headerShown: false}} />
      <Stack.Screen name="lukkede" options={{ headerShown: false}} />
      <Stack.Screen name="maskine" options={{ headerShown: false}} />
      <Stack.Screen name="hojde" options={{ headerShown: false}} />
      <Stack.Screen name="sikkerhed" options={{ headerShown: false}} />
      <Stack.Screen name="arbejdsmetoder" options={{ headerShown: false}} />
      <Stack.Screen name="risici" options={{ headerShown: false}} />
    </Stack>
  )
}

export default TypeLayout