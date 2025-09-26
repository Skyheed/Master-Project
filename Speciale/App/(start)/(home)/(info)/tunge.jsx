import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity, Animated} from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../../components/CustomButton'
import { Link, router } from 'expo-router'
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import Header from '../../../../components/Header'
import Collapsible from 'react-native-collapsible'
import Favourite from '../../../../components/Favourite'
import SpeakableText from '../../../../components/SpeakableText';
import * as Speech from 'expo-speech';

//const videoSource = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const videoSource = require('../../../../assets/videos/Tunge_Loft.mp4');

const Tunge = () => {
  const quizindex = "tungløft";
  
  const player = useVideoPlayer(videoSource, player => {
    player.loop = false;
    player.pause();
  });
  
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
  
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
    title: "Tunge Løft",
    path: "/tunge"
  }

  const key = "16";
  
  return (
    // Side struktureret efter brochuren:
    <SafeAreaView className="flex-1 bg-white h-full">
      <View className="border-b-2 border-primary">
        <Header
            backgroundColor="white"
            leftPress={() =>{router.back(), Speech.stop()}}
            // rightPress={() => {router.dismissAll(), Speech.stop()}}
            centerPress={() => {router.push('search'), Speech.stop()}}
        />
      </View>
      <ScrollView>
        <View className="flex-row bg-primary items-center justify-center">
          <Text className="text-3xl font-pbold mt-5 mb-5">Tunge Løft</Text>
          <Favourite
            id={key}
            info={info}
          />
        </View>

        <View>
          <View className="flex flex-row mx-5 mt-5">
            <Text className="text-2xl font-psemibold w-[285px]">Hvad er Vigtigt?</Text>
            <SpeakableText
              styles=""
              children={"Hvad er Vigtigt. Din krop udsættes for pres, når du løfter, skubber eller trækker tunge emner. Jo større vægt, jo større pres. Pas på dig selv, når du skal håndtere et emne."}
            />
          </View>
          <Text className="text-xl font-pregular mx-5">
            Din krop udsættes for pres, når du løfter,
            skubber eller trækker tunge emner. Jo større
            vægt – jo større pres. Pas på dig selv, når du
            skal håndtere et emne.
          </Text>
        </View>

        <View className="flex flex-row mx-5 mb-1 mt-5">
          <Text className="text-2xl font-psemibold w-[285px]">Hvor meget må emnet veje?</Text>
          <SpeakableText
            children={"Hvor meget må emnet veje. Alt afhængig hvordan du bærer emnet og hvor det skal bæres hen må det kun veje en bestemt mængde. På billedet kan ses hvor meget emnet må veje i forhold til, hvordan du holder på det. De nederste områder skal ses som hvis man er bukket forover og flytter på noget, og de øverste kan være hvis man skal løfte emnet op på en hylde."}
            styles="mb-7"
          />
        </View>

        {/*Collapsible text
          Lavet noget simpel styling, ikke endelig design endnu :)
        */}
        <View className="border-2 mx-5 rounded-xl mb-2">
          <TouchableOpacity onPress={toggleExpand}>
            <View className="mx-1 flex flex-row">
              <Text className="text-xl font-psemibold mr-20">Billede forklaring</Text>
              <Image 
                className="ml-5"
                source={require('../../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <View>
              <Text className="text-base font-pregular mx-1">Alt afhængig hvordan du bærer emnet og hvor det skal bæres hen
                må det kun veje en bestemt mængde. På billedet kan ses hvor meget emnet må veje i forhold til hvordan du holder
                på det. De nederste områder skal ses som hvis man er bukket forover og flytter på noget og de øverste kan 
                være hvis man skal løfte emnet op på en hylde.
              </Text>    
            </View>
          </Collapsible>
        </View>

        <View className="justify-center items-center">
          <Image 
            source={require('../../../../assets/images/Manual-Handling-Lifting-Chart_V2.jpg')}
            style={{ resizeMode: 'contain', width: 320, height: 250}}
          />
          {/* <Text className="text-base font-pregular mx-5">Kilde: <Link 
            href="https://www.ccconsulting.uk.com/q-when-2-people-are-manually-lifting-a-load-does-it-mean-the-weight-of-the-load-can-be-twice-as-much/" 
            className="text-blue-500 underline">Link</Link>
          </Text>  */}
        </View>

        <View className="mb-5 mx-5 mt-5">
          <View className="flex flex-row">
            <Text className="text-2xl font-psemibold w-[285px]">Inden du Løfter</Text>
            <SpeakableText
            children={"Inden du Løfter. Vurder følgende. Vægt, størrelse, form. Afstand byrden skal bæres. Underlaget og pladsforhold. Om løftet er skævt skråstreg med vrid. Om du er 'Varmet op'. Kan kran eller andet maskineri benyttes."}
            styles=""
            />
          </View>
          <Text className="text-xl font-pregular">Vurder følgende:</Text>
          <Text className="text-xl font-pregular">{'\u2022'} Vægt, størrelse, form.</Text>
          <Text className="text-xl font-pregular">{'\u2022'} Afstand byrden skal bæres.</Text>
          <Text className="text-xl font-pregular">{'\u2022'} Underlaget og pladsforhold.</Text>
          <Text className="text-xl font-pregular">{'\u2022'} Om løftet er skævt/med vrid.</Text>
          <Text className="text-xl font-pregular">{'\u2022'} Om du er "Varmet op".</Text>
          <Text className="text-xl font-pregular">{'\u2022'} Kan <Link href="/maskine" className="text-blue-500 underline">kran eller andet maskineri</Link></Text>
          <Text className="text-xl font-pregular mx-2"> benyttes?</Text>
        </View>

        <View>
          <View className="mx-5 flex flex-row">
            <Text className="text-2xl font-psemibold w-[285px]">Rigtig Løfteteknik</Text>
            <SpeakableText
            children={"Rigtig Løfteteknik. Det er vigtigt når du håndtere et tungere emne, så benytter du korrekt løfte teknik. Herunder er en video der viser og forklarer hvordan man skal løfte. "}
            styles=""
            />
          </View>
          <View className="mx-5">
            <Text className="text-xl font-pregular">Det er vigtigt når du håndtere et tungere emne, 
              så benytter du korrekt løfte teknik.
            </Text>
            {/* <View>
              <Image 
                source={require('../../assets/images/Lifting_technique.png')}
                style={{ resizeMode: 'stretch', width: 150, height: 150, marginTop: 4}}
              />
              <Text className="text-sm font-pregular ml-12">Kilde: <Link 
                href="https://elevatephysio.com.sg/proper-lifting-technique-to-avoid-back-pain/" 
                className="text-blue-500 underline">Link</Link>
              </Text>
            </View> */}
          </View>
          <Text className="mx-5 text-xl font-pregular"><Text className="font-pbold">Herunder</Text> er en video der viser og forklarer hvordan man skal løfte:</Text>
        </View>

        <View style={styles.contentContainer}>
          <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
        </View>

        <View className="justify-center items-center mt-5 border-red-600 border-4 mx-20">
          <Text className="text-2xl font-psemibold">Er du i tvivl?</Text>
          <Text className="text-2xl font-psemibold">Så LØFT IKKE!</Text>
        </View>
        
        <View className="bg-white mb-5 justify-start items-center">
          <CustomButton 
            title="Test Dig selv"
            imgSource={require('../../../../assets/images/book.png')}
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:quizindex}},console.log(quizindex, "tung"),Speech.stop())}
            containerStyles={"min-w-[200px] min-h-[80px] mt-10 mb-10"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Tunge

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 320,
    height: 260,
  },
});