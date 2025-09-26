import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { router, Link } from 'expo-router'
import HeaderTabs from '../../../../components/HeaderTabs'
import SpeakableText from '../../../../components/SpeakableText'
import * as Speech from 'expo-speech';

const Risici = () => {
  return (
    <SafeAreaView className="flex-1 bg-white h-full">
      <View className="border-b-2 border-primary">
        <HeaderTabs
          backgroundColor="white"
          leftPress={() => {router.back(), Speech.stop()}}
        />
      </View>
      <ScrollView>
        <View className="bg-primary items-center justify-center flex-row">
          <Text className="text-3xl font-pbold mt-5 mb-5 w-[285]">Risici</Text>
          <SpeakableText
          children={"Har du det rette arbejdstøj og værnemidler. " +
            "Er der risiko for, at du kan komme til skade med værktøjet. " +
            " Er der fare for at falde ned eller få noget i hovedet. " + 
            "Er der fare for at glide eller falde. " +
            "Er der risiko for gasdannelse eller manglende ilt på arbejdspladsen. " +
            "Er der tungt arbejde (løft/træk/skub). " +
            "skal du bruge kemikalier. " + 
            "Er der styr på el- og maskinsikkerhed. " + 
            "Skal der udgraves, afspærres eller sikres trafikale forhold. " + 
            "Skal der bruges specialværktøj, og har du kompetencen til at bruge det. " +
            "Kræver opgaven speciel instruktion. " + 
            "Vil der komme affald i forbindelse med opgaven. " +
            "Er opgaven i forbindelse med spildevand skråstreg slam, og har du styr på hygiejneforhold og vaccinationer. " +
            "Har du tilstrækkelig tid til opgaven. "}/>
        </View>
        
        {/* Eksempel på hvordan der skal laves link til ikonerne */}
        {/* <Link href="https://www.flaticon.com/free-icons/uniform">Uniform icons created by Flat Icons - Flaticon</Link> */}
        
        <View className="mx-5 mt-5">
          {/* Arbejdstøj */}
          <View className="flex flex-row border-2 rounded-xl">
            <View className="w-[100px] h-[100px] justify-center">
              <Image 
              source={require('../../../../assets/images/coverall.png')}
              style={{ resizeMode: 'stretch', width: 80, height: 80}}
              className="ml-2.5"
              />
              {/* <Link href="https://www.flaticon.com/free-icons/uniform" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Flat Icons</Link> */}
            </View>
            <View className="border-l-2 w-[220px] h-[100px]">
                <Text className="font-pregular text-xl mx-1 mt-1">Har du det rette arbejdstøj og 
                <Link href="/sikkerhedsudstyr" className="text-blue-500 underline"> værnemidler?</Link></Text>
            </View>
          </View>
          {/* Skader */}
          <View className="flex flex-row border-2 rounded-xl border-t-0">
            <View className="w-[100px] h-[100px] justify-center">
              <Image 
              source={require('../../../../assets/images/finger_injury.png')}
              style={{ resizeMode: 'stretch', width: 80, height: 80}}
              className="ml-2.5"
              />
              {/* <Link href="https://www.flaticon.com/free-icons/hurt" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by maswan</Link> */}
            </View>
            <View className="border-l-2 w-[220px] h-[100px]">
              <Text className="font-pregular text-xl mx-1 mt-1">Er der risiko for, at du kan komme til skade
              med værktøjet?</Text>
            </View>
          </View>
          {/* Faldene objekter */}
          <View className="flex flex-row border-2 rounded-xl border-t-0">
            <View className="w-[100px] h-[100px] justify-center">
              <Image 
              source={require('../../../../assets/images/falling-objects.png')}
              style={{ resizeMode: 'stretch', width: 80, height: 80}}
              className="ml-2.5"
              />
              {/* <Link href="https://www.flaticon.com/free-icons/accident" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
            </View>
            <View className="border-l-2 w-[220px] h-[100px]">
              <Text className="font-pregular text-xl mx-1 mt-1">Er der fare for at 
              <Link href="/faldsikring" className="text-blue-500 underline"> falde</Link> ned 
              eller få noget i hovedet?</Text>
            </View>
          </View>
          {/* Glide eller falde */}
          <View className="flex flex-row border-2 rounded-xl border-t-0">
            <View className="w-[100px] h-[100px] justify-center">
              <Image 
              source={require('../../../../assets/images/slip_icon.png')}
              style={{ resizeMode: 'stretch', width: 80, height: 80}}
              className="ml-2.5"
              />
              {/* <Link href="https://www.flaticon.com/free-icons/slippery" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
            </View>
            <View className="border-l-2 w-[220px] h-[100px]">
              <Text className="font-pregular text-xl mx-1 mt-1">Er der fare for at glide eller falde?</Text>
            </View>
          </View>
          {/* Gas */}
          <View className="flex flex-row border-2 rounded-xl border-t-0">
            <View className="w-[100px] h-[120px] justify-center">
              <Image 
              source={require('../../../../assets/images/co2.png')}
              style={{ resizeMode: 'stretch', width: 80, height: 80}}
              className="ml-2.5 mb-3 mt-2"
              />
              {/* <Link href="https://www.flaticon.com/free-icons/toxic" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
            </View>
            <View className="border-l-2 w-[220px] h-[120px]">
              <Text className="font-pregular text-xl mx-1 mt-1"><Link href="/sikkerhedsudstyr" 
              className="text-blue-500 underline">Er der risiko</Link> for gasdannelse eller manglende
              ilt på arbejdspladsen?</Text>
            </View>
          </View>
          {/* Tunge Løft */}
          <View className="flex flex-row border-2 rounded-xl border-t-0">
            <View className="w-[100px] h-[100px] justify-center">
              <Image 
              source={require('../../../../assets/images/weight.png')}
              style={{ resizeMode: 'stretch', width: 80, height: 80}}
              className="ml-2.5"
              />
              {/* <Link href="https://www.flaticon.com/free-icons/kg" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
            </View>
            <View className="border-l-2 w-[220px] h-[100px]">
              <Text className="font-pregular text-xl mx-1 mt-1">
              Er der <Link href="/tunge" className="text-blue-500 underline">tungt arbejde</Link> (løft/træk/skub)?</Text>
            </View>
          </View>
          {/* Kemikalier */}
          <View className="flex flex-row border-2 rounded-xl border-t-0">
            <View className="w-[100px] h-[100px] justify-center">
              <Image 
              source={require('../../../../assets/images/chemical-reaction.png')}
              style={{ resizeMode: 'stretch', width: 80, height: 80}}
              className="ml-2.5"
              />
              {/* <Link href="https://www.flaticon.com/free-icons/chemical-reaction" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Eucalyp</Link> */}
            </View>
            <View className="border-l-2 w-[220px] h-[100px]">
              <Text className="font-pregular text-xl mx-1 mt-1">Skal du bruge 
              <Link href="/kemikalier" className="text-blue-500 underline"> kemikalier?</Link></Text>
            </View>
          </View>
          {/* El */}
          <View className="flex flex-row border-2 rounded-xl border-t-0">
            <View className="w-[100px] h-[100px] justify-center">
              <Image 
              source={require('../../../../assets/images/electricity-hazard.png')}
              style={{ resizeMode: 'stretch', width: 80, height: 80}}
              className="ml-2.5"
              />
              {/* <Link href="https://www.flaticon.com/free-icons/electrical-hazard" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by juicy_fish</Link> */}
            </View>
            <View className="border-l-2 w-[220px] h-[100px]">
              <Text className="font-pregular text-xl mx-1 mt-1">Er der styr på <Link 
              href="/el" className="text-blue-500 underline">el-</Link> og 
              <Link href="/maskine" className="text-blue-500 underline">maskinesikkerhed?</Link></Text>
            </View>
          </View>
          {/* Gravning */}
          <View className="flex flex-row border-2 rounded-xl border-t-0">
            <View className="w-[100px] h-[100px] mt-3 justify-center">
              <Image 
              source={require('../../../../assets/images/excavation.png')}
              style={{ resizeMode: 'stretch', width: 80, height: 80}}
              className="ml-2.5"
              />
              {/* <Link href="https://www.flaticon.com/free-icons/excavator" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Flat Icons</Link> */}
            </View>
            <View className="border-l-2 w-[220px] h-[120px]">
              <Text className="font-pregular text-xl mx-1 mt-1">Skal der <Link href="/grave" 
              className="text-blue-500 underline">udgraves,</Link> afspærres eller sikres trafikale 
              forhold?</Text>
            </View>
          </View>
          {/* Værktøj */}
          <View className="flex flex-row border-2 rounded-xl border-t-0">
            <View className="w-[100px] h-[120px] justify-center">
              <Image 
              source={require('../../../../assets/images/tools.png')}
              style={{ resizeMode: 'stretch', width: 80, height: 80}}
              className="ml-2.5 mb-3 mt-2"
              />
              {/* <Link href="https://www.flaticon.com/free-icons/tool-box" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Eucalyp</Link> */}
            </View>
            <View className="border-l-2 w-[220px] h-[120px]">
              <Text className="font-pregular text-xl mx-1 mt-1">Skal der bruges specialværktøj, og har du
              kompetencen til at bruge det?</Text>
            </View>
          </View>
          {/* Instruktion */}
          <View className="flex flex-row border-2 rounded-xl border-t-0">
            <View className="w-[100px] h-[100px] justify-center">
              <Image 
              source={require('../../../../assets/images/training.png')}
              style={{ resizeMode: 'stretch', width: 80, height: 80}}
              className="ml-2.5"
              />
              {/* <Link href="https://www.flaticon.com/free-icons/instruction" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Uniconlabs</Link> */}
            </View>
            <View className="border-l-2 w-[220px] h-[100px]">
              <Text className="font-pregular text-xl mx-1 mt-1">Kræver opgaven speciel instruktion?</Text>
            </View>
          </View>
          {/* Skrald */}
          <View className="flex flex-row border-2 rounded-xl border-t-0">
            <View className="w-[100px] h-[100px] justify-center">
              <Image 
              source={require('../../../../assets/images/trash.png')}
              style={{ resizeMode: 'stretch', width: 80, height: 80}}
              className="ml-2.5"
              />
              {/* <Link href="https://www.flaticon.com/free-icons/trash" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
            </View>
            <View className="border-l-2 w-[220px] h-[100px]">
              <Text className="font-pregular text-xl mx-1 mt-1">Vil der komme affald i forbindelse med
              opgaven?</Text>
            </View>
          </View>
          {/* Spildevand */}
          <View className="flex flex-row border-2 rounded-xl border-t-0">
            <View className="w-[100px] h-[170px] justify-center">
              <Image 
              source={require('../../../../assets/images/waste-water.png')}
              style={{ resizeMode: 'stretch', width: 80, height: 80}}
              className="ml-2.5 mb-3 mt-2"
              />
              {/* <Link href="https://www.flaticon.com/free-icons/sewage" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
            </View>
            <View className="border-l-2 w-[220px] h-[170px]">
              <Text className="font-pregular text-xl mx-1 mt-1">Er opgaven i forbindelse med spildevand/slam, 
              og har du styr på hygiejneforhold og vaccinationer?</Text>
            </View>
          </View>
          {/* Tid */}
          <View className="flex flex-row border-2 rounded-xl border-t-0 mb-20">
            <View className="w-[100px] h-[100px] justify-center">
              <Image 
              source={require('../../../../assets/images/chronometer.png')}
              style={{ resizeMode: 'stretch', width: 80, height: 80}}
              className="ml-2.5"
              />
              {/* <Link href="https://www.flaticon.com/free-icons/time" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
            </View>
            <View className="border-l-2 w-[220px] h-[100px]">
              <Text className="font-pregular text-xl mx-1 mt-1">Har du tilstrækkelig tid til opgaven?</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Risici