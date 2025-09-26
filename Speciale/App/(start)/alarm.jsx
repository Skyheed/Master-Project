import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'

const Alarm = () => {
  return (
    <SafeAreaView className="flex-1 bg-white h-full"> 
      <View className="border-b-2 border-primary h-[100px]">
      </View>
      <ScrollView>
        <View className="items-center justify-center border-4 border-x-0 border-primary"> 
          <Image 
            source={require('../../assets/images/Vand_Logo.png')}
            style={{ resizeMode: 'stretch', width: 320, height: 110}}
            className="mt-1 mb-1"
          />
        </View>
        <View className="bg-white items-start justify-start">
          <Text className="text-2xl font-psemibold ml-5 mt-5">Kommer snart...</Text>
        </View>

        {/* <View className="bg-white items-start justify-start">
          <Text className="text-xl font-psemibold ml-5 mt-5">Trin 1</Text>
          <Text className="text-xl font-pregular mx-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          </Text>
        </View>

        <View className="bg-white items-start justify-start">
          <Text className="text-xl font-psemibold ml-5 mt-5">Trin 2</Text>
          <Text className="text-xl font-pregular mx-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          </Text>
        </View>

        <View className="bg-white items-start justify-start">
          <Text className="text-2xl font-psemibold ml-5 mt-5">Placeholder</Text>
          <Text className="text-xl font-pregular mx-5">
          Placeholder
          </Text>
        </View>

        <View className="bg-white items-start justify-start">
          <Text className="text-2xl font-psemibold ml-5 mt-5">Hjertestarter</Text>
          <View className="bg-gray-300 min-h-[200px] mx-5 justify-center items-center">
            <Text className="text-xl font-pregular mx-5">
              Der er hjertestartere placeret på følgende lokationer: 
              <Text className="font-psemibold">Lokation 1</Text>,
              <Text className="font-psemibold">Lokation 2</Text>,
              <Text className="font-psemibold">Lokation 3</Text> og
              <Text className="font-psemibold">Lokation 4</Text>.
            </Text>
            <Text className="text-xl font-pmedium">Billede Placeholder</Text>
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Alarm