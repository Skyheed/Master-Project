import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import CustomButton from '../../../../components/CustomButton'
import { router } from 'expo-router'
import Header from '../../../../components/Header'

const Maskine = () => {
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
            <View className="flex-row bg-red-500 justify-center items-center">
                <Text className="text-3xl font-pbold mt-5 mb-5 mx-5 text-center">Maskiner og teknisk udstyr</Text>
            </View>
            <View className="justify-center items-center max-h-[100px] mx-5">
                <CustomButton 
                    title="Kran, løftekæde, krog og truck"
                    imgSource={require('../../../../assets/images/forklift_V2.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/kran')}
                    containerStyles={"min-w-[300px] mt-10 bg-red-500"}
                />
            </View>
            <View className="justify-center items-center max-h-[100px] mx-5">
                <CustomButton 
                    title="Arbejde med ventiler"
                    imgSource={require('../../../../assets/images/valve.png')}
                    imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
                    handlePress={() => router.push('/ventiler')}
                    containerStyles={"min-w-[300px] mt-10 bg-red-500"}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Maskine