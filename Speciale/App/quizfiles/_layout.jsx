import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const QuizLayout = () => {
    return (
      
    <Stack>
      <Stack.Screen name='quizScreen' options={{ headerShown: false}} />
      <Stack.Screen name='resultScreen' options={{ headerShown: false}}/>
      <Stack.Screen name='HomeQuiz' options={{ headerShown: false}} />
    </Stack>
    )
  }
  
  export default QuizLayout
  
  const styles = StyleSheet.create({})