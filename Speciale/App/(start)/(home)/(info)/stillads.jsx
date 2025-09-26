import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../../../components/CustomButton'
import { router, Link } from 'expo-router'
import Header from '../../../../components/Header'
import Favourite from '../../../../components/Favourite'
import SpeakableText from '../../../../components/SpeakableText';
import * as Speech from 'expo-speech';

const Stillads = () => {
  const quizindex = "stillads";
  
  const info = {
    title: "Stillads, rækværk og personlift",
    path: "/stillads"
  }

  const key = "14";

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
          <Text className="text-3xl font-pbold my-5 w-[260px]">Stillads, rækværk og personlift</Text>
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
              children={"Hvad er vigtigt. At vi er opmærksomme på fare for nedstyrtning når vi arbejder i højden, " +
                "for eksempel brønde, rentvandstanke, pumpestationer, tanke på renseanlæg, og flade tage etcetera. " +
                "Personer der befinder sig under dig, skal sikres mod faldende genstande."
              }
            />
          </View>
          <Text className="text-xl font-pregular">
          At vi er opmærksomme på fare for nedstyrtning når vi arbejder i højden, fx brønde, rentvandstanke, pumpestationer, tanke på
          renseanlæg og flade tage etc.
          </Text>
          <Text className="text-xl font-pregular mt-3">Personer der befinder sig under dig, skal
          sikres mod faldende genstande.
          </Text>
        </View>

        <View className="mt-5 mx-5 flex-row">
          <View className="justify-center items-center">
            <Image 
              source={require('../../../../assets/images/scaffolding.png')}
              style={{ resizeMode: 'stretch', width: 100, height: 100}}
            />
            {/* <Link href="https://www.flaticon.com/free-icons/scaffolding" 
            className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
          </View>
          <View className="justify-center items-center mx-4">
            <Image 
              source={require('../../../../assets/images/barricade.png')}
              style={{ resizeMode: 'stretch', width: 100, height: 100}}
            />
            {/* <Link href="https://www.flaticon.com/free-icons/barricade" 
            className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
          </View>
          <View className="justify-center items-center">
            <Image 
              source={require('../../../../assets/images/scissor-lift.png')}
              style={{ resizeMode: 'stretch', width: 100, height: 100}}
            />
            {/* <Link href="https://www.flaticon.com/free-icons/scissor-lift" 
            className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
          </View>
        </View>

        <View className="mx-5 mt-5">
          <View className="flex-row">
            <Text className="text-2xl font-psemibold w-[270px]">Info</Text>
            <SpeakableText 
              styles={"ml-5"}
              children={"Info. Nedstyrtningsfare kan minimeres ved brug af stillads, rækværk eller ved brug af" +
                " personlift inklusiv fodmand (person i umiddelbar nærhed, som kan tilkaldes). " +
                "Ved arbejde på den udvendige side af rækværk skal du benytte faldsikring. " +
                "Der er krav til rækværk på stilladser og reposer, som er højere end 2 meter. " +
                " Rækværket skal være 1 meter højt. Der skal være hånd, knæ, " +
                "og fodliste på rækværket for at forhindre nedstyrtning og undgå, at værktøj falder ud over kanten."
              }
            />
          </View>
          <Text className="text-xl font-pregular">Nedstyrtningsfare kan minimeres ved brug af
            stillads, rækværk eller ved brug af personlift inkl. fodmand (person i umiddelbar nærhed,
            som kan tilkaldes). Ved arbejde på den udvendige side af rækværk skal du benytte <Link href="/faldsikring" className="text-blue-500 underline">faldsikring</Link> 
          </Text>
          <View className="mx-5 mt-3 justify-center items-center">
            <Image 
              source={require('../../../../assets/images/Personlift.png')}
              style={{ resizeMode: 'contain', width: 320, height: 200}}
            />
            {/* <Text className="text-xs font-pregular mx-5">Kilde: <Link 
              href="https://at.dk/regler/at-vejledninger/anvendelse-lifte-2-3-1/#id-403368969" 
              className="text-blue-500 underline">Link</Link>
            </Text>  */}
          </View>
          <Text className="text-xl font-pregular mt-3">Der er <Text className="font-pbold">krav</Text> til 
          rækværk på stilladser og reposer, som er højere end <Text className="font-pbold">2 meter</Text>. 
            Rækværket skal være <Text className="font-pbold">1 meter</Text> højt. Der skal være hånd-, knæ- og fodliste på
            rækværket for at forhindre nedstyrtning og undgå, at værktøj falder ud over kanten.
          </Text>

          <View className="mx-5 mt-3 justify-center items-center">
            <Image 
              source={require('../../../../assets/images/Stillads-mast.png')}
              style={{ resizeMode: 'contain', width: 300, height: 300}}
            />
            <Image 
              source={require('../../../../assets/images/Stillads-tag.png')}
              style={{ resizeMode: 'contain', width: 300, height: 350}}
            />
            {/* <Text className="text-xs font-pregular mx-5">Kilde: <Link 
              href="https://bfa-ba.dk/arbejde-paa-stilladser/" 
              className="text-blue-500 underline">Link</Link>
            </Text>  */}
          </View>
        </View>

        <View className="mx-5 mt-5">
          <Text className="text-2xl font-psemibold">Huskeregler</Text>
          <View className="bg-gray-300 min-h-[200px] justify-center items-center">
            <Text className="text-xl font-pmedium">Video Placeholder</Text>
          </View>
        </View>

        <View className="mx-5">
          <View className="flex flex-row mr-5">
            <Text className="text-2xl font-psemibold w-[280] mt-5">Huskeregler</Text>
            <SpeakableText 
              children={"Husketregler. " +
            "du skal være instrueret skråstreg uddannet efter gældende regler, uanset om du skal stille et stillads op, arbejde på stillads eller benytte personlift. " +
            "Vær obs på, at der er skærpede regler, hvis du skal højtryksspule, mens du står på et stillads. " +
            "Inden brug skal du tjekke, om stilladset er i orden og godkendt, og at det står på sikkert underlag. " +
            "Stilladser, der er mere end 2 meter høje, skal være forsynet med et skilt: " +
            "Stilladsets lastklasse, dato for opstilling og eftersyn, dato for evt. sidste ændring i opstilling og eftersyn, påtegning fra sagkyndig, der har gennemført seneste eftersyn, eventuelt navn på den virksomhed, der har foretaget opstilling eller ændring. " +
            "Stilladser, der er mere end 3 meter høje, kræver lovpligtig stilladsuddannelse."}/>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Du skal være instrueret/uddannet efter gældende regler, uanset om du skal stille et stillads op, arbejde på stillads eller benytte personlift. Vær obs på, at der er skærpede regler, hvis du skal højtryksspule, mens du står på et stillads.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Inden brug skal du tjekke, om stilladset er i orden og godkendt, og at det står på sikkert underlag.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Stilladser, der er mere end 2 meter høje, skal være forsynet med et skilt:</Text>
          </View>
          <View className="flex flex-row ml-10">
            <Text className="text-xl font-pregular">{'\u2218'} </Text>
            <Text className="text-xl font-pregular">Stilladsets lastklasse</Text>
          </View>
          <View className="flex flex-row ml-10">
            <Text className="text-xl font-pregular">{'\u2218'} </Text>
            <Text className="text-xl font-pregular">Dato for opstilling og eftersyn.</Text>
          </View>
          <View className="flex flex-row ml-10">
            <Text className="text-xl font-pregular">{'\u2218'} </Text>
            <Text className="text-xl font-pregular">Dato for evt. sidste ændring i opstilling og eftersyn. </Text>
          </View>
          <View className="flex flex-row ml-10">
            <Text className="text-xl font-pregular">{'\u2218'} </Text>
            <Text className="text-xl font-pregular">Påtegning fra sagkyndig, der har gennemført seneste eftersyn.</Text>
          </View>
          <View className="flex flex-row ml-10">
            <Text className="text-xl font-pregular">{'\u2218'} </Text>
            <Text className="text-xl font-pregular">Eventuelt navn på den virksomhed, der har foretaget opstilling eller ændring.</Text>
          </View>
          <View className="flex flex-row ">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Stilladser, der er mere end 3 meter høje, kræver lovpligtig stilladsuddannelse.</Text>
          </View>                                   
        </View>

        <View className="justify-center items-center mt-5 border-red-600 border-4 mx-20 mb-5">
          <Text className="text-2xl font-psemibold">Er du i tvivl?</Text>
          <Text className="text-2xl font-psemibold">Så spørg din</Text>
          <Text className="text-2xl font-psemibold">ARBEJDSLEDER</Text>
        </View>

        <View className="mb-10 justify-start items-center">
          <CustomButton 
            title="Test Dig selv"
            imgSource={require('../../../../assets/images/book.png')}
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "stillads"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-5"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Stillads