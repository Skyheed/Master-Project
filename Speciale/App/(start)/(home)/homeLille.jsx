import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../components/CustomButton'
import { router } from 'expo-router'
import HeaderTabs from '../../../components/HeaderTabs'
import Collapsible from 'react-native-collapsible'
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view'
import Zoom from '../../../components/Zoom'
import SpeakableText from '../../../components/SpeakableText'
import * as Speech from 'expo-speech';

import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeLille = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [collapsed1, setCollapsed1] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);
    
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

  var spinDeg = '0deg'
  var spinDeg1 = '0deg'
  var spinDeg2 = '0deg'
  var spinDeg3 = '0deg'

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

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);

/////////////////////////////ALERT TEST/////////////////////////////////////////////////////////////////

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
    <SafeAreaView className="flex-1 bg-white h-full"> 
      <View className="border-b-2 border-primary">
        <HeaderTabs
            backgroundColor="white"
            leftPress={() => {router.back(), Speech.stop()}}
            />
      </View>
      <ScrollView>
        <View className="items-center justify-center border-4 border-x-0 border-primary"> 
          <Image 
            source={require('../../../assets/images/Vand_Logo.png')}
            style={{ resizeMode: 'stretch', width: 320, height: 110}}
            className="mt-1 mb-1"
            />
        </View>

        <View className="items-start justify-start mx-5">
          <View className="flex flex-row">
            <Text className="text-2xl font-psemibold mt-5 w-[285px]">Retningslinjer</Text>
            <SpeakableText
              children={"Retningslinjer. Velkommen til VandCenter Syd's retningslinjer. Her finder du information, " +
              "du skal følge, når du arbejder for os. Vores arbejdsmiljøpolitik siger, at du ikke må blive syg af at " +
              "gå på arbejde. Der er retningslinjer foradgang, arbejdsmiljø og alarmer og evakuerings forhold. "}
              />
          </View>
          <Text className="text-xl font-pregular mb-5">
          Velkommen til VandCenter Syds retningslinjer! Her finder du information
          du skal følge, når du arbejder for os. Vores arbejdsmiljøpolitik siger, at du ikke må blive syg af at
          gå på arbejde. Der er retningslinjer for adgang, arbejdsmiljø og alarmer og evakuerings forhold.
          </Text>
        </View>

        <View className="mx-5">
          <CustomButton 
            title="Adgangsforhold"
            imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
            imgSource={require('../../../assets/images/badge.png')}
            handlePress={() =>{ router.push('/social'),Speech.stop()}}
            containerStyles={"bg-tertiary"}
          />

