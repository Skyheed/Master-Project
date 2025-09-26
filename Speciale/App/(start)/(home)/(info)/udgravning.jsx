import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../../../components/CustomButton'
import { router, Link } from 'expo-router'
import Header from '../../../../components/Header'
import Favourite from '../../../../components/Favourite'
import SpeakableText from '../../../../components/SpeakableText';
import * as Speech from 'expo-speech';

const Udgravning = () => {
  const quizindex = "udgravning";

  const info = {
    title: "Udgravning",
    path: "/udgravning"
  }

  const key = "17";

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
          <Text className="text-3xl font-pbold my-5">Udgravning</Text>
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
              children={"Hvad er Vigtigt. Det kan gå rigtig galt, hvis udgravninger ikke udføres korrekt. Der er både fare for at blive" +
              "klemt ved sammenfald af jord og for nedstyrtning af personer eller materiel."}
            />
          </View>
          <Text className="text-xl font-pregular">
          Det kan gå rigtig galt, hvis udgravninger ikke udføres korrekt. Der er både fare for at blive
          klemt ved sammenfald af jord og for nedstyrtning af personer eller materiel.
          </Text>
        </View>

        <View className="flex-row mx-5">
          <View className="justify-center items-center mt-5 mx-5">
            <Image 
              source={require('../../../../assets/images/digging.png')}
              style={{ resizeMode: 'stretch', width: 100, height: 100}}
            />
            {/* <Link href="https://www.flaticon.com/free-icons/digging" 
            className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
          </View>
          <View className="justify-center items-center mt-5 ml-10">
            <Image 
              source={require('../../../../assets/images/mini-excavator.png')}
              style={{ resizeMode: 'stretch', width: 100, height: 100}}
            />
            {/* <Link href="https://www.flaticon.com/free-icons/mini-excavator" 
            className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
          </View>
        </View>
        
        <View className="mx-5 mt-5">
          <View className="flex-row">
            <Text className="text-2xl font-psemibold w-[270px]">Info</Text>
            <SpeakableText 
              styles={"ml-5"}
              children={"Info. En udgravning skal planlægges, og der skal altid træffes foranstaltninger mod farlige" +
              "jordskred. Der skal søges ledningsoplysninger (rør og strømførende kabler) ved LER samt" +
              "placering af naturgasledninger. Er du i tvivl, så kontakt ledningsejer/forsyningsselskab." +
              "Udgravningen udføres således, at der tages hensyn til forholdene i jorden, så der ikke sker" +
              "jordsammenfald. Følg reglerne i gældende AT-vejledning om ”Gravearbejde”"
              }
            />
          </View>
          <Text className="text-xl font-pregular mb-3">
          En udgravning <Text className="font-pbold">skal planlægges</Text>, og der skal altid træffes foranstaltninger mod farlige
          jordskred. Der skal søges ledningsoplysninger (rør og strømførende kabler) ved <Text className="font-pbold">LER</Text> samt
          placering af naturgasledninger. <Text className="font-pbold">Er du i tvivl</Text>, så kontakt ledningsejer/forsyningsselskab.
          </Text>
          <Text className="text-xl font-pregular mb-3">
          Udgravningen udføres således, at der tages hensyn til forholdene i jorden, så der ikke sker
          jordsammenfald. Følg reglerne i gældende <Text className="font-pbold">AT-vejledning</Text> om ”Gravearbejde”
          </Text>
        </View>

        <View className="mx-5 justify-center items-center">
          <Image 
            source={require('../../../../assets/images/udgravning_afstand.png')}
            style={{ resizeMode: 'contain', width: 300, height: 200}}
          />
        </View>

        <Text className="text-xl mx-5 mb-5 font-pregular">
          Se også <Link href="/markering" className="text-blue-500 underline">afmærkning</Link> omkring udgravninger
        </Text>

         <View className="">
         <View className="flex flex-row ">
          <Text className="text-2xl font-psemibold mx-5 w-[260]">Huskeregler</Text>
          <SpeakableText
          children={"Huskeregler. "+
            "Sørg for at have det nødvendige udstyr. "+
            "Udgravninger som er mindre end 1,7 meter dybe kan udføres med lodrette sider, hvis jordforholdene er stabile, og der ikke arbejdes i bunden af udgravningen. "+
            "Ved planlagt rendegravarbejde sikrer vi udgravningen med spunsvæg eller brug af gravekasse. "+
            "Hvis det ikke er muligt at sætte spuns/gravekasse, anvendes fx planker/plader, der spændes ud mod siderne ved hjælp af tværstivere/klemmer. "+
            "Bund af udgravning i planlagte projekter skal sikres med nøddesten."
          }
          />
        </View>
        <View className="flex flex-row mx-5">
          <Text className="text-xl font-pregular">{'\u2022'} </Text>
          <Text className="text-xl font-pregular">Sørg for at have det nødvendige udstyr.</Text>
        </View>
        <View className="flex flex-row mx-5">
          <Text className="text-xl font-pregular">{'\u2022'} </Text>
          <Text className="text-xl font-pregular">Udgravninger som er mindre end 1,7 meter
            dybe kan udføres med lodrette sider, hvis jordforholdene er stabile, 
            og der ikke arbejdes i bunden af udgravningen.</Text>
        </View>
        <View className="flex flex-row mx-5">
          <Text className="text-xl font-pregular">{'\u2022'} </Text>
          <Text className="text-xl font-pregular">Ved planlagt rendegravarbejde sikrer vi
          udgravningen med spunsvæg eller brug af gravekasse.</Text>
        </View>
        <View className="flex flex-row mx-5">
          <Text className="text-xl font-pregular">{'\u2022'} </Text>
          <Text className="text-xl font-pregular">Hvis det ikke er muligt at sætte spuns/gravekasse, anvendes fx planker/plader, der spændes ud mod siderne ved hjælp af
            tværstivere/klemmer.</Text>
        </View>
        <View className="flex flex-row mx-5 mb-2">
          <Text className="text-xl font-pregular">{'\u2022'} </Text>
          <Text className="text-xl font-pregular">Bund af udgravning i planlagte projekter
          skal sikres med nøddesten.</Text>
        </View>

        <View className="bg-gray-300 min-h-[200px] justify-center items-center">
          <Text className="text-xl font-pmedium">Video Placeholder</Text>
        </View>
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
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "udgravning"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-5"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Udgravning