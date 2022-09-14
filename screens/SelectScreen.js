import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import NavBar from '../components/NavBar';

export default function SelectScreen() {
  return (
    <View className='bg-white  h-full'>
      <NavBar isHome='false' isAlg1='false' isAlg2='false' isSelect='true' isPrediction='false'/>
      <ScrollView
      vertical
      showVerticalScrollIndicator={false}
      className='flex px-6 z-0 space-y-1'
      contentContainerStyle={{
        paddingVertical: 15,
      }}>
			  <Text className='text-[#131314] font-black text-2xl tracking-wide'>Select Screen</Text>
        <Text className='text-sm text-[#666768]'>Hola</Text>
      </ScrollView>
    </View>
  )
}