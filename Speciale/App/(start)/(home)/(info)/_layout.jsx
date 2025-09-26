import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const InfoLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="tunge" options={{headerShown: false}} />
      <Stack.Screen name="personlig" options={{ headerShown: false}} />
      <Stack.Screen name="social" options={{ headerShown: false}} />
      <Stack.Screen name="ulykker" options={{ headerShown: false}} />
      <Stack.Screen name="kemikalier" options={{ headerShown: false}} />
      <Stack.Screen name="el" options={{ headerShown: false}} />
      <Stack.Screen name="faldsikring" options={{ headerShown: false}} />
      <Stack.Screen name="kloak" options={{ headerShown: false}} />
      <Stack.Screen name="kran" options={{ headerShown: false}} />
      <Stack.Screen name="markering" options={{ headerShown: false}} />
      <Stack.Screen name="reparation" options={{ headerShown: false}} />
      <Stack.Screen name="sikkerhedsudstyr" options={{ headerShown: false}} />
      <Stack.Screen name="stiger" options={{ headerShown: false}} />
      <Stack.Screen name="stillads" options={{ headerShown: false}} />
      <Stack.Screen name="udgravning" options={{ headerShown: false}} />
      <Stack.Screen name="alene" options={{ headerShown: false}} />
      <Stack.Screen name="ventiler" options={{ headerShown: false}} />
      <Stack.Screen name="svejsning" options={{ headerShown: false}} />
      <Stack.Screen name="bygherre" options={{ headerShown: false}} />
    </Stack>
  )
}

export default InfoLayout