import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../../components/CustomButton'
import { Link, router } from 'expo-router'
import Header from '../../../../components/Header'
import Favourite from '../../../../components/Favourite'
import SpeakableText from '../../../../components/SpeakableText' 
import Zoom from '../../../../components/Zoom' 
import * as Speech from 'expo-speech';

const Afmærkning = () => {
  const quizindex ="markering";

  const info = {
    title: "Afmærkning og Afspæring",
    path: "/markering"
  }

  const key = "8";

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);

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
          <Text className="text-3xl font-pbold mt-5 mb-5">Afmærkning og Afspæring</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>

        <View className="mx-5 mt-5">
          <View className="flex flex-row mr-5">
          <Text className="text-2xl font-psemibold w-[280]">Hvad er Vigtigt?</Text>
          <SpeakableText 
          children={"Hvad er Vigtigt. Vores bygge- og anlægsprojekter skal "+
            "afmærkes skråstreg afspærres, så vi selv og andre ikke kommer til skade. " +
            "Vi skal forhindre påkørsel, nedstyrtning og sikre de trafikale forhold."
          }
          />
          </View>
          <Text className="text-xl font-pregular">Vores bygge- og anlægsprojekter skal
          afmærkes/afspærres, så vi selv og andre ikke kommer til skade. Vi skal forhindre påkørsel,
          nedstyrtning og sikre de trafikale forhold.</Text>
        </View>

        <View className="mx-5 mt-5 justify-center items-center">
          <Image
            source={require('../../../../assets/images/traffic-barrier.png')}
            style={{ resizeMode: 'stretch', width: 200, height: 200}}
          />
          {/* <Link href="https://www.flaticon.com/free-icons/traffic-barrier" 
            className="text-xs font-pregular text-blue-400 underline">by Freepik</Link> */}
        </View>

        <View className="mx-5 mt-5">
          <View className="flex flex-row mr-5">
          <Text className="text-2xl font-psemibold w-[280]">Info</Text>
          <SpeakableText
          children={"Info. Afmærkning skråstreg afspærring er en vanskelig sag. "+
            "Både loven, politiet og vejmyndigheden kan stille krav til deltagelse på kurset, "+
            "”Vejen som arbejdsplads” for de medarbejdere, der arbejder på eller langs vejen. " +
            "Til mindre opgaver kan der anvendes mobil afspærring, og alle arbejdskøretøjer skal"+
            "altid føre gult blink."
          }
          />
          </View>
          <Text className="text-xl font-pregular">
          Afmærkning/afspærring er en vanskelig sag! Både loven, politiet og vejmyndigheden kan
          stille krav til deltagelse på kurset ”Vejen som arbejdsplads” for de medarbejdere, 
          der arbejder på eller langs vejen. </Text>
          <Text className="text-xl font-pregular mt-5">Til mindre opgaver kan der anvendes mobil
          afspærring, og alle arbejdskøretøjer skal altid føre gult blink.</Text>
        </View>

        <View className="mx-5 my-5">
          <View className="flex flex-row mr-5">
          <Text className="text-2xl font-psemibold w-[280]">Afspærring mod trafik</Text>
          <SpeakableText
          children={"Afspærring mod trafik. Sikre trafikale forhold. "+
          "Vi skal overholde vejmyndighedens krav "+
          "for afmærkning. Brug eventuelt. Vejdirektoratets ”Håndbog for afmærkning af vejarbejder, når "+
          "du skal lave en afspærringsplan."
          }
          />
          </View>
          <TouchableOpacity onPress={() => {setModalVisible1(true)}}>
            <View className="items-center justify-start">
              <Image 
                source={require('../../../../assets/images/afstand-markering.png')}
                style={{ resizeMode: 'contain', width: 320, height: 200}}
              />
            </View>
          </TouchableOpacity>
          <Text className="text-xl font-psemibold mt-5">Sikre trafikale forhold:</Text>
          <Text className="text-xl font-pregular">Vi skal overholde vejmyndighedens krav
          for afmærkning. Brug evt. Vejdirektoratets ”Håndbog for afmærkning af vejarbejder”, når
          du skal lave en afspærringsplan.</Text>
        </View>

        <View>
          <Text className="text-2xl font-psemibold mx-5">Hvordan afspærrer man?</Text>
          <View className="bg-gray-300 min-h-[200px] mx-5 justify-center items-center">
            <Text className="text-xl font-pmedium">Video Placeholder</Text>
          </View>
        </View>

        <View className="mx-5 mt-5">
          <View className="flex flex-row mr-5">
            <Text className="text-2xl font-psemibold w-[280] mt-5">Huskeregler</Text>
            <SpeakableText 
              children={"Huske regler. "+
                "Forhindre påkørsel i byggegrube og rendegrav. "+
                "Der skal være rækværk skråstreg afspærring. "+
                "Afspærring sker som eksemplerne herunder. "+
                "Udgravninger, brønde o.l. skal være afspærret og/eller afdækket. "+
                "Hav kendskab til at udarbejde afspærringsplan. "+
                "Hav de nødvendige skilte og afspærringsmaterialer klar. "+
                "Først når afspærringen er i orden, kan selve arbejdet begynde. "+
                "Hold øje med, at afspærringen er intakt. Ellers stands arbejdet. "+
                "Kontroller og vedligehold afspærringen 2 gange om dagen (på arbejdsdage). "+
                "Sikre at afspærringen er holdbar, hvis du forlader arbejdsstedet. "+
                "I weekender skal afspærringen kontrolleres 1 gang i døgnet."
              }
              />
          </View>
          <Text className="text-xl font-pregular">Forhindre nedstyrtning i byggegrube og rendegrav:</Text>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Der skal være rækværk/afspærring.</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Afspærring sker som eksemplerne herunder:</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Udgravninger, brønde o.l. skal være afspærret og/eller afdækket.</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Hav kendskab til at udarbejde afspærringsplan.</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Hav de nødvendige skilte og afspærringsmaterialer klar.</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Først når afspærringen er i orden, kan selve arbejdet begynde.</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Hold øje med, at afspærringen er intakt. Ellers stands arbejdet.</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Kontroller og vedligehold afspærringen 2 gange om dagen (på arbejdsdage).</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Sikre at afspærringen er holdbar, hvis du forlader arbejdsstedet. </Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">I weekender skal afspærringen kontrolleres 1 gang i døgnet.</Text>
            </View>     
        </View>
        
        <View className="mx-5 mt-5">
          <Text className="text-xl font-psemibold">Afspærring ved byggegrube:</Text>
          <TouchableOpacity onPress={() => {setModalVisible2(true)}}>
            <View className="items-center justify-start">
              <Image 
                source={require('../../../../assets/images/markering_1.png')}
                style={{ resizeMode: 'contain', width: 320, height: 200}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setModalVisible3(true)}}>
            <View className="items-center justify-start">
              <Image 
                source={require('../../../../assets/images/markering_2.png')}
                style={{ resizeMode: 'contain', width: 320, height: 200}}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View className="mx-5 mt-5">
          <Text className="text-xl font-psemibold">Afspærring ved rendegrav:</Text>
          <TouchableOpacity onPress={() => {setModalVisible4(true)}}>
            <View className="items-center justify-start">
              <Image 
                source={require('../../../../assets/images/markering_3.png')}
                style={{ resizeMode: 'contain', width: 320, height: 200}}
              />
            </View>
          </TouchableOpacity>
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
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "markering"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-5"}
          />
        </View>

        <Zoom 
          modalVisible={modalVisible1}
          handlePress={() => {setModalVisible1(false)}}
          image={require('../../../../assets/images/afstand-markering.png')}
          containerStyles={"h-[250px]"}
          contentWidth={320}
          contentHeight={200}
        />

        <Zoom 
          modalVisible={modalVisible2}
          handlePress={() => {setModalVisible2(false)}}
          image={require('../../../../assets/images/markering_1.png')}
          containerStyles={"h-[250px]"}
          contentWidth={320}
          contentHeight={200}
        />

        <Zoom 
          modalVisible={modalVisible3}
          handlePress={() => {setModalVisible3(false)}}
          image={require('../../../../assets/images/markering_2.png')}
          containerStyles={"h-[250px]"}
          contentWidth={320}
          contentHeight={200}
        />

        <Zoom 
          modalVisible={modalVisible4}
          handlePress={() => {setModalVisible4(false)}}
          image={require('../../../../assets/images/markering_3.png')}
          containerStyles={"h-[250px]"}
          contentWidth={320}
          contentHeight={200}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Afmærkning