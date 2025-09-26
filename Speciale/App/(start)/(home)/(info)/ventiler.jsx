import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../../../components/CustomButton'
import { router, Link } from 'expo-router'
import Header from '../../../../components/Header'
import Favourite from '../../../../components/Favourite'
import SpeakableText from '../../../../components/SpeakableText';
import * as Speech from 'expo-speech';

const Ventiler = () => {
  const quizindex = "ventiler";
  
  const info = {
    title: "Arbejde med ventiler",
    path: "/ventiler"
  }

  const key = "19";

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="border-b-2 border-primary">
        <Header
            backgroundColor="white"
            leftPress={() =>{router.back(), Speech.stop()}}
            // rightPress={() => {router.dismissAll(),Speech.stop()}}
            centerPress={() => {router.push('search'), Speech.stop()}}
        />
      </View>
      <ScrollView>
        <View className="flex-row bg-primary justify-center items-center">
          <Text className="text-3xl font-pbold my-5 w-[260px]">Arbejde med Ventiler</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>

        <View className="mx-5 mt-5">
          <View className="flex-row">
            <Text className="text-2xl font-psemibold w-[270px]">Hvad er Vigtigt?</Text>
            <SpeakableText 
              styles={"ml-5"}
              children={"Hvad er vigtigt. At undgå skulder- og rygskader, når ventiler skal åbnes/lukkes."
              }
            />
          </View>
          <Text className="text-xl font-pregular">
          At undgå skulder- og rygskader, når ventiler skal åbnes/lukkes. 
          </Text>
        </View>
        
        <View className="flex-row mx-5">
          <View className="justify-center items-center mt-5 mx-5">
            <Image 
              source={require('../../../../assets/images/valve_V2.png')}
              style={{ resizeMode: 'stretch', width: 100, height: 100}}
            />
            {/* <Link href="https://www.flaticon.com/free-icons/valve" 
            className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
          </View>
          <View className="justify-center items-center mt-5 ml-10">
            <Image 
              source={require('../../../../assets/images/drill.png')}
              style={{ resizeMode: 'stretch', width: 100, height: 100}}
            />
            {/* <Link href="https://www.flaticon.com/free-icons/drill" 
            className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
          </View>
        </View>

        <View className="mt-5 mx-5">
          <View className="flex-row">
            <Text className="font-psemibold text-2xl w-[270px]">Info</Text>
            <SpeakableText 
              styles={"ml-5"}
              children={"Info. Brug skruemaskine som hjælpeværktøj. Sørg for at have en god arbejdsstilling og undgå vrid i skuldrene."
              }
            />
          </View>
          <Text className="font-pregular text-xl mb-3">Brug skruemaskine som hjælpeværktøj.</Text>
          <Text className="font-pregular text-xl">Sørg for at have en god arbejdsstilling og undgå vrid i skuldrene.</Text>
        </View>

        <View className="justify-center items-center mt-5 border-red-600 border-4 mx-20 mb-5">
          <Text className="text-2xl font-psemibold">Er du i tvivl?</Text>
          <Text className="text-2xl font-psemibold">Så spørg din</Text>
          <Text className="text-2xl font-psemibold">ARBEJDSLEDER</Text>
        </View>

        {/* <View className="bg-white min-h-[200px] justify-start items-center">
          <CustomButton 
            title="Test Dig selv"
            imgSource={require('../../../../assets/images/book.png')}
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "ventiler"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-5"}
          />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Ventiler