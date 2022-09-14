import { View, Text, ScrollView, Image } from 'react-native';
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
			  <View className='flex space-y-5'>
          <View className='flex-row items-end space-x-2'>
            <Image
              source={
                require('../assets/selection.jpg')
              }
              className='mt-2 rounded-full'
              style={{ width: 60, height: 60}}
            />
            <View>
              <Text className='text-xs text-[#666768] text-justify'>Random Forest</Text>
              <Text className='text-[#131314] font-black text-2xl tracking-wide'>Selección de algoritmo</Text>
            </View>
          </View>
          <View>
            <Text className='text-lg font-bold'>Justificación</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Tomando en cuenta que conocemos las categorías que queremos obtener, es decir, si una persona sobrevive o no sobrevive, estamos hablando de un <Text className='text-[#5c0cbc] font-bold'>aprendizaje supervisado</Text> y los algoritmos seleccionados cumplen con esa característica.</Text>
            <Text className='text-md font-bold pt-2'>Método de comparación</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Al comparar el rendimiento general de los modelos, se consideraron como principales métricas la precisión, el ROC y el AUC.</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>En este caso, se tomaron los archivos de train y test para probar el modelo y para determinar si este <Text className='text-[#5c0cbc] font-bold'>predice correctamente en datos de entrenamiento</Text> se analizaron todas las métricas previamente mencionadas.</Text>
            <Text className='text-md font-bold pt-2'>Métricas</Text>
            <Text className='text-xs font-bold pt-2'>Precisión</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Es un buen promedio general de qué tan bien el modelo puede predecir y calcular.</Text>
            <Text className='text-xs font-bold pt-2'>ROC</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Después de ejecutar el conjunto de datos simulado a través de cada modelo, los resultados pueden ser representados <Text className='text-[#5c0cbc] font-bold'>gráficamente</Text> utilizando la curva característica operativa del receptor.</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>La curva ROC es un gráfico con el eje <Text className='text-[#5c0cbc] font-black'>x</Text> de 0 a 1 de la tasa de <Text className='text-[#5c0cbc] font-bold'>falsos positivos</Text> y el eje <Text className='text-[#5c0cbc] font-black'>y</Text> de 0 a 1 de la tasa de <Text className='text-[#5c0cbc] font-bold'>verdaderos positivos</Text> en varios ajustes de <Text className='text-[#5c0cbc] font-bold'>umbral</Text>. Un predictor perfecto tendría una tasa de falsos positivos de 0 y una tasa positiva verdadera de 1.</Text>
            <Text className='text-xs font-bold pt-2'>AUC</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Cuando se grafica sobre una serie de umbrales, el área bajo la curva puede proporcionar un <Text className='text-[#5c0cbc] font-bold'>valor único</Text> que brinda información acerca de qué tan bien el modelo está clasificando.</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>El AUC es más descriptivo que precisión porque es un <Text className='text-[#5c0cbc] font-bold'>equilibrio de precisión y tasa de falsos positivos.</Text></Text>
            <Text className='text-xs font-bold pt-2'>Matriz de confusión</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>A pesar de no ser una de las métricas previamente mencionadas, se tomó en cuenta debido a que al igual que los anteriores parámetros nos permite visualizar el desempeño de nuestro algoritmo, en particular, sirve para mostrar de forma explícita cuando una clase es <Text className='text-[#5c0cbc] font-bold'>confundida con otra</Text>, lo cual, nos permite trabajar de forma separada con distintos tipos de <Text className='text-[#5c0cbc] font-bold'>error.</Text></Text>
            <Text className='text-md font-bold pt-2'>Conclusión</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Con todo esto en cuenta y al utilizar la misma <Text className='text-[#5c0cbc] font-bold'>limpieza de datos</Text> con los modelos de Logistic Regression y con Random Forest, se observó que el segundo algorimto tiene un <Text className='text-[#5c0cbc] font-bold'>mejor desempeño</Text> en las métricas principales, lo que se puede deducir para este caso especifico de datos que <Text className='text-[#5c0cbc] font-bold'>Random Forest</Text> es el mejor algoritmo para predecir a aquellas personas que podrían sobrevivir ante el hundimiento del Titanic.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}