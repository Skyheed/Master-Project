import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const QuizButton = ({title, text, handlePress, containerStyles, titleStyles, textStyles, isLoading, imgStyles, imgSource}) => {
  return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.5}
            className={`flex-row bg-primary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
        <Text className={`text-black font-psemibold text-lg ${titleStyles}`}>{title}</Text>
        <View className="w-[60px] justify-center items-center border-2 rounded-full bg-black mr-5">
          <Text className={`text-gray-100 font-psemibold text-lg ${textStyles}`}>{text}</Text>
        </View>
        <Image
            style={imgStyles}
            source={imgSource}
        />
        </TouchableOpacity>
  )
}

export default QuizButton
