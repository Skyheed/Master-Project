import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CustomButton from '../../../../components/CustomButton'
import { router } from 'expo-router'
import Header from '../../../../components/Header'

const LukkedeRum = () => {
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
            <View className="flex-row bg-orange-400 justify-center items-center">
                <Text className="text-3xl font-pbold mt-5 mb-5 mx-5 text-center">Lukkede rum og særlige miljøer</Text>
            </View>
            <View className="justify-center items-center h-[130px] mx-5">
                <CustomButton 
                    title="Arbejde i brønde, kloakker og bygværker"
                    imgSource={require('../../../../assets/images/well.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/kloak')}
                    containerStyles={"min-w-[300px] mt-10 bg-orange-400"}
                    textStyles={"text-center align-middle"}
                />
            </View>
            <View className="justify-center items-center max-h-[100px] mx-5">
                <CustomButton 
                    title="Udgravning"
                    imgSource={require('../../../../assets/images/shovel.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/udgravning')}
                    containerStyles={"min-w-[300px] mt-10 bg-orange-400"}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default LukkedeRum