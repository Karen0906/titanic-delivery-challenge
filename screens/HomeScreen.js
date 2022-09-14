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
              style={{ width: 60, height: 60}}
            />
            <View>
              <Text className='text-xs text-[#666768] text-justify'>Reto</Text>
              <Text className='text-black font-black text-2xl tracking-wide'>Titanic</Text>
            </View>    
          </View>
          <View>
            <Text className='text-lg font-bold'>Importancia</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Hoy en día los algoritmos son <Text className='text-[#5c0cbc] font-bold'>necesarios</Text> para la mayoría de los campos, en específico, los de machine learning se aplican en áreas como reconocimiento facial, diagnósticos médicos, clasificación de secuencias de ADN, predicción de tendencias, recomendaciones, vehículos inteligentes, redes sociales, asistentes virtuales, búsquedas, ciberseguridad, entre otros, por lo que es relevante <Text className='text-[#5c0cbc] font-bold'>conocerlos y aplicarlos para eficientar procesos e innovar.</Text></Text>
          </View>
          <View>
            <Text className='text-lg font-bold'>Machine Learning</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Es una disciplina en el campo de inteligencia artificial la cual hace uso de algoritmos que le permiten a las computadoras <Text className='text-[#5c0cbc] font-bold'>identificar patrones en datos masivos y generar predicciones</Text>, lo cuál permite que puedan realizar acciones o trabajos específicos sin necesidad de ser programadas. A continuación se explican las 3 categorías de algoritmos que existen en esta área.</Text>
            <Text className='text-md font-bold pt-2'>Aprendizaje supervisado</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Son algoritmos que aprenden previamente sobre un sistema de etiquetas asociadas a datos y a partir de ellas predicen o toman decisiones.</Text>
            <Text className='text-md font-bold pt-2'>Aprendizaje no supervisado</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Son algoritmos que no cuentan con aprendizaje previo y que a partir de los datos encuentran patrones para organizar.</Text>
            <Text className='text-md font-bold pt-2'>Aprendizaje por refuerzo</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Son algoritmos que aprenden a partir de su experiencia para tomar decisiones en distintas situaciones por medio de pruebas y errores con recompensas.</Text>
          </View>
          <View>
            <Text className='text-lg font-bold'>Historia</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>El Titanic, también conocido como "el barco insumergible", se hundió después de chocar contra un iceberg en su viaje inaugural el 15 de abril de 1912. Desafortunadamente, no había suficientes botes salvavidas para todos, lo que costó la vida de bastantes pasajeros y tribulantes que estuvieron a bordo durante el incidente.</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Pese a que algunas personas tuvieron suerte, también existió otro grupo que por ciertas <Text className='text-[#5c0cbc] font-bold'>características</Text>, tenían más posibilidades de sobrevivir.</Text>
          </View>
          <View>
            <Text className='text-lg font-bold'>Reto</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Consiste en desarrollar el reto <Text className='text-[#5c0cbc] font-bold'>"Titanic - Aprendizaje automático a partir de desastres"</Text> el cuál tiene como objetivo construir un modelo predictivo que pueda reconocer a aquellas personas que tendrían más probabilidades de sobrevivir al naufragio más reconocido de la historia, tomando en cuenta los datos de las personas que estuvieron a bordo.</Text>
          </View>
          <View>
            <Text className='text-lg font-bold'>Equipo 4</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Hazel Astrid Ángeles Quevedo</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Andrick Jesús Pérez Landa</Text>
            <Text className='text-xs text-justify text-[#3D3D3E]'>Karen Rocío Macías Ávila</Text>
          </View>
        </View>
      </ScrollView>
		</View>
	)
}