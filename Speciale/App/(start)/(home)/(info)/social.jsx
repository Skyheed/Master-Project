import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../../components/CustomButton'
import HeaderTabs from '../../../../components/HeaderTabs'
import { router } from 'expo-router'
import Collapsible from 'react-native-collapsible'
import SpeakableText from '../../../../components/SpeakableText'
import Favourite from '../../../../components/Favourite'
import * as Speech from 'expo-speech';

const Social = () => {
  const quizindex ="social";

  const [collapsed, setCollapsed] = useState(true);
  const [collapsed1, setCollapsed1] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
    
  const toggleExpand = () => {
    setCollapsed(!collapsed);
  }
  const toggleExpand1 = () => {
    setCollapsed1(!collapsed1);
  }
  const toggleExpand2 = () => {
    setCollapsed2(!collapsed2);
  }

  const info = {
    title: "Adgangsforhold",
    path: "/social"
  }

  const key = "12";

  return (
    <SafeAreaView className="bg-white h-full">
      <View>
        <HeaderTabs
            backgroundColor="white"
            leftPress={() => {router.back(), Speech.stop()}}
        />
      </View>
      <ScrollView>
        <View className="flex-row bg-tertiary items-center justify-center">
          <Text className="text-3xl font-pbold mt-5 mb-5">Adgangsforhold</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>

        <View className="justify-start rounded-xl border-4 border-tertiary my-5 mx-5">
          <TouchableOpacity onPress={toggleExpand} className="flex flex-row bg-tertiary items-center">
            <Text className="text-2xl font-psemibold p-1 w-[250px]">Adgangsforhold</Text>
            <View className="bg-white w-[50px] h-[70px] rounded-3xl justify-center items-center mb-1">
              <Image 
                source={require('../../../../assets/images/lock.png')}
                style={{ resizeMode: 'contain', width: 40, height: 50}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <View className="flex flex-row ml-5 my-1">
              <Text className="text-xl font-pregular w-[250px]">
              Du skal have en aftale om adgang med din
              kontaktperson hos VandCenter Syd.
              Du skal evt. have et gæstekort og nøgle for adgang
              til aflåste lokaliteter eller områder.
              Der gælder specielle regler for adgang til vores vand- og
              spildevandsanlæg – beskrevet i "arbejdsmiljø".
              </Text>
              <SpeakableText
              children={"Adgangsforhold. Du skal have en aftale om adgang med din kontaktperson hos VandCenter Syd. Du skal evt. have et gæstekort og nøgle for adgang til aflåste lokaliteter eller områder. Der gælder specielle regler for adgang til vores vand- og spildevandsanlæg – beskrevet under personlig."}
              styles="justify-start"
              />
            </View>
          </Collapsible>
        </View>

        <View className="justify-start rounded-xl border-4 border-tertiary mb-5 mx-5">
          <TouchableOpacity onPress={toggleExpand1} className="flex flex-row bg-tertiary items-center">
            <Text className="text-2xl font-psemibold p-1 w-[250px]">Sundhed og Trivsel</Text>
            <View className="bg-white w-[50px] h-[70px] rounded-3xl justify-center items-center mb-1">
              <Image 
                source={require('../../../../assets/images/no_smoking.png')}
                style={{ resizeMode: 'contain', width: 40, height: 50}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed1}>
            <View className="flex flex-row ml-5 my-1">
              <Text className="text-xl font-pregular w-[250px]">
              Vi er en røgfri arbejdsplads. Rygning er ikke tilladt
              på vores arealer og byggepladser (inde og ude).
              Det er ikke tilladt at indtage eller være påvirket af
              alkohol, narkotika eller andre rusmidler i arbejdstiden.
              Vi accepterer ingen former for krænkelser.
              Vores politikker for disse områder kan rekvireres.
              </Text>
              <SpeakableText
              children={"Sundhed og Trivsel. Vi er en røgfri arbejdsplads. Rygning er ikke tilladt på vores arealer og byggepladser (inde og ude). Det er ikke tilladt at indtage eller være påvirket af alkohol, narkotika eller andre rusmidler i arbejdstiden. Vi accepterer ingen former for krænkelser. Vores politikker for disse områder kan rekvireres."}
              styles="justify-start"
              />
            </View>
          </Collapsible>
        </View>

        <View className="justify-start rounded-xl border-4 border-tertiary mx-5">
          <TouchableOpacity onPress={toggleExpand2} className="flex flex-row bg-tertiary items-center">
            <Text className="text-2xl font-psemibold p-1 w-[250px]">Færdsel på Vores Områder</Text>
            <View className="bg-white w-[50px] h-[70px] rounded-3xl justify-center items-center mb-1">
              <Image 
                source={require('../../../../assets/images/car.png')}
                style={{ resizeMode: 'contain', width: 40, height: 50}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed2}>
           <View className="flex flex-row ml-5 my-1">
            <Text className="text-xl font-pregular w-[250px]">
            Bær som minimum refleksvest klasse 1, når du
            færdes udendørs på vores produktionsanlæg.
            I kantinerne må ikke bæres overtøj.
            Vær OBS på hastigheds - begrænsningen på vores områder.
            </Text>
            <SpeakableText
            children={"Færdsel på Vores Områder. Bær som minimum refleksvest klasse 1, når du færdes udendørs på vores produktionsanlæg. I kantinerne må ikke bæres overtøj. Vær OBS på hastighedsbegrænsningen på vores områder."}
            styles="justify-start"
            />
           </View>
          </Collapsible>
        </View>

        <View className="mx-5 mt-5 mb-10">
          <Text className="text-2xl font-psemibold mb-2">
            Gå videre til andre retningslinjer:
          </Text>
          <CustomButton 
            title="Arbejdsmiljø"
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            imgSource={require('../../../../assets/images/arbejdsmiljo.png')}
            handlePress={() => {router.push('/personlig'), Speech.stop()}}
            containerStyles={"bg-primary"}
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Social