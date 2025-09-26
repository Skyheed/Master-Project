import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../../components/CustomButton'
import { Link, router } from 'expo-router'
import Header from '../../../../components/Header'
import Collapsible from 'react-native-collapsible'
import Favourite from '../../../../components/Favourite'
import SpeakableText from '../../../../components/SpeakableText'
import * as Speech from 'expo-speech';

const Sikkerhedsudstyr = () => {
  //const quizindex = "sikkerhedsudstyr";
  const quizindex = "værnemidler";

  const [collapsed, setCollapsed] = useState(true);
  const [collapsed1, setCollapsed1] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);
  const [collapsed4, setCollapsed4] = useState(true);
  const [collapsed5, setCollapsed5] = useState(true);
  const [collapsed6, setCollapsed6] = useState(true);
    
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
  const toggleExpand5 = () => {
    setCollapsed5(!collapsed5);
  }
  const toggleExpand6 = () => {
    setCollapsed6(!collapsed6);
  }

  var spinDeg = '0deg'
  var spinDeg1 = '0deg'
  var spinDeg2 = '0deg'
  var spinDeg3 = '0deg'
  var spinDeg4 = '0deg'
  var spinDeg5 = '0deg'
  var spinDeg6 = '0deg'

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
  if(!collapsed3){
    spinDeg3 = '0deg'
  } else{
    spinDeg3 = '180deg'
  }
  if(!collapsed4){
    spinDeg4 = '0deg'
  } else{
    spinDeg4 = '180deg'
  }
  if(!collapsed5){
    spinDeg5 = '0deg'
  } else{
    spinDeg5 = '180deg'
  }
  if(!collapsed6){
    spinDeg6 = '0deg'
  } else{
    spinDeg6 = '180deg'
  }

  const info = {
    title: "Værnemidler",
    path: "/værnemidler"
  }

  const key = "11";

  // <Text className="text-xl font-pregular">{'\u2218'} </Text>

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
          <Text className="text-3xl font-pbold mt-5 mb-5">Værnemidler</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>

        <View>
          <View className="flex flex-row">
            <Text className="text-2xl font-psemibold mt-5 mx-5 w-[270px]">Hvad indebærer værnemidler?</Text>
            <SpeakableText
            styles={"mb-4"}
            children={"Hvad indebærer værnemidler. Værnemidler er en samling af diverse beklædning ment til at beskytte dig." +
              "Det er vigtigt at have de rette tøj på samt benytte de rigtige værnemidler, hvor det er nødvendigt." +
              "Herunder er info om arbejdstøj, ansigts- og øjenværn, hjelm, åndedrætsværn, sikkerhedsfodtøj, handsker og høreværn."
            }/>
          </View>
          <Text className="text-xl font-pregular mx-5 mb-5">Værnemidler er en samling af diverse beklædning ment til
            at beskytte dig. Det er vigtigt at have de rette tøj på samt benytte de rigtige værnemidler, hvor det er nødvendigt. 
            Herunder er info om arbejdstøj, ansigts- og øjenværn, hjelm, åndedrætsværn, sikkerhedsfodtøj, handsker og høreværn.
          </Text>
        </View>
        
        <View className="mx-5 mb-5">
        <Text className="text-2xl font-psemibold">Hvordan bruges værnemidler?</Text>

          <View className="bg-gray-300 min-h-[200px] justify-center items-center">
            <Text className="text-xl font-pmedium">Video Placeholder</Text>
          </View>
        </View>

        <View className="mx-5 mb-5">
          <Text className="text-2xl font-psemibold">De Forskellige værnemidler</Text>
        </View>

        {/* Arbejdstøj */}
        <View className="border-2 border-primary rounded-xl mx-4 mb-5">
          <TouchableOpacity onPress={toggleExpand}>
            <View className="mx-1 flex flex-row">
              <Text className="text-2xl font-psemibold w-[280px]">Arbejdstøj</Text>
              <Image
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg}], resizeMode: 'stretch', width: 30, height: 30}}
              />   
            </View>
            <Text className="text-xl mx-1 font-pregular w-[280]">Hvorfor er vores tøj vigtigt?</Text>          
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <View className="mx-1">
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular w-[260px]">
                Vi skal beskytte os mod
                </Text>
                <View className="mx-1 flex flex-row">
                  <SpeakableText
                  children={"Hvorfor er vores tøj vigtigt. " +
                  "Vi skal beskytte os mod bakteriologisk, kemisk og mekanisk påvirkning ved at bruge det korrekte arbejdstøj. "+
                  "Vi bliver synlige i trafikken med arbejdstøj i klasse 3. Arbejdes der inden for afspærringer med hastighedsnedsættelse under 60 km/t, kan klasse 2 godkendes. " +
                  "medarbejdere i VandCenter Syd-koncernen er dækket af en beklædningsordning, som er beskrevet på intranettet under ”Arbejdsmiljø og Sundhed”. " +
                  "vær ren og pæn når du skal møde kunderne, du er vores ansigt udadtil. "}/>
                </View>
              </View>
              <Text className="text-xl font-pregular m-[10px] mt-[-10px]">bakteriologisk, kemisk og mekanisk påvirkning ved at bruge
              det korrekte arbejdstøj. </Text>
              
              <View className="flex flex-row mt-[-10px]">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                  <Text className="text-xl font-pregular w-[300px]">
                  Vi bliver synlige i trafikken med arbejdstøj i
                  klasse 3. Arbejdes der inden for afspærringer med hastighedsnedsættelse under 60
                  km/t, kan klasse 2 godkendes.</Text>
                </View>
            </View>

            <View className="mx-1">
              <View className="flex flex-row">
                <Text className="text-xl font-pregular w-[190px]">Medarbejdere i VandCenter Syd-koncernen
                er dækket af en bekl-ædningsordning,</Text>
                <View className="items-center">
                  <Image 
                    source={require('../../../../assets/images/protective-wear.png')}
                    style={{ resizeMode: 'stretch', width: 120, height: 120}}
                  />
                  {/* <Link href="https://www.flaticon.com/free-icons/uniform" 
                  className="text-xs font-pregular text-blue-400 underline ml-3">by Good Ware</Link> */}
                </View>
              </View>
              <Text className="text-xl font-pregular">som er beskrevet på intranettet under ”Arbejdsmiljø og Sundhed”</Text>
              <Text className="text-xl font-pregular">Vær ren og pæn når du skal møde kunderne. Du er vores ansigt udadtil.</Text>
            </View>

            <View className="mx-1 mt-5">
              <View className="flex flex-row ">
                <Text className="text-2xl font-psemibold w-[275]">Huskeregler</Text>
                <SpeakableText
                children={"Huskeregler. Vælg det rette arbejdstøj til arbejdsopgaven. " +
                  "Brug evt. særligt arbejdstøj ved spildevandsopgaver, fx kedeldragt, syrebestandig dragt, regntøj og vinterbeklædning." +
                  "Skift arbejdstøjet efter behov. " + 
                  "Arbejdstøj og fodtøj, der har været i kontakt med spildevand/slam, må ikke tages med hjem."}/>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Vælg det rette arbejdstøj til arbejdsopgaven.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Brug evt. særligt arbejdstøj ved spildevandsopgaver, 
                  fx kedeldragt, syrebestandig dragt, regntøj og vinterbeklædning.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Skift arbejdstøjet efter behov. </Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Arbejdstøj og fodtøj, der har været i kontakt med 
                  spildevand/slam, må ikke tages med hjem. </Text>
              </View>
            </View>
          </Collapsible>
        </View>

        {/* Ansigts- og Øjenværn */}
        <View className="border-2 border-primary rounded-xl mx-4 mb-5">
          <TouchableOpacity onPress={toggleExpand1}>
            <View className="mx-1 flex flex-row">
              <Text className="text-2xl font-psemibold w-[280px]">Ansigts- og Øjenværn</Text>
              <Image
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg1}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
            <Text className="text-xl mx-1 font-pregular">Hvorfor er det vigtigt?</Text>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed1}>
            <View className="mx-1">
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular w-[260px]">
                Vi skal beskytte øjne,
                </Text> 
                <SpeakableText
                children={"Ansigts- og Øjenværn." +
                "Hvorfor er det vigtigt. " +
                "Vi skal beskytte øjne, ansigt og mund, hvor der er risiko for skadelige mekaniske og " +
                "kemiske påvirkninger som fx støv, spåner, splinter eller sprøjt. " + 
                "Smitterisikoen er stor gennem øjne, ansigt og mund. Specielt ved spildevandsopgaver er risikoen for infektioner store. " +
                "Ansigts- og øjenværn udleveres fra lagrene til medarbejdere i VandCenter Syd-koncernen." + 
                "Ved opgaver, hvor du bruger et åndedrætsværn, kan det samtidig virke som ansigtsværn - se åndedrætsværn herunder. "}
                />
              </View>
              <Text className="text-xl font-pregular m-[10px] mt-[-10px]">ansigt og mund, hvor der er risiko for skadelige mekaniske og
              kemiske påvirkninger som fx støv, spåner, splinter eller sprøjt.</Text>
              <View className="flex flex-row mt-[-10px]">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">
                Smitterisikoen er stor gennem øjne, ansigt og mund. Specielt ved spildevandsopgaver
                er risikoen for infektioner store.</Text>
              </View>
            </View>
            <View className="mx-1">
              <View className="flex flex-row">
                <Text className="text-xl font-pregular w-[200px]">Ansigts- og øjenværn udleveres fra lagrene til
                medarbejdere i VandCenter Syd-koncernen.</Text>
                <View className="justify-center items-start">
                  <Image 
                    source={require('../../../../assets/images/face-protection.png')}
                    style={{ resizeMode: 'stretch', width: 120, height: 120}}
                  />
                  {/* <Link href="https://www.flaticon.com/free-icons/face-shield" 
                  className="text-xs font-pregular text-blue-400 underline ml-2">by Andy Horvath</Link> */}
                </View>
              </View>
              <Text className="text-xl font-pregular">Ved opgaver, hvor du bruger et åndedrætsværn, kan det samtidig virke som
              ansigtsværn - se åndedrætsværn herunder.</Text>
            </View>
            
            <View className="mx-1 mt-5">
              <View className="flex flex-row ">
                <Text className="text-2xl font-psemibold w-[275]">Huskeregler</Text>
                <SpeakableText
                children={"Huskeregler. Vælg det ansigts- og øjenværn, der passer til opgaven, fx. " +
                  "slibning, boring, svejsning, og arbejde med hammer og mejsel, spuling og højtryksrensning. " +
                  "Tjek løbende, at udstyret er rent og intakt. Rengør udstyret efter brug. " +
                  "Hvis udstyr kasseres, skal du huske at skaffe nyt til næste opgave. Brug øjenskylleflaske, hvis du får noget i øjet. "}/>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Vælg det ansigts- og øjenværn, der passer til opgaven, fx:</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular">slibning, boring, svejsning og arbejde med hammer og mejsel.</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular">spuling og højtryksrensning.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Tjek løbende, at udstyret er rent og intakt.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Rengør udstyret efter brug.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Hvis udstyr kasseres, skal du huske at skaffe nyt til næste opgave.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Brug øjenskylleflaske, hvis du får noget i øjet.</Text>
              </View>
            </View>
          </Collapsible>
        </View>

        {/* Hjelm */}
        <View className="border-2 border-primary rounded-xl mx-4 mb-5">
          <TouchableOpacity onPress={toggleExpand6}>
            <View className="mx-1 flex flex-row">
              <Text className="text-2xl font-psemibold w-[280px]">Hjelm</Text>
              <Image
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg1}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
            <Text className="text-xl mx-1 font-pregular">Hvorfor er det vigtigt?</Text>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed6}>
            <View className="mx-1 flex flex-row">
              <Text className="text-xl font-pregular w-[275px]">Vi skal beskytte os mod
              hovedlæsioner i tilfælde, hvor der er risiko for at slå eller få genstande i hovedet.</Text> 
              <SpeakableText
              styles={"mb-24"}
              children={"Hjelm. Hvorfor er det vigtigt. Vi skal beskytte os mod hovedlæsioner i tilfælde, hvor der er risiko for at slå eller få genstande i hovedet. " +
                "Hjelmens holdbarhed er max 5 år. Udsættes hjelmen ofte for sollys, er holdbarheden max 3 år. " + 
                "Det fremgår af hjelmen med et mærke, hvornår den er fra."
              }/>
            </View>
            <View className="mx-1 flex flex-row">
              <Text className="text-xl font-pregular w-[200px]">Hjelmens holdbarhed er <Text className="font-pbold">max 5 år. </Text>
              Udsættes hjelmen ofte for sollys, er </Text>
              <View className="justify-center items-start">
                <Image 
                  source={require('../../../../assets/images/helmet.png')}
                  style={{ resizeMode: 'stretch', width: 120, height: 120}}
                />
                {/* <Link href="https://www.flaticon.com/free-icons/safety" 
                className="text-xs font-pregular text-blue-400 underline ml-6">by Freepik</Link> */}
              </View>
            </View>
            <Text className="mx-1 text-xl font-pregular">holdbarheden <Text className="font-pbold">max 3 år.</Text> Det fremgår af hjelmen
            med et mærke, hvornår den er fra.</Text>

            <View className="mx-1 mt-5">
              <View className="flex flex-row ">
                <Text className="text-2xl font-psemibold w-[275]">Huskeregler</Text>
                <SpeakableText
                children={"Huskeregler. Kontroller om hjelmen er intakt. Du skal altid bære hjelm. " +
                  "Ved arbejde i områder mærket med ’hjelm’. Ved arbejde i tanke, brønde og pumpestationer. Ved stilladsarbejde. " +
                  "Ved arbejde i udgravninger. Ved kran- og gravemaskine arbejde. Ved læsning med truck – dog undtaget, når du sidder bag rattet. " + 
                  "Hjelmen kasseres, hvis den har revner eller andre skader. Husk at få en ny hjelm udleveret. "}/>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Kontroller om hjelmen er intakt.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Du skal altid bære hjelm:</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular">Ved arbejde i områder mærket med ’hjelm’.</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular w-[275px]">Ved arbejde i tanke, brønde og pumpestationer.</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular">Ved stilladsarbejde.</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular">Ved arbejde i udgravninger.</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular">Ved kran- og gravemaskine arbejde.</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular">Ved læsning med truck – dog undtaget, når du sidder bag rattet.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular w-[300px]">Hjelmen kasseres, hvis den har revner eller andre skader. Husk at få en ny hjelm udleveret.</Text>
              </View>
            </View>
          </Collapsible>
        </View>

        {/* Åndedrætsværn */}
        <View className="border-2 border-primary rounded-xl mx-4 mb-5">
          <TouchableOpacity onPress={toggleExpand2}>
            <View className="mx-1 flex flex-row">
              <Text className="text-2xl font-psemibold w-[280px]">Åndedrætsværn</Text>
              <Image
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg2}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
            <Text className="text-xl mx-1 font-pregular">Hvorfor er det vigtigt?</Text>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed2}>
            <View className="mx-1">
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular w-[260px]">
                Vi skal beskytte os mod
                </Text>
              <SpeakableText
                children={"Åndedrætsværn. Hvorfor er det vigtigt. " +
                "Vi skal beskytte os mod indånding af sundhedsskadelig forurening som aerosoler, bakterier fra spildevandet eller giftige gasser. " +
                "Vi skal sikre os, at vi ikke udsættes for iltmangel. " +
                "Åndredrætsværn udleveres fra lagrene til medarbejdere i VandCenter Syd-koncernen. " +
                "Personlige åndedrætsværn købes specielt. " }
                />
              </View>
              <Text className="text-xl font-pregular m-[10px] mt-[-10px]">indånding af sundhedsskadelig forurening som aerosoler,
              bakterier fra spildevandet eller giftige gasser.</Text>
              <View className="flex flex-row mt-[-10px]">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">
                Vi skal sikre os, at vi ikke udsættes for iltmangel. </Text>
              </View>
            </View>

            <View className="mx-1">
              <View className="flex flex-row">
                <Text className="text-xl font-pregular w-[190px]">Åndedrætsværn udleveres fra lagrene til
                medarbejdere i VandCenter</Text>
                <View className="items-start">
                  <Image 
                    source={require('../../../../assets/images/gas-mask.png')}
                    style={{ resizeMode: 'stretch', width: 120, height: 120}}
                  />
                  {/* <Link href="https://www.flaticon.com/free-icons/protective-equipment" 
                  className="text-xs font-pregular text-blue-400 underline ml-2">by POD Gladiator</Link> */}
                </View>
              </View>
              <Text className="text-xl font-pregular">Syd-koncernen. Personlige åndedrætsværn købes specielt.</Text>
            </View>

            <View className="mx-1 mt-5">
              <View className="flex flex-row ">
                <Text className="text-2xl font-psemibold w-[275]">Huskeregler</Text>
                <SpeakableText
                children={"Huskeregler. Kontroller om du har det rette åndedrætsværn til opgaven. Du kan bruge forskellige typer af åndedrætsværn. " +
                  "Åndedrætsværn med luft pumper og filtre. Tætsluttende helmasker med special filtre for specifikke giftstoffer. " +
                  "Friskluftforsynende helmasker fra trykflaske skråstreg, specielt kompressoranlæg. Denne form for åndedrætsværn kræver uddannelse samt kendskab til instruksen ”Arbejde med åndedrætsværn sammen med trykflaske”. " +
                  "Tjek at åndedrætsværnet er i orden. Vær opmærksom på, at du måske ikke kan arbejde så lang tid, når du har åndedrætsværn på, da det er anstrengende at trække vejret gennem en maske." +
                  "Ved pauser i arbejdet opbevares åndedrætsværnet tørt og rent. Ved friskluftforsyning fra flasker skal der være luft nok til at udføre hele opgaven. " +
                  "Brugeren rengør åndedrætsværnet efter brug – følg leverandørens brugsanvisning. "}/>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Kontroller om du har det rette åndedrætsværn til opgaven. Du kan bruge forskellige typer af åndedrætsværn:</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular">Åndedrætsværn med luft pumper og filtre.</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular">Tætsluttende helmasker med special filtre for specifikke giftstoffer.</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular w-[275px]">Friskluftforsynende helmasker fra trykflaske/ specielt kompressoranlæg. 
                Denne form for åndedrætsværn kræver uddannelse samt kendskab til instruksen ”Arbejde med åndedrætsværn sammen med trykflaske”.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Tjek at åndedrætsværnet er i orden. </Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular w-[275px]">Vær opmærksom på, at du måske ikke kan arbejde så lang tid, når du har åndedrætsværn på, da det er anstrengende at trække vejret gennem en maske.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular w-[275px]">Ved pauser i arbejdet opbevares åndedrætsværnet tørt og rent.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular w-[275px]">Ved friskluftforsyning fra flasker skal der være luft nok til at udføre hele opgaven.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular w-[275px]">Brugeren rengør åndedrætsværnet efter brug – følg leverandørens brugsanvisning.</Text>
              </View>
            </View>
          </Collapsible>
        </View>

        {/* Sikkerhedsfodtøj */}
        <View className="border-2 border-primary rounded-xl mx-4 mb-5">
          <TouchableOpacity onPress={toggleExpand3}>
            <View className="mx-1 flex flex-row">
              <Text className="text-2xl font-psemibold w-[280px]">Sikkerhedsfodtøj</Text>
              <Image
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg3}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
            <Text className="text-xl mx-1 font-pregular">Hvad hjælper fodtøj med?</Text>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed3}>
            <View className="mx-1">
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular w-[260px]">
                At vi beskytter os </Text>
                <SpeakableText
                children={ "Sikkerhedsfodtøj. Hvad hjælper fodtøj med. " +
                  "At vi beskytter os mod slag, faldende genstande og stikskader. " +
                  "At vi beskytter os mod kemikalier og smittefare. " +
                  "At vi undgår skrid- og faldulykker. " +
                  "I felten skal der altid anvendes sikkerhedsfodtøj. Det købes til den enkelte medarbejder alt efter behov."}
                />
              </View>
              <Text className="text-xl font-pregular m-[10px] mt-[-10px] w-[260px]">mod slag, faldende genstande og stikskader.</Text>
              <View className="flex flex-row mt-[-10px]">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">
                At vi beskytter os mod kemikalier og smittefare.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">
                At vi undgår skrid- og faldulykker.</Text>
              </View>
            </View>

            <View className="mx-1">
              <View className="flex flex-row">
                <Text className="text-xl font-pregular w-[200px]">I felten skal der altid anvendes sikkerhedsfodtøj.
                Det købes til den enkelte</Text>
                <View className="items-start">
                  <Image 
                    source={require('../../../../assets/images/boots.png')}
                    style={{ resizeMode: 'stretch', width: 120, height: 120}}
                  />
                  {/* <Link href="https://www.flaticon.com/free-icons/boots" 
                  className="text-xs font-pregular text-blue-400 underline ml-2">by Andy Horvath</Link> */}
                </View>
              </View>
              <Text className="text-xl font-pregular">medarbejder alt efter behov.</Text>
            </View>

            <View className="mx-1 mt-5">
              <View className="flex flex-row ">
                <Text className="text-2xl font-psemibold w-[275]">Huskeregler</Text>
                <SpeakableText
                children={"Huskeregler. Brug det rette sikkerhedsfodtøj til opgavetypen. Der er flere typer af sikkerhedsfodtøj. " +
                  "Sko, træsko, støvler, gummistøvler og waders med mere. Hvis sikkerhedsfodtøjet er beskadiget skråstreg, slidt op, så bed om nyt. " +
                  "Rengør og tør sikkerhedsfodtøjet efter brug. "}/>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Brug det rette sikkerhedsfodtøj til opgavetypen.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Der er flere typer af sikkerhedsfodtøj:</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular">Sko, træsko, støvler, gummistøvler og waders m.m.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular w-[275px]">Hvis sikkerhedsfodtøjet er beskadiget/slidt op, så bed om nyt.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Rengør og tør sikkerhedsfodtøjet efter brug.</Text>
              </View>
            </View>
          </Collapsible>
        </View>

        {/* Handsker */}
        <View className="border-2 border-primary rounded-xl mx-4 mb-5">
          <TouchableOpacity onPress={toggleExpand4}>
            <View className="mx-1 flex flex-row">
              <Text className="text-2xl font-psemibold w-[280px]">Handsker</Text>
              <Image
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg4}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
            <Text className="text-xl mx-1 font-pregular">Handsker er vigtige at benytte for at beskytte dig mod:</Text>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed4}>
            <View className="mx-1">
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular w-[260px]">
                slid, vibrationer,</Text>
                <SpeakableText
                children={ "Handsker. " +
                "Handsker er vigtige at benytte for at beskytte dig mod. " +
                "slid, vibrationer, temperatur, stik og slag. " +
                "kemikalier og smittefare. " +
                "handsker udleveres fra lagrene til medarbejdere i VandCenter Syd-koncernen. " +
                "Handsker er som et ekstra hudlag, der beskytter dig mod skader under arbejdet."}/>
              </View>
              <Text className="text-xl font-pregular m-[10px] mt-[-10px]">temperatur, stik og slag</Text>
              <View className="flex flex-row mt-[-10px]">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">
                kemikalier og smittefare</Text>
              </View>
            </View>

            <View className="mx-1">
              <View className="flex flex-row">
                <Text className="text-xl font-pregular w-[200px]">Handsker udleveres fra lagrene til medarbejdere i VandCenter Syd-koncernen.</Text>
                <View className="items-center">
                  <Image 
                    source={require('../../../../assets/images/rubber-gloves.png')}
                    style={{ resizeMode: 'stretch', width: 120, height: 120}}
                  />
                  {/* <Link href="https://www.flaticon.com/free-icons/rubber-gloves" 
                  className="text-xs font-pregular text-blue-400 underline ml-2">by LAFS</Link> */}
                </View>
              </View>
              <Text className="text-xl font-pregular">Handsker er som et ekstra hudlag, der beskytter dig mod skader under arbejdet.</Text>
            </View>

            <View className="mx-1 mt-5">
              <View className="flex flex-row ">
                <Text className="text-2xl font-psemibold w-[275]">Huskeregler</Text>
                <SpeakableText
                children={"Huskeregler. Brug den rette handske til opgaven. Der findes mange typer af handsker. Engangshandsker. " +
                  "Genbrugelige, stiksikre, varmebeskyttende og kemikalieresistente handsker. " +
                  "Medbring altid ekstra handsker. Kassér slidte handsker – og handsker, der har været udsat for kemisk påvirkning. " +
                  "Handsker der kan genbruges, skal renses og tørres efter brug."}/>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Brug den rette handske til opgaven. Der findes mange typer af handsker:</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular">Engangshandsker</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular">Genbrugelige, stiksikre, varmebeskyttende og kemikalieresistente handsker.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular w-[275px]">Medbring altid ekstra handsker.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Kassér slidte handsker – og handsker, der har været udsat for kemisk påvirkning.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Handsker der kan genbruges, skal renses og tørres efter brug.</Text>
              </View>
            </View>
          </Collapsible>
        </View>

        {/* Høreværn */}
        <View className="border-2 border-primary rounded-xl mx-4 mb-5">
          <TouchableOpacity onPress={toggleExpand5}>
            <View className="mx-1 flex flex-row">
              <Text className="text-2xl font-psemibold w-[280px]">Høreværn</Text>
              <Image
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg5}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
            <Text className="text-xl mx-1 font-pregular">Det er vigtigt at benytte</Text>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed5}>
            <View className="mx-1">
            <View className="flex flex-row">
              <Text className="text-xl font-pregular w-[270]">høreværn da de beskytter
             </Text>
            <SpeakableText
            children={"Høreværn. " +
            "Det er vigtigt at benytte høreværn da de beskytter din hørelse mod støj og følgeskader heraf, fx tinnitus eller permanent nedsættelse af hørelsen. " +
            "Der skal anvendes høreværn ved skiltning, og hvis støjbelastningen er over 80 dB(A), svarende til støj fra plæneklipper eller støj fra trafikeret gade. " +
            "Brug høreværn, hvis du i øvrigt føler dig generet af støj. " +
            "Høreværn udleveres fra lagrene til medarbejdere i VandCenter Syd-koncernen."}           
            />
            </View>
            <Text className="text-xl font-pregular mt-[-10px]">din hørelse mod støj og følgeskader heraf, fx tinnitus eller permanent nedsættelse af hørelsen.</Text>
            </View>
            <View className="mx-1">
              <View className="flex flex-row">
                <Text className="text-xl font-pregular w-[200px]">Der skal anvendes høreværn ved skiltning,
                og hvis støjbelastningen er over 80 dB(A),</Text>
                <View className="items-center">
                  <Image 
                    source={require('../../../../assets/images/ear-protection.png')}
                    style={{ resizeMode: 'stretch', width: 120, height: 120}}
                  />
                  {/* <Link href="https://www.flaticon.com/free-icons/ear-protection" 
                  className="text-xs font-pregular text-blue-400 underline ml-2">by puppie</Link> */}
                </View>
              </View>
              <Text className="text-xl font-pregular">svarende til støj fra plæneklipper eller støj
              fra trafikeret gade. Brug høreværn, hvis du i øvrigt føler dig generet af støj.</Text>
              <Text className="text-xl font-pregular">Høreværn udleveres fra lagrene til medarbejdere i VandCenter Syd-koncernen.</Text>
            </View>

            <View className="mx-1 mt-5">
              <View className="flex flex-row ">
                <Text className="text-2xl font-psemibold w-[275]">Huskeregler</Text>
                <SpeakableText
                children={"Huskeregler. Vurdér om høreværn er påkrævet. " +
                  "Brug det rette høreværn under støjpåvirkningen. Bemærk at ørekopper giver den bedste beskyttelse. Der findes flere typer af høreværn, fx. " +
                  "ørepropper eller ørekopper. Undersøg evt. om støjniveauet kan sættes ned. Kassér beskadiget høreværn. " +
                  "Rengør høreværnet efter brug og læg det på plads. "}/>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Vurdér om høreværn er påkrævet. </Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Brug det rette høreværn under støjpåvirkningen. Bemærk at ørekopper giver den bedste beskyttelse. Der findes flere typer af høreværn, fx:</Text>
              </View>
              <View className="flex flex-row ml-10">
                <Text className="text-xl font-pregular">{'\u2218'} </Text>
                <Text className="text-xl font-pregular w-[260px]">ørepropper eller ørekopper.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Undersøg evt. om støjniveauet kan sættes ned.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Kassér beskadiget høreværn.</Text>
              </View>
              <View className="flex flex-row">
                <Text className="text-xl font-pregular">{'\u2022'} </Text>
                <Text className="text-xl font-pregular">Rengør høreværnet efter brug og læg det på plads.</Text>
              </View>
            </View>
          </Collapsible>
        </View>

        <View className="justify-center items-center mt-5 border-red-600 border-4 mx-20">
          <Text className="text-2xl font-psemibold">Er du i tvivl?</Text>
          <Text className="text-2xl font-psemibold">Så spørg din</Text>
          <Text className="text-2xl font-psemibold">ARBEJDSLEDER</Text>
        </View>

        <View className="bg-white mb-10 justify-start items-center">
          <CustomButton 
            title="Test Dig selv"
            imgSource={require('../../../../assets/images/book.png')}
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "værnemidler"),Speech.stop())}
            containerStyles={"min-w-[200px] mt-10"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Sikkerhedsudstyr