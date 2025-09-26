import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CustomButton from '../../../../components/CustomButton'
import { router } from 'expo-router'
import Header from '../../../../components/Header'

const Sikkerhed = () => {
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
            <View className="flex-row bg-teal-400 justify-center items-center">
                <Text className="text-3xl font-pbold mt-5 mb-5 mx-5 text-center">Personlig sikkerhed og værnemidler</Text>
            </View>
            <View className="justify-center items-center max-h-[100px] mx-5">
                <CustomButton 
                    title="Brug af Kemikalier"
                    imgSource={require('../../../../assets/images/chemistry.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/kemikalier')}
                    containerStyles={"min-w-[300px] mt-10 bg-teal-400"}
                />
            </View>
            <View className="justify-center items-center max-h-[100px] mx-5">
                <CustomButton 
                    title="Værnemidler"
                    imgSource={require('../../../../assets/images/safety-goggles.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/sikkerhedsudstyr')}
                    containerStyles={"min-w-[300px] mt-10 bg-teal-400"}
                />
            </View>
            <View className="justify-center items-center max-h-[100px] mx-5">
                <CustomButton 
                    title="Faldsikring"
                    imgSource={require('../../../../assets/images/falling.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/faldsikring')}
                    containerStyles={"min-w-[300px] mt-10 bg-teal-400"}
                />
            </View>
            <View className="justify-center items-center max-h-[100px] mx-5">
                <CustomButton 
                    title="Afmærkning og afspærring"
                    imgSource={require('../../../../assets/images/cone.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/markering')}
                    containerStyles={"min-w-[300px] mt-10 bg-teal-400"}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Sikkerhed