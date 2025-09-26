import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton';

const Favourites = () => {
  const [courses, setCourses] = useState([]); // State to store fetched courses

  let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
  // Array of keys to fetch from AsyncStorage

  const getData = async () => {
    try {
      let tempCourses = []; // Temporary array to store fetched items
      for (let key = 0; key < array.length; key++) {
        const savedKey = await AsyncStorage.getItem(array[key]);
        const currentData = JSON.parse(savedKey);
        if (currentData != null) {
          tempCourses.push({...currentData, id: array[key] }); // Parse and add to the temporary array
        }
      }
      setCourses(tempCourses); // Update state, triggering a re-render
    } catch (error) {
      console.log(error);
    }
  };


  const clearData = async () => {
    try {
      for (let key = 0; key < array.length; key++) {
        await AsyncStorage.removeItem(array[key]); // Clear each course by its ID
      }
      setCourses([]); // Clear the state
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData(); // Fetch data when the component mounts
  }, []);

  useEffect(() => {
    const checkForUpdates = async () => {
      const updated = await AsyncStorage.getItem("favouritesUpdated");
      if (updated === "true") {
        getData(); // Fetch data if there are updates
        await AsyncStorage.removeItem("favouritesUpdated"); // Remove the update flag
      }
    }

    const interval = setInterval(checkForUpdates, 1000); // Check for updates every second
  
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [])
  

  const createButton = (item) => (
    <View className="flex-row justify-center items-center max-h-[100px]">
      <CustomButton 
        title={item.title}
        handlePress={() => router.push(item.path)}
        containerStyles={"w-[235px] mt-5"}
        textStyles={"mx-1"}
      />
      <CustomButton
        title="Fjern"
        handlePress={async () => {
            await AsyncStorage.removeItem(item.id); // Remove item from AsyncStorage
            setCourses(courses.filter(course => course.id !== item.id)); // Update local state to remove the item
            await AsyncStorage.setItem("favouritesUpdated", JSON.stringify(false)); // Set update flag
        }}
        imgSource={require('../../assets/images/delete.png')}
        imgStyles="w-5 h-5"
        containerStyles="bg-white border-2 border-primary rounded-full ml-3 mt-5 justify-center items-center min-h-[62px] min-w-[62px]"
      />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white h-full">
      <View className="flex-row bg-primary items-center justify-center border-b-2">
        <Text className="text-3xl font-pbold mt-10 mb-5">Favoritter</Text> 
      </View>

      <FlatList 
        className="mx-6"
        data={courses}
        keyExtractor={(item, index) => index.toString()} // Ensure keys are unique
        renderItem={({ item }) => createButton(item)}
      />

      {/* <CustomButton
        title="Clear"
        handlePress={clearData}
        containerStyles={"min-w-[235px] mb-5 mx-5"}
        titleStyles={"text-lg font-psemibold mr-7"}
        textStyles={"mr-5 border-2  rounded-full px-2 py-1 bg-white"}
      /> */}
    </SafeAreaView>
  );
};

export default Favourites;