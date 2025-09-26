import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base font-pmedium">{title}</Text>
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-gray-100 rounded-2xl focus:border-white-500 items-center flex-row">
        <TextInput
            className="flex-1 font-psemibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor={'#000'}
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {/* sæt images til password her */}
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField