import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../../components/CustomButton'
import { Link, router } from 'expo-router'
import Header from '../../../../components/Header'
import Collapsible from 'react-native-collapsible'
import Favourite from '../../../../components/Favourite'
import SpeakableText from '../../../../components/SpeakableText'
import * as Speech from 'expo-speech';

const Bygherre = () => {
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

  const quizindex = "bygherre";

  const info = {
    title: "Bygherre og rådgiver",
    path: "/bygherre"
  }

  const key = "2";

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
          <Text className="text-3xl font-pbold mt-5 mb-5">Bygherre, Projekterende og Rådgivers pligter</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>
      <View className="mx-5 mb-5 mt-5">
        <View className="flex-row">
          <Text className="text-2xl font-psemibold w-[285]">Hvad er Vigtigt?</Text>
          <SpeakableText
        children={"Hvad er Vigtigt. At du ikke kommer til skade eller bliver nedslidt, når du arbejder på en byggeplads."}
        />
        </View>
        <Text className="text-xl font-pregular">
        At du ikke kommer til skade eller bliver nedslidt, når du arbejder på en byggeplads.</Text>
      </View>
         
        <View className="mx-5 mb-5">
          <View className="flex flex-row">
          <Text className="text-2xl font-psemibold w-[285]">Dit Ansvar</Text>
          <SpeakableText
          children={"Dit Ansvar. Du har som bygherre det overordnede ansvar for at koordinere arbejdsmiljøet i fællesområder på pladsen. Ansvaret kan ikke overdrages til andre. Du skal informere, koordinere, og sørge for højt sikkerhedsniveau."}
          />
          </View>
          
          <View className="flex flex-row">
            <Text className="text-xl font-pregular w-[180px]">
            Du har som bygherre det overordnede ansvar for at</Text>
            <View className="justify-center items-center">
              <Image 
                source={require('../../../../assets/images/analysis.png')}
                style={{ resizeMode: 'stretch', width: 100, height: 100}}
              />
              {/* <Link href="https://www.flaticon.com/free-icons/worker" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
            </View>
          </View>
          <Text className="text-xl font-pregular">koordinere arbejdsmiljøet i fællesområder på pladsen. 
          <Text className="font-pbold"> Ansvaret kan ikke overdrages
          til andre! </Text>Du skal informere, koordinere og sørge for højt sikkerhedsniveau.</Text>
        </View>

        <View className="mx-5 justify-center items-center">
          <Image 
            source={require('../../../../assets/images/Bygherre.png')}
            style={{ resizeMode: 'contain', width: 310, height: 180}}
          />
          {/* <Text className="text-xs font-pregular mx-5">Kilde: <Link 
            href="https://dokument24.dk/ordbog/bygherre" 
            className="text-blue-500 underline">Link</Link>
          </Text>  */}
        </View>

        <View className="mx-5 my-5">
          <View className="flex flex-row">
          <Text className="text-2xl font-psemibold w-[285]">Dine Opgaver</Text>
          <SpeakableText
          children={"Dine Opgaver. Udpeg en arbejds- miljøkoordinator for byggefase (AMK-B). "+
          " Hvis der på byggepladsen, er mere end 1 arbejdsgiver samtidigt så. " +
          "Udpeg også en arbejdsmiljø koordinator for projekteringsfasen (AMK-P). "+
          " AMK-P skal skrive en Plan for sikkerhed og sundhed (PSS), hvis nødvendigt. "+
          "PSS er Nødvendig hvis. Der er mere end 10 medarbejdere, samtidig på pladsen fra mere end 1 virksomhed. " +
          " Der er op til 10 medarbejdere, og hvis der forekommer særligt farligt arbejde. " +
          "AMK-P skal udforme en journal med relevante sikkerheds og sundhedsmæssige hensyn. "}/>
          </View>
          {/* AMK-B */}
          <View className="flex flex-row mb-1">
            <View className="w-[200px] justify-center items-center">
              <Text className="text-xl font-pregular"><Text className="font-pbold">Udpeg</Text> en arbejds- miljøkoordinator for
              byggefase (AMK-B). Hvis der på byggepladsen</Text>
            </View>
            <View className="justify-center items-center">
              <Image 
                source={require('../../../../assets/images/worker.png')}
                style={{ resizeMode: 'stretch', width: 100, height: 100}}
              />
              {/* <Link href="https://www.flaticon.com/free-icons/engineer" 
                className="text-xs font-pregular text-blue-400 underline">by Freepik</Link> */}
            </View>
          </View>
          <Text className="text-xl font-pregular">er mere end 1 arbejdsgiver samtidigt så:</Text>
          {/* AMK-P */}
          <View className="flex flex-row my-1">
            <View className="w-[200px]">
              <Text className="text-xl font-pregular"><Text className="font-pbold">Udpeg</Text> også en arbejdsmiljø- koordinator for projekteringsfasen
              (AMK-P)</Text>
            </View>
            <View className="justify-center items-center">
              <Image 
                source={require('../../../../assets/images/coordinator.png')}
                style={{ resizeMode: 'stretch', width: 100, height: 100}}
              />
              {/* <Link href="https://www.flaticon.com/free-icons/manager" 
                className="text-xs font-pregular text-blue-400 underline">by Freepik</Link> */}
            </View>
          </View>
          {/* PSS */}
          <View className="flex flex-row">
            <View className="w-[200px] mr-2">
              <Text className="text-xl font-pregular"><Text className="font-pbold">AMK-P</Text> skal skrive en ”Plan for sikkerhed og
              sundhed” (PSS), hvis nødvendigt</Text>
            </View>
            <View className="justify-center items-center">
              <Image 
                source={require('../../../../assets/images/task.png')}
                style={{ resizeMode: 'stretch', width: 100, height: 100}}
              />
              {/* <Link href="https://www.flaticon.com/free-icons/task" 
                className="text-xs font-pregular text-blue-400 underline">by Freepik</Link> */}
            </View>
          </View>
          <View className="border-2 rounded-xl">
            <TouchableOpacity onPress={toggleExpand}>
              <View className="mx-1 flex flex-row">
                <Text className="text-xl font-psemibold mr-10">PSS er nødvendig hvis:</Text>
                <Image 
                  className="ml-3"
                  source={require('../../../../assets/images/Drop_down_arrow.png')}
                  style={{ transform: [{rotate: spinDeg}], resizeMode: 'stretch', width: 30, height: 30}}
                />
              </View>
            </TouchableOpacity>
            <Collapsible collapsed={collapsed}>
              <View>
                <View className="flex flex-row">
                  <Text className="text-xl font-pregular">{'\u2022'} </Text>
                  <Text className="text-xl font-pregular mx-1">Der er mere end 10 medarbejdere samtidig på pladsen 
                    fra mere end 1 virksomhed</Text>    
                </View>
                <View className="flex flex-row">
                  <Text className="text-xl font-pregular">{'\u2022'} </Text>
                  <Text className="text-xl font-pregular mx-1">Der er op til 10 medarbejdere, og hvis der
                  forekommer særligt farligt arbejde</Text> 
                </View>
              </View>
            </Collapsible>
          </View>
          {/* <View className="flex flex-row mb-1"> */}
          <Text className="text-xl font-pregular mt-3">AMK-P skal udforme en journal med relevante sikkerheds- og sundhedsmæssige
          hensyn.</Text>
        </View>

        {/* PSS Info */}
        <View className="mx-5 mb-5">
          <View className="flex flex-row">
          <Text className="text-2xl font-psemibold w-[285]">Formålet med en PSS</Text>
          <SpeakableText
        children={"Formålet med en PSS. sikre, at alle på pladsen har et godt arbejdsmiljø. "  +
          "indeholde punkterne nævnt i, Bekendtgørelse om bygherrens pligter. " +
          "være udarbejdet inden byggepladsen tages i brug og skal holdes ajour. " +
          "være tilgængelig på byggepladsen. " + "er du projektleder. Så skal du sammen med AMK-B, udføre miljø og arbejdsmiljørundering på vores bygge- og anlægsprojekter. "}
        />
        </View>
          <View className="flex flex-row mr-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">sikre, at alle på pladsen har et godt
            arbejdsmiljø,</Text>
          </View>
          <View className="flex flex-row mr-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">indeholde punkterne nævnt i ”Bekendtgørelse om bygherrens pligter”</Text>
          </View>
          <View className="flex flex-row mr-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">være udarbejdet inden byggepladsen
            tages i brug og skal holdes ajour</Text>
          </View>
          <View className="flex flex-row mr-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">være tilgængelig på byggepladsen!</Text>
          </View>
        </View>

        {/* Er du projektleder? */}
        <View className="border-2 border-blue-600 rounded-xl mx-5 mb-5">
          <TouchableOpacity onPress={toggleExpand1} className="mt-1">
            <View className="mx-1 flex flex-row">
              <Text className="text-xl font-psemibold mr-20">Er du projektleder?</Text>
              <Image 
                className="ml-3"
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg1}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed1}>
            <Text className="text-xl font-pregular mx-1">Så skal du sammen med AMK-B, udføre miljø- og
            arbejdsmiljørundering på vores bygge- og anlægsprojekter</Text>
          </Collapsible>
        </View>
        
        {/* Pligter og ansvar */}
        <View className="mx-5 mb-5">
          <View className="flex flex-row">
          <Text className="text-2xl font-psemibold w-[285px]">Dine Pligter og Ansvar for arbejdsmiljø</Text>
          <SpeakableText
          children={"Dine Pligter og Ansvar for arbejdsmiljø. At arbejdsmiljøreglerne overholdes både, når projektet gennemføres, og når anlægges sættes i drift skråstreg vedligehold. " +
            "At samarbejde med bygherrens arbejdsmiljøkoordinator, (AMK-P) og give input til PSS og journal." +
            "At entreprenørens arbejde kan foregå sikkerheds, og sundhedsmæssigt forsvarligt. " +
            "At der er egnet tekniske hjælpemidler til håndtering af tunge byrder. " +
            "At beskrive særlige risici af betydning for medarbejdernes sikkerhed og sundhed. " +
            "At farlige stoffer om muligt substitueres. "}/>
        </View>
          <View className="flex flex-row mr-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">At arbejdsmiljøreglerne overholdes både,
            når projektet gennemføres, og når anlægges sættes i drift/vedligehold.</Text>
          </View>
          <View className="flex flex-row mr-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">At samarbejde med bygherrens arbejdsmiljøkoordinator (AMK-P) 
            og give input til PSS og journal.</Text>
          </View>
          <View className="flex flex-row mr-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">At entreprenørens arbejde kan foregå sikkerheds- og 
            sundhedsmæssigt forsvarligt.</Text>
          </View>
          <View className="flex flex-row mr-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">At der er egnet tekniske hjælpemidler til
            håndtering af tunge byrder.</Text>
          </View>
          <View className="flex flex-row mr-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">At beskrive særlige risici af betydning for
            medarbejdernes sikkerhed og sundhed.</Text>
          </View>
          <View className="flex flex-row mr-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">At farlige stoffer om muligt substitueres.</Text>
          </View>
        </View>

        <View className="justify-center items-center mt-5 border-red-600 border-4 mx-20">
          <Text className="text-2xl font-psemibold">Er du i tvivl?</Text>
          <Text className="text-2xl font-psemibold">Så spørg din</Text>
          <Text className="text-2xl font-psemibold">ARBEJDSLEDER</Text>
        </View>
        <View className="mb-10 justify-start items-center">
          <CustomButton 
            title="Test Dig selv"
            imgSource={require('../../../../assets/images/book.png')}
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "bygherre"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-10"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Bygherre