import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

// Ny sexy version ;)
const HeaderTabs = ({ leftPress }) => {

  return (
    <View className="flex flex-row mt-10 mb-5 ml-6 bg-white p-1">  
      <TouchableOpacity onPress={leftPress} className="p-2 w-20 h-5">
        <Image
            source={require('../assets/images/arrowBack.png')}
            style={{ resizeMode: 'contain', width: 40, marginLeft: 10, marginTop: -45}}
        />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderTabs