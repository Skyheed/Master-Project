import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../../../components/CustomButton'
import { router, Link } from 'expo-router'
import Header from '../../../../components/Header'
import Favourite from '../../../../components/Favourite'
import SpeakableText from '../../../../components/SpeakableText'
import * as Speech from 'expo-speech';

const Reparation = () => {
  const quizindex = "reparation";

  const info = {
    title: "Reparations- og Serviceopgaver",
    path: "/reparation"
  }

  const key = "10";

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
          <Text className="text-3xl font-pbold mt-5 mb-5">Reparations- og Serviceopgaver</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>

        <View className="m-5">
          <View className="flex flex-row">
            <Text className="text-2xl font-psemibold w-[270px]">Hvad er Vigtigt?</Text>
            <SpeakableText
              styles={"ml-5"} 
              children={"Hvad er Vigtigt. " +
                "Der kan ske alvorlige arbejdsulykker, når du arbejder med reparations- og serviceopgaver på maskiner. "
              }
            />
          </View>
          <Text className="text-xl font-pregular">
            Der kan ske alvorlige arbejdsulykker, når du arbejder med reparations- og serviceopgaver på maskiner. 
          </Text>
        </View>

        <View className="mb-5 mx-5">
          <View className="flex flex-row">
            <Text className="text-2xl font-psemibold w-[270px]">Før du går igang!</Text>
            <SpeakableText
              styles={"ml-5"} 
              children={"Før du går igang." +
                "Før du skal reparere eller servicere en maskine, er det vigtigt, at du har styr på el- og maskinsikkerhed. " +
                "Indgreb i de elektriske installationer uden spænding må kun udføres af instrueret medarbejder. " + 
                "Vi instruerer driftspersonale i forskellige reparationsopgaver, fx demontering og" +
                "montering af elforsyning til pumper. Instruerede medarbejdere skal have deltaget i et internt el-sikkerhedskursus, "
                + "og kurset skal være opdateret, dvs. max. 2 år gammelt. "
              }
            />
          </View>
          <Text className="text-xl font-pregular mb-2"><Text className="font-pbold">Før</Text> du skal reparere eller 
          servicere en maskine, er det vigtigt, at du har styr på el- og maskinsikkerhed.
          </Text>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular w-[190px]">
              Indgreb i de elektriske installationer uden spænding må kun udføres af
            </Text>
            <View className="items-center">
              <Image 
                source={require('../../../../assets/images/reparation.png')}
                style={{ resizeMode: 'stretch', width: 120, height: 120}}
              />
              {/* <Link href="https://www.flaticon.com/free-icons/hammer" 
              className="text-xs font-pregular text-blue-400 underline ml-3">by Flaticon</Link> */}
            </View>
          </View>
          <Text className="text-xl font-pregular mb-2"><Text className="font-pbold">instrueret medarbejder. </Text> 
            Vi instruerer driftspersonale i forskellige reparationsopgaver, fx demontering og
            montering af elforsyning til pumper.
          </Text>
          <Text className="text-xl font-pregular">
            Instruerede medarbejdere skal have deltaget i et internt el-sikkerhedskursus, og kurset skal
            være opdateret, dvs. <Text className="font-pbold">max. 2 år</Text> gammelt. 
          </Text>
        </View>

        <View className="mb-5 mx-5">
          <Text className="text-2xl font-psemibold">Huskeregler</Text>
          <View className="bg-gray-300 min-h-[200px] justify-center items-center">
            <Text className="text-xl font-pmedium">Video Placeholder</Text>
          </View>
        </View>

        <View className="mb-5 mx-5">
          <View className="flex flex-row ">
            <Text className="text-2xl font-psemibold w-[290]">Huskeregler</Text>
            <SpeakableText
            children={"Huskeregler. Følg leverandørens instruktion for vedligeholdelse. Afbryd el og aflås sikkerhedsafbryder (fjern evt. sikringen). " +
              "Blokér evt. mekanisk skråstreg fysisk for bevægelige dele. Trykaflast før skråstreg efter maskine og aflås evt. ventiler. " +
              "Sæt skilt op med ”Må ikke betjenes”. Skiltet skal angive navn og telefon nummer på den, som har afbrudt strømmen. " +
              "Fjern værktøj, løse dele, (bolte, møtrikker og lignende) inden idriftsætning."
            }
            />
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Følg leverandørens instruktion for vedligeholdelse.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Afbryd el og aflås sikkerhedsafbryder (fjern evt. sikringen). </Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Blokér evt. mekanisk/fysisk for bevægelige dele.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Trykaflast før/efter maskine og aflås evt. ventiler.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Sæt skilt op med ”Må ikke betjenes”. Skiltet skal angive navn og telefonnr. på den, som har afbrudt strømmen.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Fjern værktøj, løse dele (bolte, møtrikker og lignende) inden idriftsætning.</Text>
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
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "reparation"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-5"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Reparation