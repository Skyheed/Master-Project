import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../../components/CustomButton'
import { Link, router } from 'expo-router'
import Header from '../../../../components/Header'
import Zoom from '../../../../components/Zoom'
import Favourite from '../../../../components/Favourite'
import SpeakableText from '../../../../components/SpeakableText'
import * as Speech from 'expo-speech';

const Alene = () => {
  const quizindex = "alene";

  const [modalVisible, setModalVisible] = useState(false);

  const info = {
    title: "Alene Arbejde",
    path: "/alene"
  }

  const key = "1";

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
          <Text className="text-3xl font-pbold mt-5 mb-5">Alene Arbejde</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>

        <View className="mx-5 mb-5 mt-5">
          <View className=" flex flex-row">

          <Text className="text-2xl font-psemibold w-[285]">Hvad er Vigtigt?</Text>
          <SpeakableText
          children={
            "Hvad er Vigtigt. At du er tryg, når du arbejder alene på anlæggene i hverdagen eller i en vagtsituation. " + 
            "At du kan få hjælp af en kollega, hvis der skulle opstå en uheldig situation, hvor du ikke selv kan tilkalde hjælp."
          }/>
          </View>
          <Text className="text-xl font-pregular">
          At du er tryg, når du arbejder alene på
          anlæggene i hverdagen eller i en vagtsituation.</Text>
          <Text className="text-xl font-pregular">
          At du kan få hjælp af en kollega, hvis der
          skulle opstå en uheldig situation, hvor du
          ikke selv kan tilkalde hjælp.
          </Text>
        
        </View>

        {/* Billede */}
        <View className="mx-5 mb-5">
          <Text className="text-2xl font-psemibold">Brugbar Info</Text>
          <View className="justify-center items-center">
            <Zoom 
              modalVisible={modalVisible}
              image={require("../../../../assets/images/lone-working-poster.png")}
              handlePress={() => setModalVisible(false)}
              containerStyles={"mt-20 h-[520px]"}
              contentWidth={360}
              contentHeight={520}
            />
            <TouchableOpacity onPress={() => {setModalVisible(true)}}>
              <View className="items-center justify-start">
                <Image 
                  source={require('../../../../assets/images/lone-working-poster.png')}
                  style={{ resizeMode: 'contain', width: 320, height: 480}}
                />
              </View>
            </TouchableOpacity>
            {/* <Text className="text-xs font-pregular mx-5">Kilde: <Link 
              href="https://www.safepointapp.com/blog/lone-working-poster" 
              className="text-blue-500 underline">Link</Link>
            </Text>  */}
          </View>
        </View>

        <View className="mx-5 mb-5">
          <View className="flex flex-row">
          <Text className="text-2xl font-psemibold w-[285px]">Din Sikkerhed</Text>
          <SpeakableText
            children={"Din Sikkerhed. Du skal have installeret ”Alarm app” på din telefon. " + 
              "Vejledning til installationen finder du via Linket. " + 
            "Appen skal bruges i de arbejdssituationer, hvor der er brug for en livline, fx ved arbejde på el-installationer, vagtudkald eller ved manglende netforbindelse i kældre skråstreg bygværker. "
            + "Der er opsat skilte på de lokaliteter med teksten ”Aktiver ’Alarm app’, når du arbejder alene”. "
            + "Når Appen er aktiveret, vil den automatisk tilkalde hjælp og give din kollega din seneste position og telefonnummer. Kollegaen kan ringe, høre om du er ok eller finde dig hvis du ikke svarer."
            }
            />
          </View>
          <View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Du skal have installeret ”Alarm app” på
              din telefon. Vejledning til installationen finder du via <Link href="https://www.vandcenter.dk/-/media/vandcenter/her-arbejder-vi/filer/sikkerhedshaandbog/guide_til_alarm_app.pdf?la=da&hash=AA1C65CB7974A75C6781118AA02CD1750E9EF7E3" className="text-blue-500 underline">
              Linket</Link>.</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">App’en skal bruges i de arbejdssituationer, 
              hvor der er brug for en livline, fx ved arbejde på el-installationer, 
              vagtudkald eller ved manglende netforbindelse i kældre/bygværker.</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Der er opsat skilte på de lokaliteter med
              teksten ”Aktiver ’Alarm app’, når du arbejder alene”.</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Når App’en er aktiveret, vil den automatisk
              tilkalde hjælp og give din kollega din seneste position og telefonnummer.
              Kollegaen kan ringe, høre om du er ok eller finde dig hvis du ikke svarer.</Text>
            </View> 
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
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "alene"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-5"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Alene