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
              style={{ width: 60, height: 60}}
            />
            <View>
              <Text className='text-xs text-[#666768] text-justify'>Algoritmo</Text>
              <Text className='text-[#131314] font-black text-2xl tracking-wide'>Logistic Regression</Text>
            </View>
          </View>
          <View>
            <Text className='text-lg font-bold'>¿Qué es?</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Es un algoritmo de machine learning para aprendizaje supervisado que clasifica datos en categorías o clases al <Text className='text-[#5c0cbc] font-bold'>predecir la probabilidad de que una observación caiga en una clase particular en función de sus características</Text>. A pesar de que se puede extender a más de dos categorías, la regresión logística se usa a menudo para hacer una clasificación binaria.</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Funciona transformando el predictor lineal mediante la función sigmoidea para que los valores estén entre 0 y 1 para interpretarlos como probabilidades que después se comparen con un umbral para predecir una clase <Text className='text-[#5c0cbc] font-black'>y</Text> basada en <Text className='text-[#5c0cbc] font-black'>x</Text>.</Text>
          </View>
          <View>
            <Text className='text-lg font-bold'>Justificación</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Ya que este algoritmo se usa habitualmente para determinar o <Text className='text-[#5c0cbc] font-bold'>clasificar entre dos categorías</Text> se determinó que su uso es apropiado para el desarrollo del reto.</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Por otra parte, se seleccionó este modelo debido a que al graficar los valores y ajustarlos mediante una función se puede buscar un nuevo punto que, tomando en cuenta el umbral <Text className='text-[#5c0cbc] font-bold'>(determinado por la persona que realiza el modelo)</Text> puede determinar con mayor precisión las categorías buscadas. Además, al ser una función que se puede graficar, dependiendo de la cantidad de características diferentes que tienen los datos es un <Text className='text-[#5c0cbc] font-bold'>modelo visual</Text> en el que se puede plasmar el nuevo <Text className='text-[#5c0cbc] font-bold'>sujeto a predecir</Text> y  <Text className='text-[#5c0cbc] font-bold'>localizarlo</Text> en un punto en concreto dentro de la gráfica.</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>La regresión logística es más fácil de implementar, interpretar, eficiente de entrenar y es menos propensa al overfitting.</Text>
          </View>
          <View>
            <Text className='text-lg font-bold'>Resultados</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>A continuación se presentan los valores de predicción finales que obtuvimos con el modelo.</Text>
            <View className='flex space-y-2'>
              <View>
                <Text className='text-md font-bold pt-2'>Precisión</Text>
                <Text className='text-xs text-justify text-[#3D3D3E]'>0.81</Text>
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
                <Text className='text-xs text-justify text-[#3D3D3E]'>0.80</Text>
              </View>
              <View>
                <Text className='text-md font-bold'>Puntaje de Kaggle</Text>
                <Text className='text-xs text-justify text-[#3D3D3E]'>0.76</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}