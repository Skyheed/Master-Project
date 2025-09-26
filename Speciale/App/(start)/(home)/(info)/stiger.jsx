import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../../components/CustomButton'
import { router, Link } from 'expo-router'
import Header from '../../../../components/Header'
import Favourite from '../../../../components/Favourite'
import SpeakableText from '../../../../components/SpeakableText';
import Collapsible from 'react-native-collapsible'
import * as Speech from 'expo-speech';

const Stiger = () => {
  const quizindex = "stiger";
  
  const info = {
    title: "Arbejde på Stiger",
    path: "/stiger"
  }

  const key = "13";

  const [collapsed, setCollapsed] = useState(true);
    
  const toggleExpand = () => {
    setCollapsed(!collapsed);
  }

  var spinDeg = '0deg'

  if(!collapsed){
    spinDeg = '0deg'
  } else{
    spinDeg = '180deg'
  }

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
        <View className="flex-row justify-center items-center bg-primary">
          <Text className="text-3xl font-pbold my-5">Arbejde på Stiger</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>

        <View className="mt-5 mx-5">
          <View className="flex-row">
            <Text className="text-2xl font-psemibold w-[270px]">Hvad er Vigtigt?</Text>
            <SpeakableText 
              styles={"ml-5"}
              children={"Hvad er vigtigt. At vi bruger stiger korrekt og kun i begrænset omfang, så vi undgår at komme til skade og undgår overbelastningsskader."}
            />
          </View>
          <Text className="text-xl font-pregular">
            At vi bruger stiger korrekt og kun i begrænset omfang, så vi undgår at komme til skade og undgår overbelastningsskader. 
          </Text>
        </View>

        <View className="mt-5 mx-5">
          <View className="flex-row">
            <Text className="font-psemibold text-2xl w-[270px]">Vurderinger</Text>
            <SpeakableText 
              styles={"ml-5"}
              children={"Vurderinger. Vurdér ud fra arbejdshøjden om det er sikkert " +
              "at bruge stige, eller om der skal bruges trappetårn skråstreg stillads. Ved arbejdshøjde over 5 meter" +
              "anbefales det at bruge trappetårn skråstreg stillads. Stiger skal kontrolleres årligt. " +
              "Kontroldato er angivet på stigen. Nye stiger over 3 meter (købt efter 2018) skal være forsynet med stigfod."}
            />
          </View>
          <Text className="font-pregular text-xl mb-3">
          Vurdér ud fra arbejdshøjden om det er sikkert
          at bruge stige, eller om der skal bruges trappetårn/stillads. Ved arbejdshøjde <Text className="font-pbold">over 5 meter </Text>
          anbefales det at bruge trappetårn/stillads.
          </Text>
          <View className="flex-row">
            <Text className="font-pregular text-xl w-[200px]">
            Stiger <Text className="font-pbold">skal</Text> kontrolleres årligt. Kontroldato er angivet på stigen. 
            Nye stiger <Text className="font-pbold">over</Text>
            </Text>
            <View className="justify-center items-center">
              <Image 
                source={require('../../../../assets/images/fall.png')}
                style={{ resizeMode: 'stretch', width: 100, height: 100}}
              />
              {/* <Link href="https://www.flaticon.com/free-icons/ladder" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
            </View>
          </View>
          <Text className="font-pregular text-xl">
             <Text className="font-pbold">3 meter</Text> (købt efter 2018) skal være forsynet med stigfod.
          </Text>
        </View>

        <View className="mt-5">
          <View className="flex flex-row ">
            <Text className="text-2xl font-psemibold mx-5 w-[260]">Huskeregler</Text>
            <SpeakableText
            children={"Huskeregler. "+
              "Tjek om stigen er i orden og godkendt. "+
              "Placer stigen med den rette hældning – ogpå sikkert underlag. "+
              "Vurdér behov for fodmand eller faldsikring. "+
              "Brug fodmand ved ikke-fastgjorte stiger på 5 meter. "+
              "Ved arbejde i større end 2 meters højde bør der bruges faldsikring. "+
              "Vær iført fastsiddende fodtøj med en blød og skridsikker sål. "+
              "Arbejdstid: Max ½ time i træk og højst 2½ timer pr. dag."}
            />
          </View>
          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Tjek om stigen er i orden og godkendt.</Text>
          </View>
          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Placer stigen med den rette hældning – og
            på sikkert underlag.</Text>
          </View>
          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Vurdér behov for fodmand eller faldsikring:</Text>
          </View>
          <View className="flex flex-row ml-16">
            <Text className="text-xl font-pregular">{'\u2218'} </Text>
            <Text className="text-xl font-pregular">Brug fodmand ved ikke-fastgjorte stiger
            på 5 meter.</Text>
          </View>
          <View className="flex flex-row ml-16">
            <Text className="text-xl font-pregular">{'\u2218'} </Text>
            <Text className="text-xl font-pregular">Ved arbejde i &gt; 2 meters højde bør der
            bruges faldsikring.</Text>
          </View>
          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Vær iført fastsiddende fodtøj med en blød
            og skridsikker sål.</Text>
          </View>
          <View className="flex flex-row mx-5 mb-3">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Arbejdstid: Max ½ time i træk og højst 2½
            timer pr. dag.</Text>
          </View>
        </View>

        <View className="mx-5 mt-5">
          <Text className="text-2xl font-psemibold">Huskeregler</Text>
          <View className="bg-gray-300 min-h-[200px] justify-center items-center">
            <Text className="text-xl font-pmedium">Video Placeholder</Text>
          </View>
        </View>

        <View className="border-2 mx-5 rounded-xl mt-5">
          <TouchableOpacity onPress={toggleExpand}>
            <View className="mx-1 flex flex-row">
              <Text className="text-xl font-psemibold mr-20">Stige Placering</Text>
              <Image 
                className="ml-10"
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <View className="flex-row mx-1">
              <Text className="text-xl font-pregular w-[250px]">Stiger opstilles på fast
                underlag og i en hældning på ca. 75 grader.
              </Text>
              <SpeakableText 
              styles={"ml-5 mb-16"}
              children={"Stige Placering. Stiger opstilles på fast underlag og i en hældning på cirka 75 grader."}
              />    
            </View>
          </Collapsible>
        </View>

        <View className="mx-5 justify-center items-center">
          <Image 
            source={require('../../../../assets/images/ladders_illu_3.png')}
            style={{ resizeMode: 'contain', width: 300, height: 250}}
          />
          <Image 
            source={require('../../../../assets/images/ladders_illu_2_dk.png')}
            style={{ resizeMode: 'contain', width: 300, height: 250}}
          />
          {/* <Text className="text-xs font-pregular mx-5">Kilde: <Link 
            href="https://workplacedenmark.dk/da/health-and-safety/building-and-construction/working-on-ladders" 
            className="text-blue-500 underline">Link</Link>
          </Text>  */}
        </View>

        <View className="justify-center items-center mt-5 border-red-600 border-4 mx-20 mb-5">
          <Text className="text-2xl font-psemibold">Er du i tvivl?</Text>
          <Text className="text-2xl font-psemibold">Så spørg din</Text>
          <Text className="text-2xl font-psemibold">ARBEJDSLEDER</Text>
        </View>

        <View className="bg-white min-h-[200px] justify-start items-center">
          <CustomButton 
            title="Test Dig selv"
            imgSource={require('../../../../assets/images/book.png')}
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "stiger"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-5"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Stiger