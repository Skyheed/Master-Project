import { TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

// Ny frÃ¦k og sexy header, i mean god damn ;)
const Header = ({ centerPress, leftPress, rightPress }) => {

  return (
    <View className="flex flex-row mt-10 mb-2 bg-white justify-center p-1">  
      <TouchableOpacity onPress={leftPress} className="p-2 w-20 h-5">
        <Image
            source={require('../assets/images/arrowBack.png')}
            style={{ resizeMode: 'contain', width: 40, marginLeft: 10, marginTop: -45}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={centerPress} className="p-2 w-20 h-5 ml-40">
        <Image
            source={require('../assets/images/search.png')}
            style={{ resizeMode: 'contain', width: 40, marginLeft: 10, marginTop: -45}}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={rightPress} className="p-2 w-20 h-5">    
        <Image
            source={require('../assets/images/house.png')}
            style={{ resizeMode: 'contain', width: 40, marginLeft: 10, marginTop: -45}}
        />
      </TouchableOpacity> */}
    </View>
  )
}

export default Header