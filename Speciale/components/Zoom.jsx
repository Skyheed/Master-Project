import { Image, View, TouchableOpacity, Modal} from 'react-native'
import React from 'react'
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view'

const Zoom = ({modalVisible, image, handlePress, containerStyles, contentWidth, contentHeight}) => {
  return (
    <Modal 
    visible={modalVisible}
    animationType="slide"
    onRequestClose={handlePress}
    >
      <View className="justify-center items-end">
        <TouchableOpacity
          className="rounded-3xl bg-white m-5"
          onPress={handlePress}
        >
          <Image 
            source={require('../assets/images/close.png')}
            style={{ resizeMode: 'stretch', width: 40, height: 40}}
          />
        </TouchableOpacity>
      </View>
      <View className={`border-2 rounded-xl mt-32 flex-shrink w-[360px] h-[320px] ${containerStyles}`}>
        <ReactNativeZoomableView
          maxZoom={4}
          minZoom={1}
          contentWidth={contentWidth}
          contentHeight={contentHeight}
          disablePanOnInitialZoom={true}
        >
          <Image
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
            source={image}
          />
        </ReactNativeZoomableView>
      </View>
    </Modal>
  )
}

export default Zoom