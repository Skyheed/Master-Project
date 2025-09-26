import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../../components/CustomButton'
import { Link, router } from 'expo-router'
import Header from '../../../../components/Header'
import Favourite from '../../../../components/Favourite'
import Collapsible from 'react-native-collapsible'
import SpeakableText from '../../../../components/SpeakableText'
import * as Speech from 'expo-speech';

const Kloak = () => {
  const quizindex = "kloak"

  const info = {
    title: "Brønde, kloakker og bygværker",
    path: "/kloak"
  }

  const key = "6";

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

  var spinDeg = '0deg'
  var spinDeg1 = '0deg'
  var spinDeg2 = '0deg'

  if(!collapsed){
    spinDeg = '0deg'
  } else{
    spinDeg = '180deg'
  }
  if(!collapsed1){
    spinDeg1 = '0deg'
  } else{
    spinDeg1 = '180deg'
  }
  if(!collapsed2){
    spinDeg2 = '0deg'
  } else{
    spinDeg2 = '180deg'
  }

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
        <View className="flex flex-row bg-primary justify-center items-center">
          <Text className="text-3xl font-pbold mt-5 mb-5 w-[270px]">Brønde, kloakker og bygværker</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>

        <View className="mx-5 mt-5 mb-5 border-2 rounded-xl">
          <TouchableOpacity onPress={toggleExpand1}>
            <View className="mx-1 flex flex-row">
              <Text className="text-3xl font-psemibold mr-4">Vagter og Vand</Text>
              <Image 
                className="ml-5"
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg1}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed1} className="mx-1">
            <View className="flex flex-row">
              <Text className="text-2xl font-psemibold mr-20">Hvad er vigtigt?</Text>
              <SpeakableText
              children={"Vagter og Vand." +"hvad er vigtigt?" +
              "At vi har vagt(er) klar til at hjælpe og tilkalde hjælp," +
              "hvis der sker en ulykke, mens der arbejdes i brønde, ledninger, trange rum etc." }/>
            </View>
            <Text className="text-xl font-pregular">
            At vi har vagt(er) klar til at hjælpe og tilkalde hjælp, hvis der sker en ulykke, mens der
            arbejdes i brønde, ledninger, trange rum etc.</Text>
            <View className="mb-5">
              <View className="flex flex-row mr-5 mt-3">
              <Text className="text-2xl font-psemibold w-[270]">Sikkerhedsregler</Text>
              <SpeakableText
              children={"Sikkerhedsregler."+ "vandforsyning. " +
                "Der skal være 1 vagt ved arbejde i vandbrønd. Vagter skal være instrueret i brugen af redningsudstyr/hejseværk. " +
                "H-sele skal benyttes. Ved længerevarende arbejde (mere end 1 time) skal 3-ben medbringes. "+
                "Spildvand. " +
                "Der skal være 2 vagter ved arbejde i brønde, ledninger og trange rum - se instruks 'Arbejde i store ledninger'. " +
                "skærpelse af krav på spildevandsopgaver. " +
                "Hvis man fra terræn ikke kan observere arbejdet, skal der være 1 ekstra vagt, det vil sige. To oppe og en nede. " +
                "Store komplicerede opgaver kan kræve ekstra vagter, for eksempel, hvor man kan blive ført med strømmen (vagt placeres nedstrøms). " +
                "lempelse af krav på spildevandsopgaver. " +
                "Kun 1 vagt ved følgende arbejde. " +
                "arbejde med slamsuger og spulevogne samt ved TV-inspektion og rutinemæssig inspektion. " +
                "betingelserne er beskrevet i Kloakbekendtgørelsen. " +
                "Vi har dispensation til at bruge 1 vagt ved arbejde i brønde under særlige forhold. "
              }
              />
              </View>
              <Text className="text-xl font-psemibold">Vandforsyning:</Text>
              <View className="flex-row">
                <Text className="text-xl font-pregular w-[200px]">
                Der skal være <Text className="font-pbold">1 vagt</Text> ved arbejde i vandbrønd. Vagter skal være instrueret i brugen af</Text>
                <View className="justify-center items-center ml-1">
                  <Image 
                    source={require('../../../../assets/images/water-well.png')}
                    style={{ resizeMode: 'stretch', width: 100, height: 100}}
                  />
                  {/* <Link href="https://www.flaticon.com/free-icons/water-well" 
                    className="text-xs font-pregular text-blue-400 underline">by Freepik</Link> */}
                </View>
              </View>
              <Text className="text-xl font-pregular">redningsudstyr/hejseværk.
              H-sele skal benyttes. Ved længerevarende arbejde (mere end 1 time) skal 3-ben medbringes.</Text>

              <Text className="text-xl font-psemibold mt-3">Spildevand:</Text>
              <View className="flex-row">
                <Text className="text-xl font-pregular w-[200px]">
                Der skal være <Text className="font-pbold">2 vagter</Text> ved arbejde i brønde, ledninger og trange rum - se
                </Text>
                <View className="justify-center items-center ml-1">
                  <Image 
                    source={require('../../../../assets/images/pollution.png')}
                    style={{ resizeMode: 'stretch', width: 100, height: 100}}
                  />
                  {/* <Link href="https://www.flaticon.com/free-icons/sewage" 
                    className="text-xs font-pregular text-blue-400 underline">by Freepik</Link> */}
                </View>
              </View>
              <Text className="text-xl font-pregular">
              instruks "Arbejde i store ledninger" fra 
              <Link href="https://www.vandcenter.dk/-/media/vandcenter/her-arbejder-vi/filer/sikkerhedshaandbog/arbejde_i_store_ledninger.pdf?la=da&hash=873A715BDB9735D52DF5844C23BF608393D4BDFB" 
              className="text-blue-500 underline"> Link</Link>.</Text>
              <Text className="text-xl font-psemibold mt-3">Skærpelse af krav på spildevandsopgaver:</Text>
              <Text className="text-xl font-pregular">Hvis man fra terræn ikke kan observere arbejdet, 
              skal der være <Text className="font-pbold">1 ekstra vagt</Text>, dvs. to oppe
              og en nede. Store komplicerede opgaver kan kræve ekstra
              vagter, fx hvor man kan blive ført med strømmen (vagt placeres nedstrøms). </Text>

              <Text className="text-xl font-psemibold mt-3">Lempelse af krav på spildevandsopgaver:</Text>
              <View className="flex-row">
                <Text className="text-xl font-pregular w-[200px]">
                Kun <Text className="font-pbold">1 vagt</Text> ved følgende arbejde: Arbejde med slamsuger og spulevogne samt
                </Text>
                <View className="justify-center items-center ml-1">
                  <Image 
                    source={require('../../../../assets/images/guard.png')}
                    style={{ resizeMode: 'stretch', width: 100, height: 100}}
                  />
                  {/* <Link href="https://www.flaticon.com/free-icons/security" 
                    className="text-xs font-pregular text-blue-400 underline">by Freepik</Link> */}
                </View>
              </View>
              <Text className="text-xl font-pregular"> 
                ved TV-inspektion og rutinemæssig inspektion. Betingelserne er beskrevet i Kloakbekendtgørelsen.</Text>
              <Text className="text-xl font-pregular mt-3">Vi har dispensation til at bruge 
              <Text className="font-pbold"> 1 vagt </Text> ved arbejde i brønde under særlige forhold.</Text>
            </View>
          </Collapsible>
        </View>

        <View>
          <Text className="text-2xl font-psemibold mx-5">Huskeregler for Vand</Text>
          <View className="bg-gray-300 min-h-[200px] mx-5 justify-center items-center">
            <Text className="text-xl font-pmedium">Video Placeholder</Text>
          </View>
        </View>

        <View className="mx-5 mb-5">
          <View className="flex flex-row mr-5">
            <Text className="text-2xl font-psemibold w-[280] mt-5">Huskeregler for vand:</Text>
            <SpeakableText 
              children={"Husketregler for vand..." +
                "vurdér hvor mange vagter, der skal benyttes ud fra ovenstående regler. " +
                "Fremskaf det nødvendige redningsudstyr. " +
                "En vagts opgave er at skabe sikkerhed, hjælpe tilskadekomne og nødstedte samt tilkalde yderligere hjælp om nødvendigt. " +
                "En vagt skal.. kunne betjene hejseværk og redningsudstyr. " +
                "være i kontakt med arbejdende kollegaer. " +
                "tilkalde hjælp, fx via mobiltelefon. " +
                "fokusere på opgaven. " +
                "rengør redningsudstyr efter brug."}
              />
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Vurdér hvor mange vagter, der skal benyttes ud fra ovenstående regler. Fremskaf det nødvendige redningsudstyr.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">En vagts opgave er at skabe sikkerhed, hjælpe tilskadekomne og nødstedte, samt tilkalde yderligere hjælp om nødvendigt.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">En vagt skal:</Text>
          </View>
          <View className="flex flex-row ml-10">
            <Text className="text-xl font-pregular">{'\u2218'} </Text>
            <Text className="text-xl font-pregular">Kunne betjene hejseværk og redningsudstyr.</Text>
          </View>
          <View className="flex flex-row ml-10">
            <Text className="text-xl font-pregular">{'\u2218'} </Text>
            <Text className="text-xl font-pregular">Være i kontakt med arbejdende kollegaer. </Text>
          </View>
          <View className="flex flex-row ml-10">
            <Text className="text-xl font-pregular">{'\u2218'} </Text>
            <Text className="text-xl font-pregular">Tilkalde hjælp, fx via mobiltelefon. </Text>
          </View>
          <View className="flex flex-row ml-10">
            <Text className="text-xl font-pregular">{'\u2218'} </Text>
            <Text className="text-xl font-pregular">Fokusere på opgaven.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Rengør redningsudstyr efter brug.</Text>
          </View>                        
        </View>


        <View className="mx-5 mb-5 border-2 rounded-xl">
          <TouchableOpacity onPress={toggleExpand2}>
            <View className="mx-1 flex flex-row">
              <Text className="text-3xl font-psemibold mr-3">Måling af Gasser</Text>
              <Image 
                className="ml-2"
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg2}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed2} className="mx-1">
            <View className="flex flex-row">
              <Text className="text-2xl font-psemibold mr-20">Hvad er vigtigt?</Text>
              <SpeakableText
              children={"Måling af Gasser. "+"hvad er vigtigt. " +
                "at vi ikke går ned i brønde, kloakker, bassiner eller bygværker," +
                "hvor der er risiko for eksplosionsfare, kvælning eller andre sundhedsfarer. " +
                "inden du går igang. " + "brønde, kloakker, bassiner og bygværker skal udluftes," +
                " og gasniveau skal måles inden adgang. Toxmetre kan måle ilt, svovlbrinte og eksplosive gasarter og nogle også kulmonooxid og cyanid. " +
                "Toxmetre udleveres fra lagrene til medarbejdere i VandCenter Syd-koncernen. "}/>
            </View>
            <Text className="text-xl font-pregular mb-5">At vi ikke går ned i brønde, kloakker, bassiner
            eller bygværker, hvor der er risiko for eksplosionsfare, kvælning eller andre sundhedsfarer.</Text>

            <View className="mb-5">
              <Text className="text-2xl font-psemibold">Inden du går igang</Text>
              <View className="flex-row">
                <Text className="text-xl font-pregular w-[200px]">
                Brønde, kloakker, bassiner og bygværker skal udluftes, og gasniveau skal</Text>
                <View className="justify-center items-center ml-1">
                  <Image 
                    source={require('../../../../assets/images/gas-detector.png')}
                    style={{ resizeMode: 'stretch', width: 100, height: 100}}
                  />
                  {/* <Link href="https://www.flaticon.com/free-icons/carbon-monoxide" 
                    className="text-xs font-pregular text-blue-400 underline">by Freepik</Link> */}
                </View>
              </View>
              <Text className="text-xl font-pregular">måles inden adgang. Toxmetre kan måle ilt, svovlbrinte og
              eksplosive gasarter – og nogle også kulmonooxid og cyanid.</Text>
              <Text className="text-xl font-pregular mt-3">Toxmetre udleveres fra lagrene til medarbejdere i VandCenter Syd-koncernen.</Text>
            </View>
          </Collapsible>
        </View>

        <View>
          <Text className="text-2xl font-psemibold mx-5">Huskeregler for Gas</Text>
          <View className="bg-gray-300 min-h-[200px] mx-5 justify-center items-center">
            <Text className="text-xl font-pmedium">Video Placeholder</Text>
          </View>
        </View>

        <View className="mx-5 mb-5">
          <View className="flex flex-row mr-5">
          <Text className="text-2xl font-psemibold w-[280] mt-5">Huskeregler for gas:</Text>
          <SpeakableText 
            children={"Husketregler for gas..." +
          "tjek at toxmeteret er funktionsdygtigt. " +
          "vent 30 sekunder, før du kigger ned. " +
          "mål gasniveau, inden arbejdet påbegyndes. " +
          "ved alarm fra toxmeteret skal faren fjernes inden/under arbejdets udførelse. " +
          "alternativt kan du bruge åndedrætsværn. " +
          "hvis gasniveauet er ok, clipses toxmeteret på tøjet, og arbejdet kan begyndes. " +
          "sørg for, at udstyret er i orden, rengjort og opladet til næste opgave."}/>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Tjek at toxmeteret er funktionsdygtigt.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Vent 30 sekunder, før du kigger ned.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Mål gasniveau, inden arbejdet påbegyndes. </Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Ved alarm fra toxmeteret skal faren fjernes inden/under arbejdets udførelse. Alternativt kan du bruge åndedrætsværn. </Text>
          </View>
          <View className="flex flex-row ">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Hvis gasniveauet er ok, clipses toxmeteret på tøjet, og arbejdet kan begyndes.</Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-xl font-pregular">{'\u2022'} </Text>
            <Text className="text-xl font-pregular">Sørg for, at udstyret er i orden, rengjort og opladet til næste opgave.</Text>
          </View>                              
        </View>

        <View className="mx-5 mb-5 mt-5">
          <View className="flex flex-row mr-5">
          <Text className="text-2xl font-psemibold w-[280]">Særligt for spildevand</Text>
          <SpeakableText

          children={"Særligt for spildevand. "+"Slam kan frigive gasser, når det påvirkes mekanisk ved spuling. " +
            "Ved arbejde i bassiner og tanke med slam og grus, skal du kende instruks" +
            "”Arbejde i bassiner og tanke med slam og grus”. "+
            "Cyanidgas. " +
            "I Odense findes områder i kloakken med risiko for cyanidgas. Her er brøndene markeret med et skilt ”Fare cyanid”. " +
            "I GIS er der gul markering ved ledningerne i de berørte områder. " +
            "Ved arbejde i område med risiko for cyanidgas skal du kende instruksen " +
            "”Arbejde i ledninger, brønde og lignende, hvor der er risiko for cyaniddampe i luften”. "
          }
          />
          </View>
          <Text className="text-xl font-pregular">Slam kan frigive gasser, når det påvirkes mekanisk ved
          spuling. Ved arbejde i bassiner og tanke med slam og grus, skal du kende instruks
          ”Arbejde i bassiner og tanke med slam og grus”: <Link href="https://www.vandcenter.dk/-/media/vandcenter/her-arbejder-vi/filer/sikkerhedshaandbog/arbejde_i_bassiner_og_tanke_med_slam_og_grus.pdf?la=da&hash=75AF3FF493586B7AC2A9D82E394E5AEB7B009019" 
          className="text-blue-500 underline">Link</Link></Text>
        </View>

        <View className="border-2 border-blue-600 rounded-xl mx-5 mb-5">
          <TouchableOpacity onPress={toggleExpand} className="mt-1">
            <View className="mx-1 flex flex-row">
              <Text className="text-xl font-psemibold mr-36">Cyanidgas</Text>
              <Image 
                className="ml-5"
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <Text className="text-xl font-pregular mx-1">I Odense findes områder i kloakken
            med risiko for cyanidgas. Her er brøndene markeret med et skilt ”Fare
            cyanid”. I GIS er der gul markering ved ledningerne i de berørte områder.</Text>
          </Collapsible>
        </View>

        <View className="mx-5 mb-5">
          <Text className="text-xl font-pregular">Ved arbejde i område med risiko for cyanidgas skal du
          kende instruksen ”Arbejde i ledninger, brønde og lignende, hvor der er risiko for
          cyaniddampe i luften”: <Link href="http://www.vandcenter.dk/-/media/vandcenter/publikationer/arbejde_cyaniddampe.pdf?la=da&hash=BF8197EF167E95BDD95403142C96EE5548D03BC6" 
          className="text-blue-500 underline">Link</Link></Text>
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
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "kloak"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-10"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Kloak