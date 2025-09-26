import { Image, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

const Submit = ({id, info, containerStyles, textStyles, isLoading}) => {
    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        
    }, []);


    const quizDone = async () => {
        if(!completed){
            await storeData(id, info)
        }
        // Set the quiz as completed in AsyncStorage

        // Update the local state for completed status
        setCompleted(!completed)

        await AsyncStorage.setItem("quizUpdated", JSON.stringify(true))

        //Navigate back after everything is saved
        router.dismissAll();
    }
    
    const storeData = async (key, value) => {
        try {
            const existingData = await AsyncStorage.getItem(key)
            if (existingData !== null) {
                console.log("Data already exists")
                const parsedData = JSON.parse(existingData)

                const prevCorrect = parsedData.answeredQuestion;
                const prevTotal = parsedData.totalQuestion;
                const newCorrect = value.answeredQuestion;
                const newTotal = value.totalQuestion;

                // Do not overwrite if:
                // 1. New score isn't higher
                // 2. Quiz is already perfect
                const alreadyPerfect = prevCorrect === prevTotal;
                const isWorseOrEqual = newCorrect <= prevCorrect;

                if (alreadyPerfect || isWorseOrEqual) {
                    return;
                }
            }

            // Save new data if none existed or it's an improvement
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <TouchableOpacity
            onPress={quizDone}
            activeOpacity={0.5}
            className={`bg-primary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
        <Text className={`text-black font-psemibold text-lg ${textStyles}`}>Færdiggør Quiz</Text>
        </TouchableOpacity>
  )
}

export default Submit