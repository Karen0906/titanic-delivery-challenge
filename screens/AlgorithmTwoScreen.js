import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import NavBar from '../components/NavBar';

export default function AlgorithmTwoScreen() {
  return (
    <View className='bg-white  h-full'>
      <NavBar isHome='false' isAlg1='false' isAlg2='true' isSelect='false' isPrediction='false'/>
      <ScrollView
      vertical
      showVerticalScrollIndicator={false}
      className='flex px-6 z-0 space-y-1'
      contentContainerStyle={{
        paddingVertical: 15,
      }}>
			  <View className='flex space-y-5'>
          <View className='flex-row items-end space-x-2'>
            <Image
              source={
                require('../assets/logistic.jpg')
              }
              className='mt-2 rounded-full'
              style={{ width: 50, height: 50}}
            />
            <View>
              <Text className='text-xs text-[#666768] text-justify'>Algoritmo</Text>
              <Text className='text-[#131314] font-black text-2xl tracking-wide'>Logistic Regression</Text>
            </View>
          </View>
          <View>
            <Text className='text-lg font-bold'>Qué es</Text>
            <Text className='text-xs text-justify text-[#666768]'>Hoy en día, los algoritmos son necesarios para la mayoría de los campos.</Text>
            <Text className='text-xs text-justify text-[#666768]'>Se usan en las finanzas(para tener una idea de cómo se moverá la economía en un futuro), en la ciencia(para ver la viabilidad o éxito de un experimento), en la educación(para la enseñanza de carreras como la ingeniería).</Text>
          </View>
          <View>
            <Text className='text-lg font-bold'>Justificación</Text>
            <Text className='text-xs text-justify text-[#666768]'>Hoy en día, los algoritmos son necesarios para la mayoría de los campos.</Text>
            <Text className='text-xs text-justify text-[#666768]'>Se usan en las finanzas(para tener una idea de cómo se moverá la economía en un futuro), en la ciencia(para ver la viabilidad o éxito de un experimento), en la educación(para la enseñanza de carreras como la ingeniería).</Text>
          </View>
          <View>
            <Text className='text-lg font-bold'>Resultados</Text>
            <Text className='text-xs text-justify text-[#666768]'>A continuación se presentan los valores de predicción finales que obtuvimos con el modelo.</Text>
            <View className='flex space-y-2'>
              <View>
                <Text className='text-md font-bold pt-2'>Precisión</Text>
                <Text className='text-xs text-justify text-[#666768]'>0.81</Text>
              </View>
              <View>
                <Text className='text-md font-bold'>Matriz de confusión</Text>
                <Image
                source={
                  require('../assets/confusion_alg2.jpeg')
                }
                className='mt-2'
                />
              </View>
              <View>
                <Text className='text-md font-bold'>Carcterística Operativa del Receptor</Text>
                <Image
                source={
                  require('../assets/roc_alg2.jpeg')
                }
                className='mt-2'
                style={{ width: 349, height: 220}}
                />
              </View>
              <View>
                <Text className='text-md font-bold'>Área bajo la curva</Text>
                <Text className='text-xs text-justify text-[#666768]'>0.80</Text>
              </View>
              <View>
                <Text className='text-md font-bold'>Puntaje de Kaggle</Text>
                <Text className='text-xs text-justify text-[#666768]'>0.76</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}