import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../../components/CustomButton'
import { Link, router } from 'expo-router'
import Header from '../../../../components/Header'
import Collapsible from 'react-native-collapsible'
import Favourite from '../../../../components/Favourite'
import SpeakableText from '../../../../components/SpeakableText'
import * as Speech from 'expo-speech';

const Kemikalier = () => {
  const quizindex = "kemikalier";

  const [collapsed, setCollapsed] = useState(true);
  const [collapsed1, setCollapsed1] = useState(true);
    
  const toggleExpand = () => {
    setCollapsed(!collapsed);
  }

  const toggleExpand1 = () => {
    setCollapsed1(!collapsed1);
  }

  var spinDeg = '0deg'
  var spinDeg1 = '0deg'

  if(!collapsed){
    spinDeg = '0deg'
  } else{
    spinDeg = '180deg'
  }

  if(!collapsed1){
    spinDeg1 = '0deg'
  } else{
    spinDeg1 = '180deg'
  }

  const info = {
    title: "Kemikalier",
    path: "/kemikalier"
  }

  const key = "5";

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
        <View className="flex-row bg-primary items-center justify-center">
          <Text className="text-3xl font-pbold mt-5 mb-5">Brug af Kemikalier</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>
        
        <View>
          <View className="flex flex-row mr-5">
          <Text className="text-2xl font-psemibold mt-5 mx-5 w-[260]">Hvad er Vigtigt?</Text>
          <SpeakableText
          children={"Hvad er Vigtigt. Vi skal undgå, at du bliver syg af at arbejde med kemikalier. "+
            "Kemikalier er fx rengøringsmidler, fældningsmidler, olieprodukter eller syrer og baser."}
          />
          </View>
          <Text className="text-xl font-pregular mx-5">Vi skal undgå, at du bliver syg af at arbejde
          med kemikalier. Kemikalier er fx rengøringsmidler, fældningsmidler, olieprodukter eller
          syrer og baser.</Text>
        </View>

        <View className="justify-center items-center mt-1">
          <Image 
            source={require('../../../../assets/images/Faresymboler_kemikalier.png')}
            style={{ resizeMode: 'contain', width: 300, height: 300}}
          />
        </View>

        <View className="mx-5 mt-1 mb-5">
          <View className="flex flex-row mr-5">
          <Text className="text-2xl font-psemibold w-[280]">Info</Text>
          <SpeakableText
          children={"Info. Kemikalier kan påvirke dig ved indånding, " +
            "hudkontakt, øjenkontakt og indtagelse. Brug den mest sikre arbejdsmetode og beskyt dig"+
            "selv ved brug af værnemidler og det rette arbejdstøj. " +
            "ethvert faremærket kemikalie, som VandCenter Syd benytter skal. "+
            "oprettes i Chemical Manager," +
            "have en kemisk risikovurdering," +
            "have en arbejdsplads- brugsanvisning (APB) med en tilhørende QR-kode."}
          />
          </View>
          <Text className="text-xl font-pregular">Kemikalier kan påvirke dig ved indånding,
          hudkontakt, øjenkontakt og indtagelse. Brug den mest sikre arbejdsmetode og beskyt dig
          selv ved brug af værnemidler og det rette arbejdstøj.</Text>
        </View>

        {/* Grafikker */}
        <View className="flex flex-row mx-5 mb-5">
          <View className="justify-center items-center">
            <Image
              source={require('../../../../assets/images/equipment.png')}
              style={{ resizeMode: 'stretch', width: 100, height: 100}}
            />
            {/* <Link href="https://www.flaticon.com/free-icons/equipment" 
              className="text-xs font-pregular text-blue-400 underline">by Dewi Sari</Link> */}
          </View>
          <View className="justify-center items-center mx-3">
            <Image
              source={require('../../../../assets/images/gas-mask.png')}
              style={{ resizeMode: 'stretch', width: 100, height: 100}}
            />
            {/* <Link href="https://www.flaticon.com/free-icons/gas-mask" 
              className="text-xs font-pregular text-blue-400 underline">by Freepik</Link> */}
          </View>
          <View className="justify-center items-center">
            <Image
              source={require('../../../../assets/images/chemicals.png')}
              style={{ resizeMode: 'stretch', width: 100, height: 100}}
            />
            {/* <Link href="https://www.flaticon.com/free-icons/chemicals" 
              className="text-xs font-pregular text-blue-400 underline">by Smartline</Link> */}
          </View>
        </View>

        <View className="mx-5 mb-5">
          <Text className="text-xl font-pregular">Ethvert faremærket kemikalie, som VandCenter Syd benytter skal:</Text>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">oprettes i Chemical Manager</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">have en kemisk risikovurdering</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">have en arbejdsplads- brugsanvisning (APB)
            med en tilhørende QR-kode</Text>
          </View>
        </View>

        {/* Chemical Manager */}
        <View className="border-2 rounded-xl mx-5 mb-5">
          <TouchableOpacity onPress={toggleExpand1}>
            <View className="mx-1 flex flex-row">
            <Text className="text-xl font-psemibold mr-16">Chemical Manager</Text>
              <Image 
                className="ml-3"
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg1}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed1}>
            <View className="flex flex-row">
            <View className="flex flex-row ">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular mx-1 w-[240]">På din mobiltelefon</Text> 
              <SpeakableText
              children={"Chemical Manager. På din mobiltelefon skal du installere appen, " +
                "chemical manager fra firmaportalen, så du kan se SDS, "+
                "og de kemiske risikovurderinger. " +
                "Du skal aftale med nærmeste leder, hvis du indkøber "+
                "nye faremærkede kemikalier, da disse skal oprettes i chemical manager."}
              />
              </View>
              </View>
                <Text className="text-xl font-pregular mx-4 mt-[-10]">skal du installere app’en
                Chemical Manager fra firmaportalen, så du kan se SDS og de kemiske risikovurderinger.</Text>

            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular mx-1">Du skal aftale med nærmeste leder, hvis du
              indkøber nye faremærkede kemikalier, da disse skal oprettes i Chemical Manager.</Text> 
            </View>
          </Collapsible>
        </View>

        <View className="mx-5 mb-5">
          <View className="flex flex-row mr-5">
          <Text className="text-xl font-psemibold w-[280]">NB!</Text>
          <SpeakableText
          children={"NB. Undtagelsesvist kan du benytte kemikalier, i"+
            "forbindelse med projekter af midlertidig karakter med SDS på papirform, "+
            "og i umiddelbar nærhed samt en mundtlig gennemgang af risici"+
            "foretaget af daglig leder eller arbejdsmiljørepræsentanten."}
          />
          </View>
          <Text className="text-xl font-pregular">Undtagelsesvist kan du benytte kemikalier i
          forbindelse med projekter af midlertidig karakter med SDS på papirform (og i umiddelbar nærhed) 
          samt en mundtlig gennemgang af risici foretaget af daglig leder eller arbejdsmiljørepræsentanten.</Text>
        </View>

        <View className="mb-5">
          <View className="flex flex-row ">
            <Text className="text-2xl font-psemibold mx-5 w-[260]">Huskeregler</Text>
            <SpeakableText
            children={"Huskeregler. Du skal instrueres i brugen af kemikalier inden du arbejder med disse. Arbejd efter sikkerheden beskrevet i SDS, " +
              "og risikovurderingen. Brug de rette værnemidler. "+
              "kemikaliespild opsamles og bortskaffes i henhold til APB."}
            />
          </View>
          <Text className="text-xl font-pregular mx-5">Du skal instrueres i brugen af kemikalier inden du arbejder med disse.</Text>
          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Arbejd efter sikkerheden beskrevet i SDS
            og risikovurderingen.</Text>
          </View>
          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Brug de rette værnemidler.</Text>
          </View>
          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Kemikaliespild opsamles og bortskaffes i
          henhold til APB.</Text>
          </View>
        </View>
        
        {/* Substitution */}
        <View className="border-2 rounded-xl mx-5 border-blue-600">
          <TouchableOpacity onPress={toggleExpand}>
            <View className="mx-1 flex flex-row">
            <Text className="text-xl font-psemibold mr-32">Substitution</Text>
              <Image 
                className="ml-5"
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <View className="flex flex-row">
              
                <View className="flex flex-row ">
              <Text className="text-xl font-pregular mx-1 w-[270]">Vi arbejder på at erstatte</Text> 
              <SpeakableText
              children={"Substitution. Vi arbejder på at erstatte farlige kemikalier"+
                "med mindre farlige kemikalier. Fortæl hvis du har gode idéer."}
              />
              </View>
             
            </View>
            <Text className="text-xl font-pregular mx-1 w-[260] mt-[-10]">farlige kemikalier med mindre farlige kemikalier. Fortæl hvis du har gode idéer.</Text>
          </Collapsible>
        </View>

        <View className="justify-center items-center mt-5 border-red-600 border-4 mx-20 mb-10">
          <Text className="text-2xl font-psemibold">Er du i tvivl?</Text>
          <Text className="text-2xl font-psemibold">Så spørg din</Text>
          <Text className="text-2xl font-psemibold">ARBEJDSLEDER</Text>
        </View>

        <View className="justify-start items-center mb-10">
          <CustomButton 
            title="Test Dig selv"
            imgSource={require('../../../../assets/images/book.png')}
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "kemikalier"),Speech.stop())}
            containerStyles={"min-w-[200px]"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Kemikalier