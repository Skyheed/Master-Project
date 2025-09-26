import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../../../components/CustomButton'
import { router, Link } from 'expo-router'
import Header from '../../../../components/Header'
import Favourite from '../../../../components/Favourite'
import SpeakableText from '../../../../components/SpeakableText';
import * as Speech from 'expo-speech';

const Svejsning = () => {
  const quizindex = "svejsning";
  
  const info = {
    title: "Svejsning",
    path: "/svejsning"
  }

  const key = "15";

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
          <Text className="text-3xl font-pbold my-5">Svejsning</Text>
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
              children={"Hvad er vigtigt. Du kan blive alvorligt syg af de farlige stoffer, som røgen indeholder og der er skadelige" +
              "virkninger selv i små doser, og mange af stofferne er kræftfremkaldende. " +
              "Derfor må svejsning kun udføres af personer, der har gennemgået en særlig uddannelse."
              }
            />
          </View>
          <Text className="text-xl font-pregular">
          Du kan blive alvorligt syg af de farlige stoffer, som røgen indeholder og der er skadelige
          virkninger selv i små doser, og mange af stofferne er kræftfremkaldende.
          Derfor må svejsning kun udføres af personer, der har gennemgået en særlig uddannelse. 
          </Text>
        </View>

        <View className="justify-center items-center mt-5">
          <Image 
            source={require('../../../../assets/images/welder.png')}
            style={{ resizeMode: 'stretch', width: 200, height: 200}}
          />
          {/* <Link href="https://www.flaticon.com/free-icons/welder" 
          className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
        </View>

        <View className="mt-5 mx-5">
          <View className="flex-row">
            <Text className="font-psemibold text-2xl w-[270px]">Info</Text>
            <SpeakableText 
              styles={"ml-5"}
              children={"Info. Det er vigtigt, at arbejdet er tilrettelagt ordentligt, så sikkerheden er i top, før du går i gang med at svejse eller slibe. " +
                "Først og fremmest skal svejsepladsen være velventileret. Dette kan ske enten ved punktudsugning med flytbare sugehoveder og " +
                "rumventilation, der fører den forurenede luft ud i det fri. Ventilationsanlægget skal være forsynet " +
                "med kontrolanordning, der giver alarm, hvis anlægget ikke fungerer optimalt. " +
                "Organisér arbejdet sådan, at der ikke samtidig er andre forurenende arbejdsprocesser i gang. " +
                "Brug altid de korrekte værnemidler, så du undgår. indånding af giftig røg. " +
                "forbrænding ved gnister og UV-stråler. øjenskader ved gnister og UV-stråler. forbrænding fra berøring af varme emner."
              }
            />
          </View>
          <Text className="font-pregular text-xl mb-3">Det er vigtigt, at arbejdet er tilrettelagt
          ordentligt, så sikkerheden er i top, før du går i gang med at svejse eller slibe.
          </Text>
          <Text className="font-pregular text-xl"><Text className="font-pbold">Først og fremmest</Text> skal svejsepladsen være
          velventileret. Dette kan ske enten ved punktudsugning med flytbare sugehoveder og
          rumventilation, der fører den forurenede luft ud i det fri. 
          </Text>
          <Text className="font-pregular text-xl mb-3">Ventilationsanlægget <Text className="font-pbold">skal</Text> være forsynet
          med kontrolanordning, der giver alarm, hvis anlægget ikke fungerer optimalt.
          </Text>
          <Text className="font-pregular text-xl mb-3"><Text className="font-pbold">Organisér</Text> arbejdet sådan, at der ikke samtidig
          er andre forurenende arbejdsprocesser i gang.
          </Text>
          <Text className="font-pregular text-xl">Brug altid de <Text className="font-pbold">korrekte værnemidler</Text>, så du undgår:</Text>
          <View className="flex-row">
            <Text className="font-pregular text-xl">{'\u2022'} </Text>
            <Text className="font-pregular text-xl">indånding af giftig røg</Text>
          </View>
          <View className="flex-row">
            <Text className="font-pregular text-xl">{'\u2022'} </Text>
            <Text className="font-pregular text-xl">forbrænding ved gnister og UV-stråler</Text>
          </View>
          <View className="flex-row">
            <Text className="font-pregular text-xl">{'\u2022'} </Text>
            <Text className="font-pregular text-xl">øjenskader ved gnister og UV-stråler</Text>
          </View>
          <View className="flex-row">
            <Text className="font-pregular text-xl">{'\u2022'} </Text>
            <Text className="font-pregular text-xl">forbrænding fra berøring af varme emner</Text>
          </View>
        </View>

        <View className="mx-5 mt-5 justify-center items-center">
          <Image 
            source={require('../../../../assets/images/Svejsning-sikkerhed.png')}
            style={{ resizeMode: 'contain', width: 320, height: 440}}
          />
          {/* <Text className="text-xs font-pregular mx-5">Kilde: <Link 
            href="https://stock.adobe.com/dk/images/work-safety-isometric-construction-worker-wearing-hard-hat-gloves-earmuffs-protective-glasses-clothing-and-boots-vector-infographic-poster-about-safety-equipment-ppe/413906327" 
            className="text-blue-500 underline">Link</Link>
          </Text>  */}
        </View>

        <View className="mx-5 mt-5">
          <View className="flex-row">
            <Text className="text-2xl font-psemibold w-[270px]">Huskeregler</Text>
            <SpeakableText 
              styles={"ml-5"}
              children={"Huskeregler. Alle der svejser har paragraf 17-uddannelse, der" +
              "omhandler arbejdsmiljø og sikkerhed ved svejsning. Vi har udarbejdet funktions-apver" +
              "(risikovurderinger) for arbejdsområderne."
              }
            />
          </View>
          <Text className="text-xl font-pregular mb-3">Alle der svejser har <Text className="font-pbold">§17-uddannelse</Text>, der
          omhandler arbejdsmiljø og sikkerhed ved svejsning. Vi har udarbejdet funktions-apv’er
          (risikovurderinger) for arbejdsområderne.
          </Text>
          <View className="bg-gray-300 min-h-[200px] justify-center items-center">
            <Text className="text-xl font-pmedium">Video Placeholder</Text>
          </View>
        </View>

        <View className="my-5 mx-5">
          <View className="flex flex-row ">
            <Text className="text-2xl font-psemibold w-[290]">Huskeregler</Text>
            <SpeakableText
            children={"Huskeregler. Brug altid den rette arbejdsbeklædning. Brug altid handsker og svejseskærm, undgå korte ærmer. " +
              "Brug altid punktudsugning i værksted. Brug altid svejseskærm. Brug tang eller lignende til at tage varme emner. " +
              "Brug altid sikkerhedsbriller ved slibning. Undgå passiv svejsning (”svejseøjne” og svejserøg ved andre i lokalet)." +
              "Brug om nødvendigt åndedrætsværn, når grænseværdier ikke kan overholdes."
            }
            />
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Brug altid den rette arbejdsbeklædning.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Brug altid handsker og svejseskærm, undgå korte ærmer.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Brug altid punktudsugning i værksted.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Brug altid svejseskærm.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Brug tang eller lignende til at tage varme emner.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Brug altid sikkerhedsbriller ved slibning.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Undgå passiv svejsning (”svejseøjne” og svejserøg ved andre i lokalet).</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Brug om nødvendigt åndedrætsværn, når grænseværdier ikke kan overholdes.</Text>
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
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "svejsning"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-5"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Svejsning