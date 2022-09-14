import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar';

export default function AlgorithmOneScreen() {
  return (
    <View className='bg-white  h-full'>
      <NavBar isHome='false' isAlg1='true' isAlg2='false' isSelect='false' isPrediction='false'/>
      <ScrollView
      vertical
      showVerticalScrollIndicator={false}
      className='flex px-6 pb-15'
      contentContainerStyle={{
        paddingVertical: 15,
      }}>
        <View className='flex space-y-5'>
          <View className='flex-row items-end space-x-2'>
            <Image
              source={
                require('../assets/forest.jpg')
              }
              className='mt-2 rounded-full'
              style={{ width: 50, height: 50}}
            />
            <View>
              <Text className='text-xs text-[#666768] text-justify'>Algoritmo</Text>
              <Text className='text-[#131314] font-black text-2xl tracking-wide'>Random Forest</Text>
            </View>
          </View>
          <View>
            <Text className='text-lg font-bold'>Qué es</Text>
            <Text className='text-xs text-justify text-[#666768]'>Es un algoritmo de machine learning, el cual combina la salida de muchos árboles de decisión para conseguir una salida única.</Text>
            <Text className='text-xs text-justify text-[#666768]'>Este usa muchos árboles de decisiones, lo que favorece el encontrar una mejor solución, ya que puede compensar el error de algunos árboles de decisión al comparar las respuestas y conseguir una que sea mucho mejor. </Text>
          </View>
          <View>
            <Text className='text-lg font-bold'>Justificación</Text>
            <Text className='text-xs text-justify text-[#666768]'>Este algoritmo, como beneficios, proporciona un menor riesgo de overfitting y una menor cantidad de falsos positivos/negativos; su facilidad de uso y su adaptabilidad son puntos clave para ser una buena opción para este problema.</Text>
            <Text className='text-xs text-justify text-[#666768]'>Texto 2</Text>
          </View>
          <View>
            <Text className='text-lg font-bold'>Resultados</Text>
            <Text className='text-xs text-justify text-[#666768]'>A continuación se presentan los valores de predicción finales que obtuvimos con el modelo.</Text>
            <View className='flex space-y-2'>
              <View>
                <Text className='text-md font-bold pt-2'>Precisión</Text>
                <Text className='text-xs text-justify text-[#666768]'>0.82</Text>
              </View>
              <View>
                <Text className='text-md font-bold'>Matriz de confusión</Text>
                <Image
                source={
                  require('../assets/confusion_alg1.jpeg')
                }
                className='mt-2'
                />
              </View>
              <View>
                <Text className='text-md font-bold'>Carcterística Operativa del Receptor</Text>
                <Image
                source={
                  require('../assets/roc_alg1.jpeg')
                }
                className='mt-2'
                style={{ width: 360, height: 210}}
                />
              </View>
              <View>
                <Text className='text-md font-bold'>Área bajo la curva</Text>
                <Text className='text-xs text-justify text-[#666768]'>0.80</Text>
              </View>
              <View>
                <Text className='text-md font-bold'>Puntaje de Kaggle</Text>
                <Text className='text-xs text-justify text-[#666768]'>0.74</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}