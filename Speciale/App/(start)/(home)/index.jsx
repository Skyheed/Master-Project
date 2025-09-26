import { View, Text, Image, Alert, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, {useEffect, useState, useCallback} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../../components/CustomButton'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  NavigationBar.setVisibilityAsync("hidden");
  //showalert skal være true i den rigtige version!!!!
  const [showAlert, setShowAlert] = useState(true);
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("retningslinjer")
      if (value !== null) {
        setShowAlert(false)
      } 
      else{
        setShowAlert(true)
      }
    } catch (e) {
      console.error(e)
    }
  };

  useFocusEffect(
    useCallback(() => {
      // This runs every time you return to the screen
      const fetchData = async () => {
        // console.log('Fetching data...');
        // Your fetch logic here
        getData();
      };

      fetchData();
    }, [])
  ); 
    
  const AlertButton = () => {
    Alert.alert("Advarsel", "Du er på vej til sikkerhedsorientering, du skal igennem VCS' retningslinjer først.", [
      { text: "OK", onPress: () => console.log("OK Pressed " + showAlert) },
      { text: "Cancel", onPress: () => console.log("Cancel Pressed") }
    ]);
  };

  return (
    <SafeAreaView className="bg-white h-full flex-1">
      <StatusBar hidden={true}/>
      <ScrollView>
        <View className="items-center justify-center border-4 border-x-0 border-primary mt-10"> 
          <Image 
            source={require('../../../assets/images/Vand_Logo_lang.png')}
            style={{ resizeMode: 'stretch', width: 330, height: 140}}
            className="mt-1 mb-1"
          />
        </View>
        <View className="items-center justify-center bg-white my-10">
          <Text className="text-xl font-pblack mx-5">Velkommen til VandCenter Syd's nye Sikkerheds App!</Text>
        </View>

        <View className="items-start justify-start bg-gray-100 mb-10">
          <Text className="text-xl font-psemibold mx-5">I denne app</Text>
          <Text className="text-lg font-pregular mx-5">
            kan du blive orienteret om retningslinjer og sikkerhed hos VandCenter Syd
          </Text>
        </View>

        <View className="justify-center items-center mx-5">
          <CustomButton 
            title="Se Retningslinjer"
            handlePress={() => router.push('/homeLille')}
            containerStyles={"w-[250px]"}
          />
          {showAlert === true ?(
          <CustomButton 
            title="Se Sikkerhedsorientering"
            handlePress={() => AlertButton()}
            containerStyles={"w-[250px] my-5"}
          />
          ):(<CustomButton 
          title="Se Sikkerhedsorientering"
          handlePress={() => router.push('/homeStor')}
          containerStyles={"w-[250px] my-5"}
          />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}