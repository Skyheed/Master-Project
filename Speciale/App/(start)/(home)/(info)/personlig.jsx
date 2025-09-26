import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../../components/CustomButton'
import HeaderTabs from '../../../../components/HeaderTabs'
import { router } from 'expo-router'
import Collapsible from 'react-native-collapsible'
import SpeakableText from '../../../../components/SpeakableText'
import Favourite from '../../../../components/Favourite'
import * as Speech from 'expo-speech';

const Personlig = () => {
  const quizindex = "personlig";

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
    title: "Arbejdsmiljø",
    path: "/personlig"
  }

  const key = "9";

  return (
    <SafeAreaView className="bg-white h-full">
      <View>
          <HeaderTabs
              backgroundColor="white"
              leftPress={() => {router.back(), Speech.stop()}}
          />
      </View>
      <ScrollView>
        <View className="flex-row bg-primary items-center justify-center">
          <Text className="text-3xl font-pbold mt-5 mb-5">Arbejdsmiljø</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>

        <View className="justify-start rounded-xl border-4 border-primary my-5 mx-5">
          <TouchableOpacity onPress={toggleExpand} className="flex flex-row bg-primary items-center">
            <Text className="text-2xl font-psemibold p-1 w-[250px]">Sikkert Arbejdsmiljø</Text>
            <View className="bg-white w-[50px] h-[70px] rounded-3xl justify-center items-center mb-1">
              <Image 
                source={require('../../../../assets/images/hjelm.png')}
                style={{ resizeMode: 'contain', width: 40, height: 50}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <View className="flex flex-row my-1 ml-5">
              <Text className="text-xl font-pregular w-[250px]">
              Risikovurdér arbejdsopgaven inden start.
              Brug korrekte værnemidler, arbejdsbeklædning og
              sikkerhedssko.
              Se mere om dette i andre dele af appen.
              </Text>
              <SpeakableText
              children={"Sikkert Arbejdsmiljø. Risikovurdér arbejdsopgaven inden start. Brug korrekte værnemidler, arbejdsbeklædning og sikkerhedssko. Se mere om dette i andre dele af appen."}
              styles="justify-start"
              />
            </View>
          </Collapsible>
        </View>

        <View className="justify-start rounded-xl border-4 border-primary mb-5 mx-5">
          <TouchableOpacity onPress={toggleExpand1} className="flex flex-row bg-primary items-center">
            <Text className="text-2xl font-psemibold p-1 w-[250px]">Sundhed ved Arbejde med Spildevand</Text>
            <View className="bg-white w-[50px] h-[70px] rounded-3xl justify-center items-center mb-1">
              <Image 
                source={require('../../../../assets/images/syringe.png')}
                style={{ resizeMode: 'contain', width: 40, height: 50}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed1}>
            <View className="flex flex-row mt-1 ml-5">
              <Text className="text-xl font-pregular w-[250px]">
              Spildevand er forbundet med stor smittefare. Du skal
              være vaccineret, hvis du arbejder med spildevand
              (lovkrav).
              </Text>
              <SpeakableText
              children={"Sundhed ved Arbejde med Spildevand. Spildevand er forbundet med stor smittefare. Du skal være vaccineret, hvis du arbejder med spildevand (lovkrav). Vær også opmærksom på Weils Syge. Vær opmærksom på retningslinjer for spisning og færden. Du skal have hygiejnekursus, hvis du skal arbejde alene på vores spildevandsanlæg. Du må ikke komme i kantinerne iført arbejdstøj. Det er muligt efter aftale at bruge VandCenter Syds omklædningsfaciliteter."}
              styles="justify-start"
              />
            </View>
            <Text className="text-xl font-pregular mx-5">Vær også opmærksom på Weils Syge.</Text>
            <Text className="text-xl font-pregular mx-5">Vær opmærksom på retningslinjer for spisning og færden.</Text>
            <Text className="text-xl font-pregular mx-5">Du skal have hygiejnekursus, hvis du skal arbejde alene på
            vores spildevandsanlæg.</Text>
            <Text className="text-xl font-pregular mx-5">Du må ikke komme i kantinerne iført arbejdstøj. Det er muligt
            efter aftale at bruge VandCenter Syds omklædningsfaciliteter.</Text>
          </Collapsible>
        </View>

        <View className="justify-start rounded-xl border-4 border-primary mb-5 mx-5">
          <TouchableOpacity onPress={toggleExpand2} className="flex flex-row bg-primary items-center">
            <Text className="text-2xl font-psemibold p-1 w-[250px]">Eksplosionsfarligt Område</Text>
            <View className="bg-white w-[50px] h-[70px] rounded-3xl justify-center items-center mb-1">
              <Image 
                source={require('../../../../assets/images/ex_sign.png')}
                style={{ resizeMode: 'contain', width: 40, height: 50}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed2}>
            <View className="flex flex-row my-1 ml-5">
              <Text className="text-xl font-pregular w-[250px]">
              Du skal instrueres af VandCenter Syds kontaktperson, før du må arbejde i områder mærket med ATEX.
              </Text>
              <SpeakableText
              children={"Eksplosionsfarligt Område. Du skal instrueres af VandCenter Syds kontaktperson, før du må arbejde i områder mærket med ATEX."}
              styles="justify-start"
              />
            </View>
          </Collapsible>
        </View>
        
        <View className="justify-start rounded-xl border-4 border-primary mb-5 mx-5">
          <TouchableOpacity onPress={toggleExpand3} className="flex flex-row bg-primary items-center">
            <Text className="text-2xl font-psemibold p-1 w-[250px]">Hygiejne og Drikkevand</Text>
            <View className="bg-white w-[50px] h-[70px] rounded-3xl justify-center items-center mb-1">
              <Image 
                source={require('../../../../assets/images/droplet.png')}
                style={{ resizeMode: 'contain', width: 40, height: 50}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed3}>
            <View className="flex flex-row my-1 ml-5">
              <Text className="text-xl font-pregular w-[250px]">
              Vi stiller meget høje hygiejnekrav, når du arbejder på
              vores vandforsyningsanlæg.
              Se hygiejnereglerne i folderen ”God hygiejne ved arbej-
              de med drikkevand”.
              Du SKAL have været på hygiejnekursus, hvis du skal arbejde
              alene på vores vandforsyningsanlæg.
              </Text>
              <SpeakableText
              children={"Hygiejne og Drikkevand. Vi stiller meget høje hygiejnekrav, når du arbejder på vores vandforsyningsanlæg. Se hygiejnereglerne i folderen ”God hygiejne ved arbejde med drikkevand”. Du SKAL have været på hygiejnekursus, hvis du skal arbejde alene på vores vandforsyningsanlæg."}
              styles="justify-start"
              />
            </View>
          </Collapsible>
        </View>

        <View className="justify-start rounded-xl border-4 border-primary mb-5 mx-5">
          <TouchableOpacity onPress={toggleExpand4} className="flex flex-row bg-primary items-center">
            <Text className="text-2xl font-psemibold p-1 w-[250px]">Pas på Miljøet</Text>
            <View className="bg-white w-[50px] h-[70px] rounded-3xl justify-center items-center mb-1">
              <Image 
                source={require('../../../../assets/images/leaf.png')}
                style={{ resizeMode: 'contain', width: 40, height: 50}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed4}>
            <View className="flex flex-row my-1 ml-5">
              <Text className="text-xl font-pregular w-[250px]">
              Undgå at spilde benzin, olie og kemikalier.
              Ved uheld skal det opsamles og bortskaffes.
              Anmeld uheld hos VandCenter Syds kontaktperson.
              Tænk hensyn til miljøet ind i planlægningen af dit arbejde.
              Spar på vand, brændstof og kemikalier.
              Ryd op, sortér og bortskaf affald efter endt arbejde.
              </Text>
              <SpeakableText
              children={"Pas på Miljøet. Undgå at spilde benzin, olie og kemikalier. Ved uheld skal det opsamles og bortskaffes. Anmeld uheld hos VandCenter Syds kontaktperson. Tænk hensyn til miljøet ind i planlægningen af dit arbejde. Spar på vand, brændstof og kemikalier. Ryd op, sorter og bortskaf affald efter endt arbejde."}
              styles="justify-start"
              />
            </View>
          </Collapsible>
        </View>

        <View className="mx-5 mb-10">
          <Text className="text-2xl font-psemibold mb-2">
            Gå videre til andre retningslinjer:
          </Text>
          <CustomButton 
            title="Alarm og Evakuering"
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            imgSource={require('../../../../assets/images/alarm.png')}
            handlePress={() => {router.push('/ulykker'), Speech.stop()}}
            containerStyles={"bg-secondary"}
            textStyles={"text-white"}
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Personlig