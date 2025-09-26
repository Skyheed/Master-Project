import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../../../components/CustomButton'
import { Link, router } from 'expo-router'
import Header from '../../../../components/Header'
import Favourite from '../../../../components/Favourite'
import SpeakableText from '../../../../components/SpeakableText'
import * as Speech from 'expo-speech';

const Kran = () => {
  const quizindex = "kran";

  const info = {
    title: "Kran, løftekæde, krog og truck",
    path: "/kran"
  }

  const key = "7";

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="border-b-2 border-primary">
        <Header
          backgroundColor="white"
          leftPress={() => {router.back(), Speech.stop()}}
          // rightPress={() => router.dismissAll()}
          centerPress={() => {router.push('search'), Speech.stop()}}
        />
      </View>
      <ScrollView>
        <View className="flex-row bg-primary justify-center items-center">
          <Text className="text-3xl font-pbold mt-5 mb-5 w-[270px]">Kran, løftekæde, krog og truck</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>
        
        <View className="mt-5 mx-5">
          <View className="flex flex-row mr-5">
          <Text className="text-2xl font-psemibold w-[280]">Hvad er Vigtigt?</Text>
          <SpeakableText
          children={"Hvad er Vigtigt. At du er opmærksom på sikkerheden, når. "+
            "der bruges løftegrej. " +
            "At du er instrueret i brug af løftegrej og har certifikat, hvis det er krævet. "+
            "At du har truckcertifikat, hvis trucken ikke er låst til max 1 meter. "
          }
          
          />
          </View>
          <View className="flex flex-row mr-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">At du er opmærksom på sikkerheden, når
            der bruges løftegrej.</Text>
          </View>
          <View className="flex flex-row mr-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">At du er instrueret i brug af løftegrej og har
            certifikat, hvis det er krævet.</Text>
          </View>
          <View className="flex flex-row mr-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">At du har truckcertifikat, hvis trucken ikke er
            låst til max 1 meter.</Text>
          </View>
        </View>
        
        {/* Grafikker */}
        <View className="flex flex-row mx-5 mb-5">
          <View className="justify-center items-center">
            <Image
              source={require('../../../../assets/images/crane-truck.png')}
              style={{ resizeMode: 'stretch', width: 150, height: 150}}
            />
            {/* <Link href="https://www.flaticon.com/free-icons/crane-truck" 
              className="text-xs font-pregular text-blue-400 underline">by Freepik</Link> */}
          </View>
          <View className="justify-center items-center ml-5">
            <Image
              source={require('../../../../assets/images/forklift.png')}
              style={{ resizeMode: 'stretch', width: 150, height: 150}}
            />
            {/* <Link href="https://www.flaticon.com/free-icons/forklift" 
              className="text-xs font-pregular text-blue-400 underline">by Freepik</Link> */}
          </View>
        </View>

        <View className="mx-5">
          <View className="flex flex-row mr-5">
          <Text className="text-2xl font-psemibold w-[280]">Hvornår og Hvordan?</Text>
          <SpeakableText
            children={"Hvornår og Hvordan. Brug hjælpemidler som kran, løftekæder og krog ved tunge løft. " +
            "OBS. Hvis ovenstående følges, har vi risikovurderet, at der IKKE kræves et årligt eftersyn af fastmonterede løftekæder, samt hjelm, er IKKE påbudt ved brug af elektrisk kran på værksteder. "+
            "Elektrisk kran på værksteder og servicebiler. "+
            "Kranerne skal efterses én gang årligt. "+
            "Krankrogen placeres uden for gangveje, når den ikke bruges. "+
            "Når kranføreren ikke er til stede, skal byrden sænkes til fast underlag. "+
            "Byrden skal altid transporteres så lavt som muligt. "+
            "Stå ALDRIG under byrden! "+
            "Hjelm er ALTID påbudt ved brug af kran på servicebiler. "+
            "Fastmonterede løftekæder på dykkede pumper og kontraklapper. "+
            "Der må kun benyttes syrefaste, rustfri kæder (A4). "+
            "Sjækel og kæde skal kunne bære mindst 4 gange så meget som vægten på byrden. "+
            "Ved pumpeeftersyn skal kæden efterses. "+
            "Kæder der viser tegn på tæring eller deformation skal udskiftes. "+
            "Brug af krog uden låsepal. "+
            "Krog uden pal benyttes til optagning og nedsænkning af dykket pumpe. "+
            "Alt andet løft/transport af pumpe foretages med krog med pal. "+
            "Stå så vidt muligt lidt væk fra byrden, når den hænger i kæden."
            }
          />
          </View>

          <Text className="text-xl font-pregular">Brug hjælpemidler som kran, løftekæder og
          kroge ved tunge løft.</Text>
          <View className="bg-gray-300 min-h-[200px] justify-center items-center mt-2">
            <Text className="text-xl font-pmedium">Video Placeholder</Text>
          </View>
          <Text className="text-xl font-pregular mt-2"><Text className="font-pbold">OBS.</Text> Hvis ovenstående følges, 
          har vi risikovurderet, at der <Text className="font-pbold">IKKE</Text> kræves et årligt
          eftersyn af fastmonterede løftekæder, samt hjelm er <Text className="font-pbold">IKKE</Text> påbudt ved brug af elektrisk kran på værksteder.</Text>
        </View>

        <View className="mx-5 my-5 justify-center items-center">
          <Image 
            source={require('../../../../assets/images/drive-forklift.png')}
            style={{ resizeMode: 'contain', width: 310, height: 400}}
          />
          {/* <Text className="text-xs font-pregular mx-5">Kilde: <Link 
            href="https://www.bigrentz.com/blog/how-to-drive-a-forklift" 
            className="text-blue-500 underline">Link</Link>
          </Text>  */}
        </View>

          <Text className="text-xl font-pbold mx-5">Elektrisk kran på værksteder og
          servicebiler</Text>

          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Kranerne skal efterses én gang årligt.</Text>
          </View>
          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Krankrogen placeres uden for gangveje, når
            den ikke bruges.</Text>
          </View>
          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Når kranføreren ikke er til stede, skal byrden
            sænkes til fast underlag.</Text>
          </View>
          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Byrden skal altid transporteres så lavt som
            muligt.</Text>
          </View>
          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Stå ALDRIG under byrden!</Text>
          </View>
          <View className="flex flex-row mx-5 mb-3">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Hjelm er ALTID påbudt ved brug af kran på
            servicebiler.</Text>
          </View>

          <Text className="text-xl font-pbold mx-5">Fastmonterede løftekæder på dykkede
          pumper og kontraklapper</Text>

          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Der må kun benyttes syrefaste, rustfri kæder
            (A4).</Text>
          </View>
          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Sjækel og kæde skal kunne bære mindst 4
              gange så meget som vægten på byrden.</Text>
          </View>
          <View className="flex flex-row mx-5 mb-3">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Ved pumpeeftersyn skal kæden efterses.
              Kæder der viser tegn på tæring eller deformation skal udskiftes.</Text>
          </View>

          <Text className="text-xl font-pbold mx-5">Brug af krog uden låsepal</Text>

          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Krog uden pal benyttes til optagning og
              nedsænkning af dykket pumpe. Alt andet løft/transport af pumpe foretages med
              krog med pal.</Text>
          </View>
          <View className="flex flex-row mx-5">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Stå så vidt muligt lidt væk fra byrden, når
              den hænger i kæden.</Text>
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
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "kran"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-10"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Kran