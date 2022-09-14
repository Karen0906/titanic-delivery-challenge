import { View, Text, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function NavBar({isHome, isAlg1, isAlg2, isSelect, isPrediction}) {

  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();
  isHome = isHome.toLowerCase() === 'true';
  isAlg1 = isAlg1.toLowerCase() === 'true';
  isAlg2 = isAlg2.toLowerCase() === 'true';
  isSelect = isSelect.toLowerCase() === 'true';
  isPrediction = isPrediction.toLowerCase() === 'true';

  return (
    <>
    {!isOpen ?
      (
        <TouchableOpacity
        onPress={()=>setIsOpen(!isOpen)}
        className='absolute left-6 top-12 z-30'>
          <Bars3Icon size={25} color='white'/>
        </TouchableOpacity>
      ) : 
      (
        <TouchableOpacity
        onPress={()=>setIsOpen(!isOpen)}
        className='absolute left-6 top-12 z-30'
        >
          <XMarkIcon size={25} color='white'/>
        </TouchableOpacity>
      )
    }
    <View className='bg-[#131314] h-24 z-10'>
      <View className={`bg-[#131314] w-64 h-[10000px] px-6 z-10 ${isOpen ? 'translate-x-0' : 'translate-x-96'} ease-in-out duration-700`}>
        <View className='pt-24 flex space-y-4'>
          <TouchableOpacity 
          onPress={()=>{
            navigation.navigate('Home')
          }}
          >
            <Text className={`text-xl font-bold ${isHome ? 'text-white underline underline-offset-8': 'text-[#666768]'}`}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>{
            navigation.navigate('AlgorithmOne')
          }}
          >
            <Text className={`text-xl font-bold ${isAlg1 ? 'text-white underline': 'text-[#666768]'}`}>Algoritmo uno</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>{
            navigation.navigate('AlgorithmTwo')
          }}
          >
            <Text className={`text-xl font-bold ${isAlg2 ? 'text-white underline': 'text-[#666768]'}`}>Algoritmo dos</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>{
            navigation.navigate('Select')
          }}
          >
            <Text className={`text-xl font-bold ${isSelect ? 'text-white underline': 'text-[#666768]'}`}>Selección</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>{
            navigation.navigate('Prediction')
          }}
          >
            <Text className={`text-xl font-bold ${isPrediction ? 'text-white underline': 'text-[#666768]'}`}>Predicción</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </>
  )
}