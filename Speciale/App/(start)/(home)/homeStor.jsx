import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../components/CustomButton'
import { router, Link } from 'expo-router'
import Header from '../../../components/Header'
import SpeakableText from '../../../components/SpeakableText'
import * as Speech from 'expo-speech';

const HomeStor = () => {
  return (
    <SafeAreaView className="flex-1 bg-white h-full"> 
      <View className="border-b-2 border-primary">
        <Header
          backgroundColor="white"
          leftPress={() => {router.back(), Speech.stop()}}
          // rightPress={() => {router.dismissAll(), Speech.stop()}}
          centerPress={() => {router.push('search'), Speech.stop()}}
        />
      </View>
      <ScrollView>
        <View className="items-center justify-center border-4 border-x-0 border-primary"> 
          {/* <Text className="text-3xl font-pbold mt-5 mb-5">VandCenter Syd</Text> */}
          <Image 
            source={require('../../../assets/images/Vand_Logo.png')}
            style={{ resizeMode: 'stretch', width: 320, height: 110}}
            className="mt-1 mb-1"
          />
        </View>

        <View className="mx-5 mt-5 justify-center items-center border-red-600 border-4">
          <Text className="text-2xl font-psemibold">Mange ting kan gå galt</Text>
          <Image 
            source={require('../../../assets/images/risici_v2.png')}
            style={{ resizeMode: 'contain', width: 300, height: 200}}
          />
          {/* <Text className="text-xs font-pregular mx-5">Kilde: <Link 
            href="https://www.forgeresourcesgroup.com/the-top-5-safety-hazards-in-a-manufacturing-workplace/" 
            className="text-blue-500 underline">Link</Link>
          </Text>  */}
          <Text className="text-2xl font-psemibold">Vær opmærksom!</Text>
        </View>

        <View className="mx-5 mt-5">
          <View className="flex flex-row">
            <Text className="text-2xl font-psemibold w-[285px]">Ricisi</Text>
            <SpeakableText
            children={"Risisi, INDEN du går i gang med en arbejdsopgave så husk. Tænk opgaven igennem. " + 
              "Peg på hvad der kan gå galt. Læg vægt på sikre løsninger. Ret dig efter reglerne. Lad dig ikke friste."
            }
            />
          </View>
          <Text className="text-xl font-pregular">INDEN du går i gang med en arbejdsopgave så husk:</Text>
          <Text className="text-xl font-pregular">{'\u2022'} Tænk opgaven igennem</Text>
          <Text className="text-xl font-pregular">{'\u2022'} Peg på hvad der kan gå galt</Text>
          <Text className="text-xl font-pregular">{'\u2022'} Læg vægt på sikre løsninger</Text>
          <Text className="text-xl font-pregular">{'\u2022'} Ret dig efter reglerne</Text>
          <Text className="text-xl font-pregular">{'\u2022'} Lad dig ikke friste</Text>
        </View>
        
        <View className="mx-5 mt-5">
          <View className="flex flex-row">
            <Text className="text-2xl font-psemibold w-[285px]">Spørg dig selv</Text>
            <SpeakableText
            children={"Spørg dig selv. Det er vigtigt at foretage en risikovurdering inden du går i gang med et stykke arbejde. " + 
              "Det er for både din egen skyld og andres. "}
            />
          </View>
          <Text className="text-xl font-pregular">
          Det er vigtigt at foretage en risikovurdering inden du går i gang med et stykke arbejde.
          Det er for både din egen skyld og andres. 
          </Text>
          
          <View className="justify-center items-center">
            <CustomButton 
              title="Se Risici"
              imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
              imgSource={require('../../../assets/images/think.png')}
              handlePress={() => {router.push('/risici'), Speech.stop()}}
              containerStyles={"w-[200px] h-[80px] mt-2.5"}
            />
          </View>
        </View>

        <View className="mx-5 mt-5">
          <View className="flex flex-row">
            <Text className="text-2xl font-psemibold w-[285px]">Hvad skal du lave?</Text>
            <SpeakableText
            children={"Hvad skal du lave. Der er mange forskellige typer af arbejdsopgaver. " +
            "Herunder er forskellige typer af arbejdsopgaver."}
            styles=""
            />
          </View>
          <Text className="text-xl font-pregular">Der er mange forskellige typer af arbejdsopgaver. 
            Herunder er forskellige typer af arbejdsopgaver:</Text>
        </View>

        {/* 3x3 Tabel af kanpper: */}
        <View className="flex flex-row ml-5">
          <CustomButton 
            title="Personlig sikkerhed"
            imgSource={require('../../../assets/images/personal-safety.png')}
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            handlePress={() => {router.push('/sikkerhed'), Speech.stop()}}
            containerStyles={"w-[100px] h-[100px] mt-5 bg-teal-400"}
          />
          <CustomButton 
            title="Arbejds metoder"
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            imgSource={require('../../../assets/images/clipboard.png')}
            handlePress={() => {router.push('/arbejdsmetoder'), Speech.stop()}}
            containerStyles={"w-[100px] h-[100px] mt-5 mx-2.5 bg-purple-400"}
          />
          <CustomButton 
            title="Arbejde i højden"
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            imgSource={require('../../../assets/images/ladder.png')}
            handlePress={() => {router.push('/hojde'), Speech.stop()}}
            containerStyles={"w-[100px] h-[100px] mt-5 bg-blue-400"}
          />
        </View>
        <View className="flex flex-row ml-5">
          <CustomButton 
            title="Lukkede rum"
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            imgSource={require('../../../assets/images/tunnel-outline.png')}
            handlePress={() => {router.push('/lukkede'), Speech.stop()}}
            containerStyles={"w-[100px] h-[100px] mt-2.5 bg-orange-400"}
          />
          <CustomButton 
            title="Maskiner"
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            imgSource={require('../../../assets/images/machine.png')}
            handlePress={() => {router.push('/maskine'), Speech.stop()}}
            containerStyles={"w-[100px] h-[100px] mt-2.5 mx-2.5 bg-red-400"}
          />
          <CustomButton 
            title="Håndværk"
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            imgSource={require('../../../assets/images/handyman.png')}
            handlePress={() => {router.push('/handverk'), Speech.stop()}}
            containerStyles={"w-[100px] h-[100px] mt-2.5 bg-yellow-400"}
          />
        </View>

        <View className="justify-center items-center mt-5 border-red-600 border-4 mx-20 mb-10">
          <Text className="text-2xl font-psemibold">Er du i tvivl?</Text>
          <Text className="text-2xl font-psemibold">Så spørg din</Text>
          <Text className="text-2xl font-psemibold">ARBEJDSLEDER</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeStor