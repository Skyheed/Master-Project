import { StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { Route } from 'expo-router/build/Route';
import { useRoute } from '@react-navigation/native';
//import { useNavigation } from '@react-navigation/native';

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
//import sikkerhedsudstyr from './data/værnemidler';
import værnemidler from './data/værnemidler';
import social from './data/social';
import stiger from './data/stiger';
import stillads from './data/stillads';
import udgravning from './data/udgravning';
import retningslinjer from './data/ulykke';
import CustomButton from '../../components/CustomButton';
import alene from './data/alene';
import ventiler from './data/ventiler';
import bygherre from './data/bygherre';
import svejsning from './data/svejsning';
import SpeakableText from '../../components/SpeakableText';


const quizScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();
  // const data = questions;
  //const data = tungløft;
  
//tilføj til if statement hvilken datafil fra data skal bruges. husk at tilføje en import dat fra den.
  
//  const quizindex = Number(route.params.quizindex);
//   console.log(quizindex, "quize screen")
//   const data = quizindex === 0 ? questions 
//   : quizindex === 1 ? tungløft
//   : questions; 
  const quizindex = (route.params.quizindex);
  // console.log(quizindex, "quize screen")
  const data = quizindex === "questions" ? questions 
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
  : quizindex === "alene" ? alene 
  : quizindex === "ventiler" ? ventiler
  : quizindex === "bygherre" ? bygherre
  : quizindex === "svejsning" ? svejsning 
  : _default;   
  
  const totalQuestion = data.length;

  //index of the question
  const [index, setIndex] = useState(0);

  //chosen a answer
  const [answerPick, setAnswerPick] = useState(null);

  // answer status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  //answers
  const [answer, setAnswer] = useState([]);

  //selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  //counter
  const [counter, setCounter] = useState(15);

  //interval
  let interval = null;

  //progressbar
  const progressPercentage = Math.floor((index / totalQuestion) * 100);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //used to hide header on quize screen.
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [correctAnswers, setCorrectAnswers] = useState(0)

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //styre logic for useeffect om det rigtigt eller forkert svar. lisner for pressable.
  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setAnswerStatus(true);
        answer.push({ questions: index + 1, answer: true });
        setCorrectAnswers((answer) => answer += 1);
      } else {
        setAnswerStatus(false);
        answer.push({ questions: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex])

  //second useeffect til skifte til nyt spørgsmål og sætte de rigtige værdige til null igen
  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index])

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index])

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  const currentQuestion = data[index];

  const dynamicStrings = [];

  currentQuestion?.options?.map((item) => {
    if (item && item.answer) {
      dynamicStrings.push(item.options + ". " + item.answer); // You could add conditions here
    }
  });

  return (
    <SafeAreaView className="h-full bg-white flex-1">
      <ScrollView>
        <View className="justify-center items-center bg-primary">
          <Text className="font-psemibold text-2xl mb-5 mt-10">{`Quiz om ${route.params.quizindex}.`}</Text>
          {/* <Text>{counter} :timer rygning</Text> */}
        </View>

        <View className="justify-center items-center mx-5 my-5 flex-row">
          <Text className="font-pregular text-xl w-[280px]">Spørgsmål besvaret: {index}/{totalQuestion}</Text>
          <SpeakableText 
            children={currentQuestion?.question + dynamicStrings.join('. ')}
            styles={""}
          />
        </View>

        {/* progress bar */}
        {/* <View
          style={{
            backgroundColor: "white",
            width: "95%",
            flexDirection: "row",
            alignItems: "center",
            height: 10,
            borderRadius: 20,
            justifyContent: "center",
            marginTop: 20,
            margin: 10,
          }}>
          <Text
            style={{
              backgroundColor: "black",
              // "#E57373", mindre rød farve
              // "#FFC0C8", rød farve
              borderRadius: 12,
              position: "absolute",
              left: 0,
              height: 10,
              right: 0,
              width: `${progressPercentage}%`,
              margin: 0,
            }}/>
        </View> */}
        
        <View className="mx-5 justify-center items-center bg-primary h-[175px] rounded-xl">
          <Text className="text-xl font-pregular m-1">
            {currentQuestion?.question}
          </Text>
        </View>
        
        <View className="mx-5">
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              className="bg-gray-200 rounded-2xl h-[40px] mt-2.5"
              onPress={() => selectedAnswerIndex === null && setAnswerPick(index)}
              key={item.id} 
              //condition til style changes ved rigtigt og forkert svar.
              style={selectedAnswerIndex === index && index === currentQuestion.correctAnswerIndex ?
                //rigtigt svar styling
                {
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "green"
                } :
                selectedAnswerIndex !== null && selectedAnswerIndex === index ?
                  //forkert svar styling
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#b22222" //før var det en blød rød: #E57373
                  } :
                  answerPick === index ? {
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#ADADAD"
                  } :
                  //default styling
                  {
                    flexDirection: "row",
                    alignItems: "center"
                  }}
              //normal styling generalt.
            >
              <Text
                // copy style to the other parts
                className="text-lg font-pregular ml-2 my-1"
                style={{ textAlign: "center", color: selectedAnswerIndex === index && index === currentQuestion.correctAnswerIndex ? "white" :selectedAnswerIndex === index && index !== currentQuestion.correctAnswerIndex ? "white": "black"}}>
                {item.options})</Text>
              <Text 
              className="text-xs font-pregular ml-5 my-1 w-[268px]"
              style={{color: selectedAnswerIndex === index && index === currentQuestion.correctAnswerIndex ? "white" : selectedAnswerIndex === index && index !== currentQuestion.correctAnswerIndex ? "white":  "black" }}>{item.answer}</Text>
            </Pressable>
          ))}
        </View>

        <View className="justify-center items-center">
          {answerPick === null ? null : (
            <CustomButton 
              title="Vælg Svarmulighed"
              containerStyles={"mb-20 mt-5 mx-20 bg-primary rounded-xl justify-center items-center h-[50px]"}
              handlePress={() => {setSelectedAnswerIndex(answerPick); setAnswerPick(null)}}
              textStyles={"mx-1"}
            />
          )}
        </View>

        {/* view for correct and wrong anwser popup */}
        <View className="mx-5 justify-center items-center mt-2">
          {answerStatus === null ? null : (
            <Text className="font-pregular text-lg">
              {currentQuestion.options[selectedAnswerIndex].explain}  
            </Text>
          )}
        </View>

        <View>
          {index + 1 >= data.length && answerStatus !== null ? (
              <CustomButton 
              title="Færdiggør Quiz"
              containerStyles={"mb-20 mt-2 mx-20 bg-primary rounded-xl justify-center items-center min-h-[40px]"}
              handlePress={() =>
              navigation.navigate("resultScreen", {
                answer: answer,
                quizindex: quizindex,
                correct: correctAnswers,
              })}
              />
          ) : answerStatus === null ? null : (
            <CustomButton 
              title="Næste Spørgsmål"
              containerStyles={"mb-20 mt-2 mx-20 bg-primary rounded-xl justify-center items-center min-h-[40px]"}
              handlePress={() => {setIndex(index + 1), setAnswerStatus(null), setSelectedAnswerIndex(null)}}
            />
          )}
        </View> 
      </ScrollView>
    </SafeAreaView>
  )
}

export default quizScreen