{/* //////////////////////////////alert test////////////////////////////////////////////////// */}
           {/* <CustomButton 
              title="test alert add"
              imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
              handlePress={() => storeData("alert1", true) + console.log("alert1 added")}
              containerStyles={"bg-primary"}
              />
            <CustomButton 
              title="test alert remove"
              imgStyles={{ resizeMode: 'stretch', width: 40, height: 40}}
              handlePress={() => removeData("alert1") + console.log("alert1 removed")}
              containerStyles={"bg-primary"}
              />
 */}

        </View>

        <View className="mx-5 mt-5">
          <View className="flex flex-row">
            <Text className="text-2xl font-psemibold w-[285px]">Kort over Lokationer</Text>
            <SpeakableText
            children={"Kort over Lokationer. Herunder er diverse kort over relevante adresser:"}
            styles=""
            />
          </View>
          <Text className="text-xl font-pregular">
            Herunder er diverse kort over relevante adresser:
          </Text>
        </View>

        <View className="mx-5 flex flex-row mt-1">
          <Image
            source={require('../../../assets/images/samlingsted.png')}
            style={{ resizeMode: 'stretch', width: 30, height: 25}}
          />
          <Text className="text-xl font-pregular ml-2">= Samlingsteder</Text>
        </View>
        <View className="mx-5 flex flex-row mt-1">
          <Image
            source={require('../../../assets/images/hjertestarter.png')}
            style={{ resizeMode: 'stretch', width: 30, height: 25}}
            />
          <Text className="text-xl font-pregular ml-2">= Hjertestarter</Text>
        </View>

        {/* Collapsible adresser og billeder */}
        <View className="mx-5 mt-5 border-2 rounded-xl">
          <TouchableOpacity onPress={toggleExpand}>
            <View className="mx-1 flex flex-row h-[30px]">
            <Text className="text-xl font-psemibold w-[255px]">Vandværksvej 7, Odense</Text>
              <Image 
                className="ml-6"
                source={require('../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg}], resizeMode: 'stretch', width: 30, height: 30}}
              />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            {/* Click og zoom */}
            <TouchableOpacity onPress={() => {setModalVisible1(true)}}>
              <View className="items-center justify-start">
                <Image 
                  source={require('../../../assets/images/vandverksvej.png')}
                  style={{ resizeMode: 'contain', width: 320, height: 300}}
                />
              </View>
            </TouchableOpacity>
            {/* Zoom direkte */}
            {/* <View className="border-2 rounded-xl" style={{ flexShrink: 1, height: 300, width: 320 }}>
              <ReactNativeZoomableView
                maxZoom={4}
                minZoom={1}
                contentWidth={320}
                contentHeight={300}
                disablePanOnInitialZoom={true}
              >
                <Image
                  style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                  source={require('../../assets/images/vandverksvej.png')}
                />
              </ReactNativeZoomableView>
            </View> */}
          </Collapsible>
        </View>

        <View className="mx-5 mt-5 border-2 rounded-xl">
          <TouchableOpacity onPress={toggleExpand1}>
            <View className="mx-1 flex flex-row h-[60px]">
              <Text className="text-xl font-psemibold w-[255px]">Skt. Jørgens Gade 213, Odense</Text>
              <Image 
                className="ml-6"
                source={require('../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg1}], resizeMode: 'stretch', width: 30, height: 30}}
                />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed1}>
            {/* Klik og zoom */}
            <TouchableOpacity onPress={() => {setModalVisible2(true)}}>
              <View className="items-center justify-start">
                <Image 
                  source={require('../../../assets/images/skt_jorgens_gade.png')}
                  style={{ resizeMode: 'contain', width: 320, height: 300}}
                  />
              </View>
            </TouchableOpacity>
            {/* Zoom direkte */}
            {/* <View className="border-2 rounded-xl" style={{ flexShrink: 1, height: 300, width: 320 }}>
              <ReactNativeZoomableView
                maxZoom={4}
                minZoom={1}
                contentWidth={320}
                contentHeight={300}
                disablePanOnInitialZoom={true}
              >
                <Image
                  style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                  source={require('../../assets/images/skt_jorgens_gade.png')}
                />
              </ReactNativeZoomableView>
            </View> */}
          </Collapsible>
        </View>

        <View className="mx-5 mt-5 border-2 rounded-xl">
          <TouchableOpacity onPress={toggleExpand2}>
            <View className="mx-1 flex flex-row h-[30px]">
            <Text className="text-xl font-psemibold w-[255px]">Hjorslevvej 25, Otterup</Text>
              <Image 
                className="ml-6"
                source={require('../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg2}], resizeMode: 'stretch', width: 30, height: 30}}
                />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed2}>
            {/* Klik og zoom */}
            <TouchableOpacity onPress={() => {setModalVisible3(true)}}>
              <View className="items-center justify-start">
                <Image 
                  source={require('../../../assets/images/hjorslevvej.png')}
                  style={{ resizeMode: 'contain', width: 320, height: 300}}
                  />
              </View>
            </TouchableOpacity>
            {/* Zoom direkte */}
            {/* <View className="border-2 rounded-xl" style={{ flexShrink: 1, height: 300, width: 320 }}>
              <ReactNativeZoomableView
                maxZoom={4}
                minZoom={1}
                contentWidth={320}
                contentHeight={300}
                disablePanOnInitialZoom={true}
              >
                <Image
                  style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                  source={require('../../assets/images/hjorslevvej.png')}
                />
              </ReactNativeZoomableView>
            </View> */}
          </Collapsible>
        </View>

        <View className="mx-5 mb-5 mt-5 border-2 rounded-xl mb-10">
          <TouchableOpacity onPress={toggleExpand3}>
            <View className="mx-1 flex flex-row h-[30px]">
            <Text className="text-xl font-psemibold w-[255px]">Ejby Møllevej 22, Odense</Text>
              <Image 
                className="ml-6"
                source={require('../../../assets/images/Drop_down_arrow.png')}
                style={{ transform: [{rotate: spinDeg3}], resizeMode: 'stretch', width: 30, height: 30}}
                />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed3}>
            {/* Klik og zoom */}
            <TouchableOpacity onPress={() => {setModalVisible4(true)}}>
              <View className="items-center justify-start">
                <Image 
                  source={require('../../../assets/images/ejby_mollevej.png')}
                  style={{ resizeMode: 'contain', width: 320, height: 300}}
                  />
              </View>
            </TouchableOpacity>
            {/* Zoom direkte */}
            {/* <View className="border-2 rounded-xl" style={{ flexShrink: 1, height: 300, width: 320 }}>
              <ReactNativeZoomableView
                maxZoom={4}
                minZoom={1}
                contentWidth={320}
                contentHeight={300}
                disablePanOnInitialZoom={true}
              >
                <Image
                  style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                  source={require('../../assets/images/ejby_mollevej.png')}
                />
              </ReactNativeZoomableView>
            </View> */}
          </Collapsible>
        </View>
        
        {/* Modal's til at åbne billeder op til zoom */}
        <Zoom 
          modalVisible={modalVisible1}
          handlePress={() => {setModalVisible1(false)}}
          image={require('../../../assets/images/vandverksvej.png')}
          containerStyles={""}
          contentWidth={360}
          contentHeight={320}
        />

        <Zoom 
          modalVisible={modalVisible2}
          handlePress={() => {setModalVisible2(false)}}
          image={require('../../../assets/images/skt_jorgens_gade.png')}
          containerStyles={""}
          contentWidth={360}
          contentHeight={320}
        />

        <Zoom 
          modalVisible={modalVisible3}
          handlePress={() => {setModalVisible3(false)}}
          image={require('../../../assets/images/hjorslevvej.png')}
          containerStyles={""}
          contentWidth={360}
          contentHeight={320}
        />

        <Zoom 
          modalVisible={modalVisible4}
          handlePress={() => {setModalVisible4(false)}}
          image={require('../../../assets/images/ejby_mollevej.png')}
          containerStyles={""}
          contentWidth={360}
          contentHeight={320}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeLille