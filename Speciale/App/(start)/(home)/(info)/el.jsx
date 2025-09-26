import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../../components/CustomButton'
import { router, Link } from 'expo-router'
import Header from '../../../../components/Header'
import Collapsible from 'react-native-collapsible'
import SpeakableText from '../../../../components/SpeakableText'
import Favourite from '../../../../components/Favourite'
import * as Speech from 'expo-speech';

const El = () => {
  const quizindex = "el";

  const [collapsed, setCollapsed] = useState(true);
      
  const toggleExpand = () => {
    setCollapsed(!collapsed);
  }

  var spinDeg = '0deg'

  if(!collapsed){
    spinDeg = '0deg'
  } else{
    spinDeg = '180deg'
  }

  const info = {
    title: "El-arbejde",
    path: "/el"
  }

  const key = "3";

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
        <View className="flex-row justify-center items-center bg-primary mb-5">
          <Text className="text-3xl font-pbold mt-5 mb-5">El-arbejde</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>
        
        <View className="mx-5 mb-5">
          <View className="flex flex-row">
            <Text className="text-2xl font-psemibold w-[285px]">Hvad er Vigtigt?</Text>
            <SpeakableText
            children={"Hvad er Vigtigt. At fjerne eller forebygge risikoforhold, der kan føre til alvorlige arbejdsulykker. Alt arbejde skal udføres efter gældende el-sikkerhedslov."}
            />
          </View>
          <Text className="text-xl font-pregular">At fjerne eller forebygge risikoforhold, der kan
          føre til alvorlige arbejdsulykker. Alt arbejde skal udføres efter gældende el-sikkerhedslov.</Text>
        </View>


        <View className="mx-5 mb-5">
          <View className="flex flex-row">
            <Text className="text-2xl font-psemibold w-[285px]">Forebyggelse</Text>
            <SpeakableText
            children={"Forebyggelse. Vi har særligt fokus på følgende. Der må aldrig arbejdes på el, uden at nogen fra VandCenter Syd er orienteret herom. "
              + "Vi arbejder som udgangspunkt aldrig med spænding på. "
              + "I de få tilfælde, hvor det ikke er muligt at afbryde for spændingen, fx ved arbejde på batterier, skal der foreligge en klar skriftelig aftale herom mellem " +
              "vedkommende, der skal udføre opgaven, og VandCenter Syds Driftsområde OT og EL. " + 
              "Du skal være faglært inden for el, og der skal være en faglært vagtperson til stede. " +
              "Ved spænding over 1000 volt AC. " + "Kun el-personale med særlig aftale og kompetencer må arbejde på eller i nærheden af højspænding. "
            }/>
          </View>
          <Text className="text-xl font-pregular">Vi har<Text className="font-pbold"> særligt fokus </Text>på følgende: 
          Der må <Text className="font-pbold">aldrig</Text> arbejdes på el, uden at nogen fra VandCenter Syd er orienteret herom.</Text>
          <View className="flex flex-row">
            <View className="w-[210px]">
              <Text className="text-xl font-pregular">Vi arbejder som udgangspunkt aldrig med spænding på.</Text>
            </View>
            <View className="justify-center items-center">
              <Image 
                source={require('../../../../assets/images/no_power.png')}
                style={{ resizeMode: 'stretch', width: 100, height: 100}}
              />
              {/* <Link href="https://www.flaticon.com/free-icons/no-power" 
                className="text-xs font-pregular text-blue-400 underline">by POD Gladiator</Link> */}
            </View>
          </View>
          <Text className="text-xl font-pregular">
          I de få tilfælde, hvor det ikke er muligt at afbryde for spændingen, fx ved arbejde på</Text>
          <View className="flex flex-row">
            <View className="w-[200px] mr-5">
              <Text className="text-xl font-pregular">
              batterier, skal der foreligge <Text className="font-pbold">en klar skriftlig aftale</Text> herom mellem</Text>
            </View>
            <View className="justify-center items-center">
              <Image
                source={require('../../../../assets/images/contact-form.png')}
                style={{ resizeMode: 'stretch', width: 100, height: 100}}
              />
              {/* <Link href="https://www.flaticon.com/free-icons/form" 
                className="text-xs font-pregular text-blue-400 underline">by Freepik</Link> */}
            </View>
          </View>
          <Text className="text-xl font-pregular">vedkommende, der skal
          udføre opgaven, og VandCenter Syds Driftsområde OT og EL. Du <Text className="font-pbold">skal </Text> 
          være faglært inden for el, <Text className="font-pbold">og</Text> der skal
          være en faglært vagtperson til stede.</Text> 
        </View>

        <View className="border-2 border-red-600 rounded-xl mx-5 mb-5">
          <TouchableOpacity onPress={toggleExpand} className="mt-1">
            <View className="mx-1 flex flex-row">
              <Text className="text-xl font-psemibold mr-16">Ved spænding over 1000 volt AC:</Text>
              <Image
                className="ml-2"
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <Text className="text-xl font-pregular mx-1">Kun el-personale med særlig aftale og kompetencer må arbejde på eller i nærheden af
            højspænding.</Text>
          </Collapsible>
        </View>

        <View className="mx-5 mb-5 justify-center items-center">
          <Image
            source={require('../../../../assets/images/accident.png')}
            style={{ resizeMode: 'stretch', width: 200, height: 200}}
          />
          {/* <Link href="https://www.flaticon.com/free-icons/accident" 
            className="text-xs font-pregular text-blue-400 underline">by Freepik</Link> */}
        </View>

        {/* Der er mange huskeregler og jeg tænker det kan være en video */}
        <View className="mb-5 mx-5">
          <View className="flex flex-row">
            <Text className="text-2xl font-psemibold w-[285px]">Huskeregler</Text>
            <SpeakableText
            children={"Huskeregler. Arbejde på spændingsførende dele:" +  
              "Tjek om der er spænding på anlægget. "+ 
              "Kan du ikke afbryde spændingen, skal der være en sagkyndig vagt til stede. "+
              "Afgræns arbejdsområdet. "+
              "Overvej arbejdsmetode. "+
              "Benyt LAUS beskyttelsesudstyr og afdækning. "+
              "Benyt personligt LAUS beskyttelsesudstyr. "+
              "Vurder evakueringsmulighederne veduheld. "+
              "Arbejde nær spændingsførende dele: "+ 
              "Tjek om der er spænding på anlægget. "+
              "Hold god afstand til spændingsførende dele. "+
              "Afgræns arbejdsområdet. "+
              "Dæk af, hvis det ikke er muligt at holde tilstrækkelig afstand. "+
              "Benyt personligt LAUS beskyttelsesudstyr, fx øjenværn, handsker trædemåtte, med mere. "+
              "Vurder evakueringsmulighederne ved uheld. "+
              "Arbejde med måle og justeringsopgaver: "+
              "Benyt det korrekte måleudstyr. "+ 
              "Benyt korrekte ledninger og prober. "+
              "Test måleudstyr inden brug. "+
              "Benyt personligt LAUS udstyr, fx øjenværn, handsker, med mere. "+
              "Vurder evakueringsmulighederne ved uheld."
            }      
            />
          </View>
          <Text className="text-xl font-pbold">Arbejde på spændingsførende dele:</Text>
          <View>
            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Tjek om der er spænding på anlægget</Text>
            </View>
            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Kan du ikke afbryde spændingen, skal der
              være en sagkyndig vagt til stede</Text>
            </View>
            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Afgræns arbejdsområdet</Text>
            </View>
            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Overvej arbejdsmetode</Text>
            </View>
            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Benyt LAUS beskyttelsesudstyr og afdækning</Text>
            </View>
            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Benyt personligt LAUS beskyttelsesudstyr</Text>
            </View>
            <View className="flex flex-row mr-5 mb-3">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Vurdér evakueringsmulighederne ved uheld</Text>
            </View>

            <Text className="text-xl font-pbold">Arbejde nær spændingsførende dele:</Text>

            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Tjek om der er spænding på anlægget</Text>
            </View>
            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Hold god afstand til spændingsførende
              dele</Text>
            </View>
            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Afgræns arbejdsområdet</Text>
            </View>
            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Dæk af, hvis det ikke er muligt at holde
              tilstrækkelig afstand</Text>
            </View>
            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Benyt personligt LAUS beskyttelsesudstyr,
              fx øjenværn, handsker trædemåtte, mm.</Text>
            </View>
            <View className="flex flex-row mr-5 mb-3">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Vurdér evakueringsmulighederne ved
              uheld</Text>
            </View>

            <Text className="text-xl font-pbold">Arbejde med måle og justeringsopgaver:</Text>

            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Benyt det korrekte måleudstyr</Text>
            </View>
            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Benyt korrekte ledninger og prober</Text>
            </View>
            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Test måleudstyr inden brug</Text>
            </View>
            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Benyt personligt LAUS udstyr, fx øjenværn,
              handsker, mm.</Text>
            </View>
            <View className="flex flex-row mr-5">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Vurdér evakueringsmulighederne ved
              uheld</Text>
            </View>
          </View>
        </View>

        <View className="mx-5 mb-5">
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
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "el"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-10"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default El