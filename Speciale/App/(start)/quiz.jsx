  import { SafeAreaView, Text, View, FlatList, Image } from 'react-native'
  import { Link, router } from 'expo-router'
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import CustomButton from '../../components/CustomButton';
  import { useEffect, useState } from 'react'
  import QuizButton from '../../components/QuizDoneButton';

  const Quiz = () => {
    const [quizes, setQuizes] = useState([]); // State to store fetched courses

    const keys = [
      "markering", "alene", "stiger", "kloak", "bygherre", "el",
      "faldsikring", "kemikalier", "kran", "reparation",
      "stillads", "svejsning", "tungløft", "udgravning", "retningslinjer", "sikkerhedsudstyr"
    ];

    const getData = async () => {
      try {
        let tempQuizes = []; // Temporary array to store fetched items
        for (let i = 0; i < keys.length; i++) {
          const savedQuiz = await AsyncStorage.getItem(keys[i]); // Fetch each quiz by its ID
          if (savedQuiz != null) {
            tempQuizes.push(JSON.parse(savedQuiz)); // Parse and add to the temporary array
          }
        }
        setQuizes(tempQuizes); // Update state, triggering a re-render
      } catch (error) {
        console.log(error);
      }
    };

    const clearData = async () => {
      try {
        for (let i = 0; i < keys.length; i++) {
          await AsyncStorage.removeItem(keys[i]); // Clear each quiz by its ID
        }
        setQuizes([]); // Clear the state
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        getData(); // Fetch data when the component mounts
    }, []);
    
    useEffect(() => {
      const checkForUpdates = async () => {
        const updated = await AsyncStorage.getItem("quizUpdated");
        if (updated === "true") {
          getData(); // Fetch data if there are updates
          await AsyncStorage.removeItem("quizUpdated"); // Remove the update flag
        }
      }

      const interval = setInterval(checkForUpdates, 1000); // Check for updates every second
    
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [])

    const createButton = (item) => (
        <QuizButton 
          title={`${item.title}`}
          text={`${item.answeredQuestion}/${item.totalQuestion}`}
          handlePress={() => router.push({pathname:'/quizfiles/HomeQuiz',params:{quizindex:item.quizindex}})}
          containerStyles={"w-full mt-5 justify-start"}
          titleStyles={"text-lg font-psemibold w-[180px] ml-2"}
          textStyles={"px-2 py-1"}
          imgSource={item.answeredQuestion === item.totalQuestion ? require('../../assets/images/checkmark.png') : require('../../assets/images/cross.png')} // <-- ✅ Your checkmark image path here
          imgStyles={{ width: 30, height: 30, marginRight: -20 }} // Adjust the image styles as needed
        />
    );

    return (
      <SafeAreaView className="flex-1 bg-white h-full">
        <View className="flex-row bg-primary items-center justify-center border-b-2">
          <Text className="text-3xl font-pbold mt-10 mb-5">Quizzer</Text> 
        </View>

        {quizes.length === 0 ? ( 
          <View className="flex-row justify-center">
            <Text className="text-xl font-pregular mx-5 mt-5">Ingen quizzer færdiggjort.</Text>
          </View>
        ) : (
          <View className="flex-row justify-center items-center">
            <Text className="text-xl font-pregular mx-5 mt-5">Herunder kan du se de quizzer du har taget, og hvor mange spørgsmål du har svaret korrekt på i hver.</Text>
          </View>
        )}
          <FlatList 
            className="mx-6"
            data={quizes} // Filter out completed quizzes
            keyExtractor={(item, index) => index.toString()} // Ensure keys are unique
            renderItem={({ item }) => createButton(item)}
          />
        
        {/* <CustomButton
          title="Clear"
          handlePress={clearData}
          containerStyles={"min-w-[235px] mb-5 mx-5 mt-40"}
          titleStyles={"text-lg font-psemibold mr-7"}
          textStyles={"mr-5 border-2  rounded-full px-2 py-1 bg-white"}
        /> */}
      </SafeAreaView>
    )
  }

  export default Quiz