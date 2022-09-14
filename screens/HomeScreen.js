import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import NavBar from '../components/NavBar';

export default function HomeScreen() {
	return (
		<View className='bg-white h-full'>
			<NavBar isHome='true' isAlg1='false' isAlg2='false' isSelect='false' isPrediction='false'/>
      <ScrollView
      vertical
      showVerticalScrollIndicator={false}
      className='flex px-6 '
      contentContainerStyle={{
        paddingVertical: 15,
      }}>
        <View className='flex space-y-5'>
          <View className='flex-row items-end space-x-2'>
            <Image
              source={
                require('../assets/titanic.jpeg')
              }
              className='mt-2 rounded-full'
              style={{ width: 50, height: 50}}
            />
            <View>
              <Text className='text-xs text-[#666768] text-justify'>Reto</Text>
              <Text className='text-[#131314] font-black text-2xl tracking-wide'>Titanic</Text>
            </View>    
          </View>
          <View>
            <Text className='text-lg font-bold'>Presente</Text>
            <Text className='text-xs text-justify text-[#666768]'>Hoy en día, los algoritmos son necesarios para la mayoría de los campos.</Text>
            <Text className='text-xs text-justify text-[#666768]'>Se usan en las finanzas(para tener una idea de cómo se moverá la economía en un futuro), en la ciencia(para ver la viabilidad o éxito de un experimento), en la educación(para la enseñanza de carreras como la ingeniería).</Text>
          </View>
          <View>
            <Text className='text-lg font-bold'>Pasado</Text>
            <Text className='text-xs text-justify text-[#666768]'>El Titanic, también conocido como "el barco insumergible", se hundió después de chocar contra un iceberg en su viaje inaugural el 15 de abril de 1912.</Text>
            <Text className='text-xs text-justify text-[#666768]'>Desafortunadamente, no había suficientes botes salvavidas, lo que costó la vida de pasajeros y tribulantes que estuvieron a bordo. Pese a que algunas personas tuvieron suerte al sobrevivir, existe un grupo de personas que tenían más posibilidades de vivir que otros.</Text>
          </View>
          <View>
            <Text className='text-lg font-bold'>Reto</Text>
            <Text className='text-xs text-justify text-[#666768]'>Consiste en desarrollar el reto "Titanic - Aprendizaje automático a partir de desastres" el cuál tiene como objetivo construir un modelo predictivo que pueda reconocer a aquellas personas que tendrían más probabilidades de sobrevivir al naufragio más reconocido de la historia, tomando en cuenta los datos de las personas que estuvieron a bordo.</Text>
          </View>
          <View>
            <Text className='text-lg font-bold'>Equipo 4</Text>
            <Text className='text-xs text-justify text-[#666768]'>Hazel Astrid Ángeles Quevedo</Text>
            <Text className='text-xs text-justify text-[#666768]'>Andrick Jesús Pérez Landa</Text>
            <Text className='text-xs text-justify text-[#666768]'>Karen Rocío Macías Ávila</Text>
          </View>
        </View>
      </ScrollView>
		</View>
	)
}