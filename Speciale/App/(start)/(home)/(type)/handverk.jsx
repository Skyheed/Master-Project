import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CustomButton from '../../../../components/CustomButton'
import { router } from 'expo-router'
import Header from '../../../../components/Header'

const Håndværk = () => {
  return (
    <SafeAreaView className="flex-1 bg-white h-full">
        <View>
        <Header
          backgroundColor="white"
          leftPress={() => router.back()}
          centerPress={() => router.push('search')}
        />
        </View>
        <ScrollView>
            <View className="flex-row bg-yellow-400 justify-center items-center">
                <Text className="text-3xl font-pbold mt-5 mb-5 mx-5 text-center">Håndværk og tekniske fagopgaver</Text>
            </View>
            <View className="justify-center items-center max-h-[100px] mx-5">
                <CustomButton 
                    title="Svejsning"
                    imgSource={require('../../../../assets/images/welding.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/svejsning')}
                    containerStyles={"min-w-[300px] mt-10 bg-yellow-400"}
                />
            </View>
            <View className="justify-center items-center max-h-[100px] mx-5">
                <CustomButton 
                    title="El-arbejde"
                    imgSource={require('../../../../assets/images/electric.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/el')}
                    containerStyles={"min-w-[300px] mt-10 bg-yellow-400"}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Håndværk