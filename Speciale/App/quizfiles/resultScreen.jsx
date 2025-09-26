import { StyleSheet, Text, View, SafeAreaView, Pressable, FlatList, ScrollView } from 'react-native';
import React , { useEffect, useState }from 'react';
import { useRoute } from '@react-navigation/native';
import { router } from 'expo-router'
import { useNavigation } from 'expo-router'
import CustomButton from '../../components/CustomButton'

import AsyncStorage from '@react-native-async-storage/async-storage';

import questions from './data/questions';
import tungløft from './data/tungløft';
import _default from './data/default';
import el from './data/el';
import faldsikring from './data/faldsikring';
import kemikalier from './data/kemikalier';
import kloak from './data/kloak';
import kran from './data/kran';
import markering from './data/markering';
import personlig from './data/personlig';
import reparation from './data/reparation';
//import sikkerhedsudstyr from './data/sikkerhedsudstyr';
import værnemidler from './data/værnemidler';
import social from './data/social';
import stiger from './data/stiger';
import stillads from './data/stillads';
import udgravning from './data/udgravning';
import retningslinjer from './data/ulykke';
import Submit from '../../components/Submit';

const ResultScreen = () => {
  const route = useRoute();
  const quizindex = (route.params.quizindex);
  const navigation = useNavigation();

  const quizes = [
    { id: 1, name: "Afmærkning og Afspæring", index: "markering"},
    { id: 2, name: "Alene Arbejde", index: "alene"},
    { id: 3, name: "Arbejde med Ventiler", index: "ventiler" },
    { id: 4, name: "Arbejde på stiger", index: "stiger" },
    { id: 5, name: "Brønd, kloak og bygværk", index: "kloak" },
    { id: 6, name: "Bygherre og Rådgiver", index: "bygherre" },
    { id: 7, name: "El-arbejde", index: "el"},
    { id: 8, name: "Faldsikring", index: "faldsikring"},
    { id: 10, name: "Kemikalier", index: "kemikalier"},
    { id: 11, name: "Kran, løftekæde, krog og truck", index: "kran" },
    { id: 12, name: "Personlig", index: "personlig" },
    { id: 13, name: "Reparation og service", index: "reparation" },
    { id: 14, name: "Social", index: "social" },
    { id: 15, name: "Stillads, rækværk og personlift", index: "stillads" },
    { id: 16, name: "Svejsning", index: "svejsning" },
    { id: 17, name: "Tunge Løft", index: "tungløft" },
    { id: 18, name: "Udgravning", index: "udgravning" },
    { id: 19, name: "Retningslinjer", index: "retningslinjer"},
    { id: 20, name: "Værnemidler", index: "værnemidler"},
  ]

  const quiz = quizes.find(q => q.index === quizindex);
  
  const quizName = quiz?.name;

  const data1 = quizindex === "questions" ? questions 
    : quizindex === "tungløft" ? tungløft
    : quizindex === "el" ? el
    : quizindex === "faldsikring" ? faldsikring
    : quizindex === "kemikalier" ? kemikalier
    : quizindex === "kloak" ? kloak
    : quizindex === "kran" ? kran
    : quizindex === "markering" ? markering
    : quizindex === "personlig" ? personlig
    : quizindex === "reparation" ? reparation
    : quizindex === "værnemidler" ? værnemidler
    : quizindex === "social" ? social
    : quizindex === "stiger" ? stiger
    : quizindex === "stillads" ? stillads
    : quizindex === "udgravning" ? udgravning
    : quizindex === "retningslinjer" ? retningslinjer  
    : _default;   
  
    const [index, setIndex] = useState(0);
    const currentQuestion = data1[index];
    const totalQuestion = data1.length;
    const correctAnswers = (route.params.correct);

    const info = {
      title: quizName,
      totalQuestion: totalQuestion,
      answeredQuestion: correctAnswers,
      quizindex: quizindex
    }


    const storeData = async (key, value) => {
      try {
          await AsyncStorage.setItem(key, JSON.stringify(value))
      } catch (e) {
          console.error(e)
      }
    }
    
    const removeData = async (key) => {
      try {
          await AsyncStorage.removeItem(key)
      } catch (e) {
          console.error(e)
      }
    }


  return (
    <SafeAreaView className="h-full bg-white flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 }}>
        <View className="justify-center items-center bg-primary">
          <Text className="font-psemibold text-2xl mb-5 mt-10">Resultater</Text>
        </View>

        <View className="flex flex-row justify-center items-center mt-5">
          <Text className="text-xl font-pregular mx-5">Spørgsmål besvaret i alt:</Text>
          <Text className="text-xl font-pregular mx-5">{totalQuestion}/{totalQuestion}</Text>
        </View>

        <View className="mt-5 rounded-xl mx-1 bg-primary">
          <FlatList 
            numColumns={2} 
            data={route.params.answer} 
            scrollEnabled={false}
            renderItem={({ item, index }) => {
            // Dynamically update the current question based on FlatList index
            const currentQuestion = data1[index]; 
            // let correctAnswers = 0;
            // if(item.answer === true){
            //   correctAnswers++;
            // }

            return (
              <View 
              style={{   flex: 0, // Makes items flexible within row
              padding: 10,
              backgroundColor: item.answer === true ? "green" : "#b22222", // White background for each question
              borderRadius: 10,
              margin: 9,
              alignItems: "center",
              width: "45%", // Ensures 2 columns with spacing
              }}> 
                {/* Show Question Number */}
                <Text className="font-psemibold text-xl text-white">{index + 1}.</Text>  

                {/* Show Current Question */}
                <Text className="font-pregular text-sm text-white mb-1">{currentQuestion?.question}</Text>

                {/* Show Correct/Wrong Answer */}
                {item.answer === true ? (
                <Text className="font-psemibold text-sm text-white">Rigtigt Svar</Text>
                ) : (
                <Text className="font-psemibold text-sm text-white">Forkert Svar</Text>
                )}
              </View>
            );
          }}/>
        </View>

        <View className="bg-white justify-start items-center">
          <Submit
            id={quizindex}
            info={info}
            containerStyles={"mt-5"}
            textStyles={"mx-5"}
          />
        
        </View> 
        {/* <View className="flex-row mt-5 mb-5">
          {quizindex === "ulykke" ?(
        <CustomButton 
          title="Save Alert1"
          handlePress={() =>storeData("alert1", true) + console.log("Alert1 saved")}
          containerStyles={"ml-3 min-w-[150px]"}
          textStyles={"mx-1"}
        />
        ):(
          <View></View>
        )}
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultScreen;