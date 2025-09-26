import { Image, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Favourite = ({id, info, containerStyles, isLoading, imgStyles}) => {
    const [imageSrc, setImageSrc] = useState(require('../assets/images/star-outline.png'))
    const [favourited, setFavourited] = useState(false)
    
    const loadData = async () => {
        try {
            const favouritedStatus = await AsyncStorage.getItem(id);
            if (favouritedStatus !== null) {
                // If item is favourited, set the star to filled
                setFavourited(true)
                setImageSrc(require('../assets/images/star.png'));
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        loadData(); // Load the favourited state on component mount
    }, []);


    const favourite = async () => {
        if(!favourited){
            await storeData(id, info)
            setImageSrc(require('../assets/images/star.png'))
        } else{
            await removeData(id)
            setImageSrc(require('../assets/images/star-outline.png'))
        }

        // Update the local state for favourited status
        setFavourited(!favourited)

        await AsyncStorage.setItem("favouritesUpdated", JSON.stringify(true))
    }
    
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
    <TouchableOpacity
        onPress={favourite}
        activeOpacity={0.5}
        className={`justify-center items-center border-2 rounded-full bg-black mb-1.5 ml-5 ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
    >
      <Image
        style={{ resizeMode: 'stretch', width: 40, height: 40}}
        source={imageSrc}
      />
    </TouchableOpacity>
  )
}

export default Favourite