import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CustomButton from '../../../../components/CustomButton'
import { router } from 'expo-router'
import Header from '../../../../components/Header'

const Arbejdsmetoder = () => {
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
            <View className="flex-row bg-purple-400 justify-center items-center">
                <Text className="text-3xl font-pbold mt-5 mb-5 mx-5 text-center">Arbejdsmetoder og Procedurer</Text>
            </View>
            <View className="justify-center items-center max-h-[100px] mx-5">
                <CustomButton 
                    title="Alene arbejde"
                    imgSource={require('../../../../assets/images/personlig.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/alene')}
                    containerStyles={"min-w-[300px] mt-10 bg-purple-400"}
                />
            </View>
            <View className="justify-center items-center max-h-[100px] mx-5">
                <CustomButton 
                    title="Tunge løft"
                    imgSource={require('../../../../assets/images/weight_V2.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/tunge')}
                    containerStyles={"min-w-[300px] mt-10 bg-purple-400"}
                />
            </View>
            <View className="justify-center items-center max-h-[100px] mx-5">
                <CustomButton 
                    title="Reparation og service"
                    imgSource={require('../../../../assets/images/machine.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/reparation')}
                    containerStyles={"min-w-[300px] mt-10 bg-purple-400"}
                />
            </View>
            <View className="justify-center items-center h-[130px] mx-5">
                <CustomButton 
                    title="Bygherre, projekterende og rådgiver"
                    imgSource={require('../../../../assets/images/social.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/bygherre')}
                    containerStyles={"min-w-[300px] max-w-[300px] mt-10 bg-purple-400 "}
                    textStyles={"text-center align-middle"}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Arbejdsmetoder