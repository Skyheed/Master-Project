import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react'; // Ensure React is imported
import * as Speech from 'expo-speech';
import PlayButton from './PlayButton';


const SpeakableText = ({ children, parent, styles, parentStyles, childStyles }) => {

  const stopSpeech = () => {
    console.log("Stopping speech");
    Speech.stop(); // Stops any ongoing speech
  };

  const [imageSrc, setImageSrc] = useState(require('../assets/images/play_circle.png'))
  
  const PlayerSpeech = async () => {
    let speaking = await Speech.isSpeakingAsync()
    if(speaking === false){
      Speech.speak(children, {onDone: () => {setImageSrc(require('../assets/images/play_circle.png'))}})
      setImageSrc(require('../assets/images/pause_circle.png'));
    }else{
      stopSpeech();
      setImageSrc(require('../assets/images/play_circle.png'));
    }
  };
    
  return (
    <View className={`items-center justify-end ${styles}`}>
      <PlayButton 
        //title="play"
        handlePress={PlayerSpeech}
        containerStyles={"w-[35px] h-[35px] rounded-full"}
        imgSource={imageSrc}
        imgStyles={{width: 30, height: 30}}
      />
    </View> 
    );
  };
  
export default SpeakableText;