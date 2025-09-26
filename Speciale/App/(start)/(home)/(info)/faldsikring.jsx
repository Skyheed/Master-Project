import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import React from 'react'; // Ensure React is imported
import CustomButton from '../../../../components/CustomButton';
import { router, Link } from 'expo-router';
import Header from '../../../../components/Header';
import SpeakableText from '../../../../components/SpeakableText';
import Favourite from '../../../../components/Favourite';
import * as Speech from 'expo-speech';

const Faldsikring = () => {
  const quizindex = "faldsikring";

  const info = {
    title: "Faldsikring",
    path: "/faldsikring"
  }

  const key = "4";

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
          <Text className="text-3xl font-pbold my-5">Faldsikring</Text>
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
              children={"Hvad er vigtigt. At vi er opmærksomme på fare for nedstyrtning, når der arbejdes i " +
              "højden eller i brønde, tanke og pumpestationer."}
            />
          </View>
          <Text className="text-xl font-pregular">
            At vi er opmærksomme på fare for nedstyrtning, når der arbejdes i højden eller i brønde,
            tanke og pumpestationer.
          </Text>
        </View>

        <View className="mx-5 mt-5">
          <View className="flex-row">
            <Text className="text-2xl font-psemibold w-[270px]">Faldsikringsudstyr</Text>
            <SpeakableText
            styles={"ml-5"}
            children={"Faldsikringsudstyr. Kan forhindre, at en person falder ned. Kan sænke eller løfte en person op skråstreg ned i en brønd. " +
              "Du må max anvende faldsikring i 4 timer. Brug af faldsikring er en nødløsning i tilfælde, " +
              "hvor det ikke er muligt at sikre med stillads eller rækværk. "
            }
            />
          </View>
          <View className="flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Kan forhindre, at en person falder ned.</Text>
          </View>
          <View className="flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Kan sænke eller løfte en person op/ned i en brønd.</Text>
          </View>
          <Text className="text-xl font-pregular my-3">Du må <Text className="font-pbold">max</Text> anvende faldsikring
           i <Text className="font-pbold">4 timer.</Text></Text>
          <Text className="text-xl font-pregular">Brug af faldsikring er en <Text className="font-pbold">nødløsning</Text> i tilfælde,
            hvor det ikke er muligt at sikre med stillads eller rækværk.</Text>
        </View>

        <View className="mx-5 flex-row mt-5">
          <View className="items-center">
            <Image 
              source={require('../../../../assets/images/fall-protection.png')}
              style={{ resizeMode: 'stretch', width: 120, height: 120}}
            />
            {/* <Link href="https://www.flaticon.com/free-icons/fall-protection" 
            className="text-xs font-pregular text-blue-400 underline ml-3">by Afian Rochmah Afif</Link> */}
          </View>
          <View className="items-center ml-14">
            <Image 
              source={require('../../../../assets/images/harness.png')}
              style={{ resizeMode: 'stretch', width: 120, height: 120}}
            />
            {/* <Link href="https://www.flaticon.com/free-icons/harness" 
            className="text-xs font-pregular text-blue-400 underline ml-3">by Freepik</Link> */}
          </View>
        </View>

        <View className="mt-5 mx-5">
          <Text className="text-2xl font-psemibold">Huskeregler</Text>
          <View className="bg-gray-300 min-h-[200px] justify-center items-center">
            <Text className="text-xl font-pmedium">Video Placeholder</Text>
          </View>
        </View>

        <View className="mx-5 my-5">
          <View className="flex flex-row mr-5">
            <Text className="text-2xl font-psemibold w-[280]">Huskeregler:</Text>
            <SpeakableText 
              children={"Huskeregler. "+
                "Vælg det udstyr, der passer til opgaven. Tjek om udstyret er godkendt og gyldigt. " +
                "Ved arbejde i højden fastgøres linen så højt som muligt – anvend altid falddæmper, skråstreg faldblok. " + 
                "Ved arbejde på den udvendige side af gelænder - brug altid en line, der er strammet op af en fodmand. " +
                "Ved arbejde i kloakker, brønde, tanke og pumpestationer skal der anvendes 3-ben med håndspil og falddæmper, " + 
                "eller der kan bruges kranarm med el-hejs. Her anvendes altid falddæmper. " + 
                "Hejs skal altid foregå lodret – alternativt skal du kende denne instruks, Arbejde i bassiner og tanke med slam og grus: " + 
                "Ved brug af el-hejs skal der altid være et alternativt håndspil ved strømsvigt, og el-hejs skal være godkendt til personløft. " + 
                "Hav altid kontakt med personen, der er i faldsikringen. Rengør faldsikringen efter brug."
              }
              />
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Vælg det udstyr, der passer til opgaven. </Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Tjek om udstyret er godkendt og gyldigt. </Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Ved arbejde i højden fastgøres linen så højt som muligt – anvend altid falddæmper/ faldblok. </Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Ved arbejde på den udvendige side af gelænder - brug altid en line, der er strammet op af en fodmand.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Ved arbejde i kloakker, brønde, tanke og pumpestationer skal der anvendes 3-ben med håndspil og falddæmper, eller der kan bruges kranarm med el-hejs. Her anvendes altid falddæmper.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Hejs skal altid foregå lodret – alternativt skal du kende denne instruks ”Arbejde i bassiner og tanke med slam og grus”. </Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Ved brug af el-hejs skal der altid være et alternativt håndspil ved strømsvigt, og el-hejs skal være godkendt til personløft.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Hav altid kontakt med personen, der er i faldsikringen.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Rengør faldsikringen efter brug.</Text>
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
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "faldsikring"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-5"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Faldsikring;
