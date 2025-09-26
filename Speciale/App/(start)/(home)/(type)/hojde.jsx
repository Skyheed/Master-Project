import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CustomButton from '../../../../components/CustomButton'
import { router } from 'expo-router'
import Header from '../../../../components/Header'

const Højde = () => {
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
            <View className="flex-row bg-blue-400 justify-center items-center">
                <Text className="text-3xl font-pbold mt-5 mb-5 mx-5 text-center">Arbejde i højden</Text>
            </View>
            <View className="justify-center items-center max-h-[100px] mx-5">
                <CustomButton 
                    title="Stillads, rækværk og personlift"
                    imgSource={require('../../../../assets/images/elevator.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/stillads')}
                    containerStyles={"min-w-[300px] mt-10 bg-blue-400"}
                />
            </View>
            <View className="justify-center items-center max-h-[100px] mx-5">
                <CustomButton 
                    title="Arbejde på stiger"
                    imgSource={require('../../../../assets/images/ladder.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/stiger')}
                    containerStyles={"min-w-[300px] mt-10 bg-blue-400"}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Højde