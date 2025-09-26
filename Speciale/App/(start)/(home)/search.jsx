import { View, Text, SafeAreaView, TextInput, FlatList, TouchableOpacity } from 'react-native'
import SearchInput from '../../../components/SearchInput'
import React, { useState } from 'react'
import HeaderTabs from '../../../components/HeaderTabs'
import { router } from 'expo-router'

import CustomButton from '../../../components/CustomButton'

const Search = () => {
  const [userInput, setUserInput] = useState("")
  const courses = [
    { id: 1, name: "Adgangsforhold", path: "/social", color: "bg-tertiary", image: require('../../../assets/images/badge.png') },
    { id: 2, name: "Arbejdsmiljø", path: "/personlig", color: "bg-primary", image: require('../../../assets/images/arbejdsmiljo.png') },
    { id: 3, name: "Alarm og Evakuering", path: "/ulykker", color: "bg-secondary", text: "text-white", keywords: ["ulykker", "uheld", "skader", "brand"], image: require('../../../assets/images/alarm.png') },
    { id: 4, name: "Afmærkning og Afspæring", path: "/markering", color: "bg-teal-400", keywords: ["markering", "afmærkning", "afspæring"], image: require('../../../assets/images/cone.png') },
    { id: 5, name: "Brug af Kemikalier", path: "/kemikalier", color: "bg-teal-400", keywords: ["kemikalier", "giftige", "farlige", "syrer", "olie"], image: require('../../../assets/images/chemistry.png') },
    { id: 6, name: "Faldsikring", path: "/faldsikring", color: "bg-teal-400", keywords: ["faldsikring", "sikkerhed", "fald", "stiger", "stillads"], image: require('../../../assets/images/falling.png') },
    { id: 7, name: "Værnemidler", path: "/sikkerhedsudstyr", color: "bg-teal-400", keywords: ["beskyttelse", "arbejdstøj", "hjelm", "sikkerhedsudstyr", "åndedrætsværn", "ansigtsværn", "tøj", "sikkerhedstøj", "handsker", "briller"], image: require('../../../assets/images/safety-goggles.png') },
    { id: 8, name: "Alene Arbejde", path: "/alene", color: "bg-purple-400", keywords: ["alene", "alarm", "solo"], image: require('../../../assets/images/personlig.png') },
    { id: 9, name: "Bygherre og Rådgiver", path: "/bygherre", color: "bg-purple-400", image: require('../../../assets/images/social.png') },
    { id: 10, name: "Reparation og service", path: "/reparation", color: "bg-purple-400", keywords: ["maskine"], image: require('../../../assets/images/machine.png') },
    { id: 11, name: "Tunge Løft", path: "/tunge", color: "bg-purple-400", image: require('../../../assets/images/weight_V2.png') },
    { id: 12, name: "Arbejde på stiger", path: "/stiger", color: "bg-blue-400", image: require('../../../assets/images/ladder.png') },
    { id: 13, name: "Stillads, rækværk og personlift", path: "/stillads", color: "bg-blue-400", image: require('../../../assets/images/elevator.png') },
    { id: 14, name: "Brønd, kloak og bygværk", path: "/kloak", color: "bg-orange-400", keywords: ["gasser", "cyanid"], image: require('../../../assets/images/well.png') },
    { id: 15, name: "Udgravning", path: "/udgravning", color: "bg-orange-400", image: require('../../../assets/images/shovel.png') },
    { id: 16, name: "Arbejde med Ventiler", path: "/ventiler", color: "bg-red-500", image: require('../../../assets/images/valve.png') },
    { id: 17, name: "Kran, løftekæde, krog og truck", path: "/kran", color: "bg-red-500", image: require('../../../assets/images/forklift_V2.png') },
    { id: 18, name: "El-arbejde", path: "/el", color: "bg-yellow-400", keywords: ["el", "elektricitet", "strøm"], image: require('../../../assets/images/electric.png') },
    { id: 19, name: "Svejsning", path: "/svejsning", color: "bg-yellow-400", keywords: ["gasser", "uddannelse", "svejseskærm"], image: require('../../../assets/images/welding.png') },
  ]

  const filterData = (item) => {
    const input = userInput.toLowerCase();

    const nameMatch = item.name.toLowerCase().includes(input);
    const keywordMatch = item.keywords?.some(keyword =>
      keyword.toLowerCase().includes(input)
    )
    
    if(userInput === "" || nameMatch || keywordMatch) {
      return (
        <CustomButton 
          title={item.name}
          handlePress={() => router.push(item.path)}
          containerStyles={`min-w-[300px] mt-5 ${item.color}`}
          imgSource={item.image}
          imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
          textStyles={`${item.text}`}
        />
      )
    }

    if(item.name.toLowerCase().includes(userInput.toLowerCase())) {
      return (
        <CustomButton 
          title={item.name}
          handlePress={() => router.push(item.path)}
          containerStyles={`min-w-[300px] mt-5 ${item.color}`}
          imgSource={item.image}
          imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
          textStyles={`${item.text}`}
        />
      )
    }
  }
  
  return (
    <SafeAreaView className="flex-1 bg-white h-full">
        <View className="border-b-2 border-primary">
          <HeaderTabs
            backgroundColor="white"
            leftPress={() => router.back()}
          />
        </View>
        <View className="mx-5 items-start space-x-4 h-16 px-4 bg-white-100 rounded-2xl border-2 border-black-900 focus:border-blue-700 mt-5">
          <TextInput 
            placeholder="Søg efter et emne..."
            className="w-full h-full text-base mt-0.5 text-black flex-1 font-pregular"
            onChangeText={(text) => setUserInput(text)}
          />
        </View>

        <View className="mb-56">
          <FlatList 
            className="mx-6"
            data = {courses}
            renderItem={({ item, index }) => filterData(item)}
          />
        </View>
    </SafeAreaView>
  )
}

export default Search