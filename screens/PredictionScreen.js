import { View, Text, ScrollView, Button, Image } from 'react-native';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import axios from 'axios';

export default function PredictionScreen() {

  const [prediction, setPrediction] = useState();

  return (
    <View className='bg-white  h-full'>
      <NavBar isHome='false' isAlg1='false' isAlg2='false' isSelect='false' isPrediction='true'/>
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
                require('../assets/random.jpg')
              }
              className='mt-2 rounded-full'
              style={{ width: 50, height: 50}}
            />
            <View>
              <Text className='text-xs text-[#666768] text-justify'>Algoritmo: Random Forest</Text>
              <Text className='text-[#131314] font-black text-2xl tracking-wide'>Predicción</Text>
            </View>
          </View>
          <View>
            <Formik 
            initialValues={{passengerid:'', pclass:'', name:'', sex:'', age:'', sibsp:'', parch:'', ticket:'', fare:'', cabin:'', embarked:''}}
            onSubmit={values=>
            axios.post('http://10.48.229.5:5000/predict',{
              passengerid: values.passengerid,
              pclass: values.pclass,
              name: values.name,
              sex: values.sex,
              age: values.age, 
              sibsp: values.sibsp,
              parch: values.parch,
              ticket: values.ticket,
              fare: values.fare,
              cabin: values.cabin,
              embarked: values.embarked
            }).then(response => {setPrediction(response.data)}).catch(error=> console.log(error))}
            >
            {({handleChange, handleBlur, handleSubmit, values}) => (
            <View className='flex space-y-3'>
              <View className='flex space-y-1'>
                <Text className='text-md font-bold'>Id del pasajero</Text>
                <TextInput
                onChangeText={handleChange('passengerid')}
                onBlur={handleBlur('passengerid')}
                value={values.passengerid}
                placeholder="Ej. 300"
                className='text-xs h-12 bg-white border border-[#666768]'
                />
              </View>
              <View className='flex space-y-1'>
                <Text className='text-md font-bold'>Clase del pasajero</Text>
                <TextInput
                onChangeText={handleChange('pclass')}
                onBlur={handleBlur('pclass')}
                value={values.pclass}
                placeholder="Opciones: 1, 2, 3"
                className='text-xs h-12 bg-white border border-[#666768]'
                />
              </View>
              <View className='flex space-y-1'>
                <Text className='text-md font-bold'>Nombre</Text>
                <TextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="Ej. Braund, Mr. Owen Harris"
                className='text-xs h-12 bg-white border border-[#666768]'
                />
              </View>
              <View className='flex space-y-1'>
                <Text className='text-md font-bold'>Sexo</Text>
                <TextInput
                onChangeText={handleChange('sex')}
                onBlur={handleBlur('sex')}
                value={values.sex}
                placeholder="Opciones: 0-hombre, 1-mujer"
                className='text-xs h-12 bg-white border border-[#666768]'
                />
              </View>
              <View className='flex space-y-1'>
                <Text className='text-md font-bold'>Edad</Text>
                <TextInput
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values.age}
                placeholder="Ej. 21"
                className='text-xs h-12 bg-white border border-[#666768]'
                />
              </View>
              <View className='flex space-y-1'>
                <Text className='text-md font-bold'>Cantidad de herman@s + espos@ a bordo</Text>
                <TextInput
                onChangeText={handleChange('sibsp')}
                onBlur={handleBlur('sibsp')}
                value={values.sibsp}
                placeholder="Ej. 1"
                className='text-xs h-12 bg-white border border-[#666768]'
                />
              </View>
              <View className='flex space-y-1'>
                <Text className='text-md font-bold'>Cantidad de padres o hij@s a bordo</Text>
                <TextInput
                onChangeText={handleChange('parch')}
                onBlur={handleBlur('parch')}
                value={values.parch}
                placeholder="Ej.5"
                className='text-xs h-12 bg-white border border-[#666768]'
                />
              </View>
              <View className='flex space-y-1'>
                <Text className='text-md font-bold'>Número de ticket</Text>
                <TextInput
                onChangeText={handleChange('ticket')}
                onBlur={handleBlur('ticket')}
                value={values.ticket}
                placeholder="Ej. 1001"
                className='text-xs h-12 bg-white border border-[#666768]'
                />
              </View>
              <View className='flex space-y-1'>
                <Text className='text-md font-bold'>Tarifa de boleto</Text>
                <TextInput
                onChangeText={handleChange('fare')}
                onBlur={handleBlur('fare')}
                value={values.fare}
                placeholder="Ej. 700"
                className='text-xs h-12 bg-white border border-[#666768]'
                />
              </View>
              <View className='flex space-y-1'>
                <Text className='text-md font-bold'>Cabina</Text>
                <TextInput
                onChangeText={handleChange('cabin')}
                onBlur={handleBlur('cabin')}
                value={values.cabin}
                placeholder="Ej. C123"
                className='text-xs h-12 bg-white border border-[#666768]'
                />
              </View>
              <View className='flex space-y-1'>
                <Text className='text-md font-bold'>Embarcad@</Text>
                <TextInput
                onChangeText={handleChange('embarked')}
                onBlur={handleBlur('embarked')}
                value={values.embarked}
                placeholder="Opciones: 0 = Cherbourg, 1 = Queenstown, 2 = Southampton"
                className='text-xs h-12 bg-white border border-[#666768]'
                />
              </View>
              <View className='flex items-center p-2 space-y-3'>
                <Button onPress={handleSubmit} title=' Predecir ' color='#345b54'/>
                <View className='flex space-y-1 items-center'>
                  <Text className='text-lg font-bold'>Predicción</Text>
                  <Text className='text-xs text-justify text-[#666768]'>La predicción devuelve un 0 y 1 que corresponde a morir o sobrevivir respectivamente.</Text>
                  <Text className='text-xs text-justify text-[#345b54] font-extrabold'>{prediction}</Text>
                </View>
              </View>
            </View>
            )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}