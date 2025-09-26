import { Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const PlayButton = ({title, handlePress, containerStyles, textStyles, isLoading, imgStyles, imgSource}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.5}
        className={`bg-black rounded-xl  justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
    > 
      <Text className={`text-black font-psemibold text-lg ${textStyles}`}>{title}
      <Image
        style={imgStyles}
        source={imgSource}
      />
      </Text>
    </TouchableOpacity>
  )
}

export default PlayButton