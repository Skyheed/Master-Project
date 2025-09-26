import { StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, router } from 'expo-router'
import { useRoute } from '@react-navigation/native'
import Header from '../../components/HeaderTabs'
import CustomButton from '../../components/CustomButton'
import * as Speech from 'expo-speech';

//homescreen for quiz til at starte med. bringes vidre til en ny quiz side med...
// libs og deps
// npm install @react-navigation/native
//npx install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native-stack
const HomeQuiz = () => {
  const route = useRoute();  
  const navigation = useNavigation();

  const quizindex = route.params.quizindex;
  return (
    <SafeAreaView className="flex-1 bg-white h-full">
      <View className="border-b-2 border-primary">
        <Header
          backgroundColor="white"
          leftPress={() => {router.back(), Speech.stop()}}
        />
      </View>

      <ScrollView>
        <View className="justify-center items-center bg-primary">
          <Text className="text-3xl font-pbold my-5">Velkommen til Quiz!</Text>
        </View>
        
        <View >
          <View className="mt-5 mx-5">
            <Text className="text-2xl font-psemibold">
              Information om Quizzer:
            </Text>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Hver quiz indeholder forskellige mængder af spørgsmål, alt fra 3-9.</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Hvert spørgsmål har <Text className="font-psemibold">1 rigtigt</Text> svar.</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular"><Text className="font-psemibold">Læs</Text> hvert spørgsmål grundigt! Nogle vil bede dig vælge det svar der ikke passer ind med de andre.
                Nogle vil have 2 svarmuligheder, andre har 4. 
              </Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">Når du har svaret på alle spørgsmål vil du se dine resultater 
                og quizzen vil blive tilføjet til din <Text className="font-psemibold">egen quiz-liste</Text>, som kan findes fra forsiden.</Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-xl font-pregular">{'\u2022'} </Text>
              <Text className="text-xl font-pregular">For at starte quizzen, <Text className="font-psemibold">tryk</Text> på knappen herunder:</Text>
            </View>
          </View>
          <CustomButton 
            title={`Start quiz ${route.params.quizindex}.`}
            handlePress={() => navigation.navigate("quizScreen",{quizindex:quizindex},console.log(quizindex, " quizindex"))}
            containerStyles={"mt-5 mb-20 mx-20"}
            imgSource={require('../../assets/images/book.png')}
            imgStyles={{ resizeMode: 'stretch', width: 30, height: 30}}
          />
          {/* <Pressable onPress={() => navigation.navigate("quizScreen",{quizindex:"questions"},console.log(quizindex, " questions"))}  
            style={{ backgroundColor:"#42A5F5", padding: 14, borderRadius: 20, marginRight: "auto", marginLeft: "auto", marginTop: 20 }}>
            <Text style={{ color: "black", fontWeight: "600", textAlign: "center" }}>Start quiz exemple. </Text>
          </Pressable> */}
          {/* <Pressable onPress={() => navigation.navigate("quizScreen",{quizindex:quizindex},console.log(quizindex, "tung quizindex"))}
            style={{ backgroundColor: "#42A5F5", padding: 14, borderRadius: 20, marginRight: "auto", marginLeft: "auto", marginTop: 20 }}>
            <Text style={{ color: "black", fontWeight: "600", textAlign: "center" }}>{`Start quiz ${route.params.quizindex}.`}</Text>
          </Pressable> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default HomeQuiz