import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../../components/CustomButton'
import HeaderTabs from '../../../../components/HeaderTabs'
import { Link, router } from 'expo-router'
import Collapsible from 'react-native-collapsible'
import SpeakableText from '../../../../components/SpeakableText'
import Favourite from '../../../../components/Favourite'
import * as Speech from 'expo-speech';

const Ulykker = () => {
  const quizindex = "retningslinjer";

  const [collapsed, setCollapsed] = useState(true);
  const [collapsed1, setCollapsed1] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);
  const [collapsed4, setCollapsed4] = useState(true);
    
  const toggleExpand = () => {
    setCollapsed(!collapsed);
  }
  const toggleExpand1 = () => {
    setCollapsed1(!collapsed1);
  }
  const toggleExpand2 = () => {
    setCollapsed2(!collapsed2);
  }
  const toggleExpand3 = () => {
    setCollapsed3(!collapsed3);
  }
  const toggleExpand4 = () => {
    setCollapsed4(!collapsed4);
  }

  const info = {
    title: "Alarm og Evakuering",
    path: "/ulykker"
  }

  const key = "18";

  return (
    <SafeAreaView className="bg-white h-full">
      <View>
        <HeaderTabs
            backgroundColor="white"
            leftPress={() => {router.back(), Speech.stop()}}
        />
      </View>
      <ScrollView>
        <View className="flex-row bg-secondary items-center justify-center">
          <Text className="text-3xl font-pbold mt-5 mb-5 text-white w-[200px]">Alarm og Evakuering</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>

        <View className="justify-start rounded-xl border-4 border-secondary my-5 mx-5">
          <TouchableOpacity onPress={toggleExpand} className="flex flex-row bg-secondary items-center">
            <Text className="text-2xl font-psemibold p-1 w-[250px] text-white">Brand</Text>
            <View className="bg-white w-[50px] h-[70px] rounded-3xl justify-center items-center mb-1">
              <Image 
                source={require('../../../../assets/images/house_fire.png')}
                style={{ resizeMode: 'contain', width: 40, height: 50}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <View className="flex flex-row my-1 ml-5">
              <View className="w-[250px]">
                <Text className="text-xl font-pregular">1. Advar om branden.</Text>
                <Text className="text-xl font-pregular">2. Evakuér.</Text>
                <Text className="text-xl font-pregular">3. Tilkald hjælp på 112.</Text>
              </View>
              <SpeakableText
                children={"Brand." + "1. Advar om branden."+ "\n"+
                  "2. Evakuér."+ "\n"+
                  "3. Tilkald hjælp på 112."}
                styles="justify-start"
              />
            </View>
          </Collapsible>
        </View>

        <View className="justify-start rounded-xl border-4 border-secondary mb-5 mx-5">
          <TouchableOpacity onPress={toggleExpand1} className="flex flex-row bg-secondary items-center">
            <Text className="text-2xl font-psemibold p-1 w-[250px] text-white">Evakuering</Text>
            <View className="bg-white w-[50px] h-[70px] rounded-3xl justify-center items-center mb-1">
              <Image 
                source={require('../../../../assets/images/samlingsted.png')}
                style={{ resizeMode: 'contain', width: 40, height: 50}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed1}>
            <View className="flex flex-row my-1 ml-5">
              <Text className="text-xl font-pregular w-[250px]">
              Orientér dig om, hvor <Link href="/homeLille" className="text-blue-500 underline">samlingssteder</Link> er placeret på
              VandCenter Syds lokationer.
              Ved alarm eller anden ulykke: Gå til samlingsstedet.
              Bliv på samlingsstedet, til alarmen afblæses.
              Flugtveje må ikke blokeres!
              </Text>
              <SpeakableText
              children={"Evakuering. Orientér dig om, hvor samlingssteder er placeret på VandCenter Syds lokationer. Ved alarm eller anden ulykke: Gå til samlingsstedet. Bliv på samlingsstedet, til alarmen afblæses. Flugtveje må ikke blokeres!"}
              styles="justify-start"
              />
            </View>
          </Collapsible>
        </View>

        <View className="justify-start rounded-xl border-4 border-secondary mb-5 mx-5">
          <TouchableOpacity onPress={toggleExpand2} className="flex flex-row bg-secondary items-center">
            <Text className="text-2xl font-psemibold p-1 w-[250px] text-white">Ulykker eller Uheld</Text>
            <View className="bg-white w-[50px] h-[70px] rounded-3xl justify-center items-center mb-1">
              <Image 
                source={require('../../../../assets/images/first_aid_bag.png')}
                style={{ resizeMode: 'contain', width: 40, height: 50}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed2}>
            <View className="flex flex-row my-1 ml-5">
              <Text className="text-xl font-pregular w-[250px]">
              Skab sikkerhed og overblik. Tilkald hjælp på 112.
              Giv den nødvendige førstehjælp.
              Anmeld hændelsen hos VandCenter Syds kontaktperson.
              </Text>
              <SpeakableText
              children={"Ulykker eller Uheld. Skab sikkerhed og overblik. Tilkald hjælp på 112. Giv den nødvendige førstehjælp. Anmeld hændelsen hos VandCenter Syds kontaktperson."}
              styles="justify-start"
              />
            </View>
          </Collapsible>
        </View>

        <View className="justify-start rounded-xl border-4 border-secondary mb-5 mx-5">
          <TouchableOpacity onPress={toggleExpand3} className="flex flex-row bg-secondary items-center">
            <Text className="text-2xl font-psemibold p-1 w-[250px] text-white">Lær af Det Der Sker</Text>
            <View className="bg-white w-[50px] h-[70px] rounded-3xl justify-center items-center mb-1">
              <Image 
                source={require('../../../../assets/images/bulb.png')}
                style={{ resizeMode: 'contain', width: 40, height: 50}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed3}>
            <View className="flex flex-row my-1 ml-5">
              <Text className="text-xl font-pregular w-[250px]">
              Vi skal lære af det, der går galt
              og undgå, at det sker igen.
              Som ekstern håndværker/leverandør skal du anmelde miljø-
              og arbejdsmiljøuheld hos VandCenter Syds kontaktperson.
              </Text>
              <SpeakableText
              children={"Lær af Det Der Sker. Vi skal lære af det, der går galt og undgå, at det sker igen. Som ekstern håndværker/leverandør skal du anmelde miljø- og arbejdsmiljøuheld hos VandCenter Syds kontaktperson."}
              styles="justify-start"
              />
            </View>
          </Collapsible>
        </View>

        <View className="justify-start rounded-xl border-4 border-secondary mb-5 mx-5">
          <TouchableOpacity onPress={toggleExpand4} className="flex flex-row bg-secondary items-center">
            <Text className="text-2xl font-psemibold p-1 w-[250px] text-white">Hjertestarter</Text>
            <View className="bg-white w-[50px] h-[70px] rounded-3xl justify-center items-center mb-1">
              <Image 
                source={require('../../../../assets/images/hjertestarter.png')}
                style={{ resizeMode: 'contain', width: 40, height: 50}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed4}>
            <View className="flex flex-row my-1 ml-5">
              <View className="text-xl font-pregular w-[250px]">
                <Text className="text-xl font-pregular">Find vores hjertestartere på:</Text>
                <Text className="text-xl font-pregular"><Text className="font-pbold">Vandværksvej 7: </Text>Under halvtag ved hovedindgangen.</Text>
                <Text className="text-xl font-pregular"><Text className="font-pbold">Skt. Jørgens Gade 213: </Text>Under halvtag ved indgang til laboratoriebygning (ved porten).</Text>
                <Text className="text-xl font-pregular"><Text className="font-pbold">Ejby Mølle renseanlæg: </Text>På bagsiden af den hvide mølle-bygning, ud mod stien langs Odense Å.</Text>
                <Text className="text-xl font-pregular"><Text className="font-pbold">Hjorslevvej 25: </Text>Udvendigt ved hovedindgangen.</Text>
              </View>
              <SpeakableText
              children={"Hjertestarter. Find vores hjertestartere på: " + "\n"+
              "Vandværksvej 7: Under halvtag ved hovedindgangen." + "\n"+
              "Skt. Jørgens Gade 213: Under halvtag ved indgang til laboratoriebygning (ved porten)." + "\n"+
              "Ejby Mølle renseanlæg: På bagsiden af den hvide mølle-bygning, ud mod stien langs Odense Å." + "\n"+
              "Hjorslevvej 25: Udvendigt ved hovedindgangen."}
              styles="justify-start"
              />
            </View>
          </Collapsible>
        </View>

        <View className="bg-white mb-10 justify-start items-center">
          <CustomButton 
            title="Test Dig selv"
            imgSource={require('../../../../assets/images/book.png')}
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "ulykke"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-5"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Ulykker