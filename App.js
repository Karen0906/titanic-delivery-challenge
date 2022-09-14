import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen  from './screens/HomeScreen';
import AlgorithmOneScreen from './screens/AlgorithmOneScreen';
import AlgorithmTwoScreen from './screens/AlgorithmTwoScreen';
import SelectScreen from './screens/SelectScreen';
import PredictionScreen from './screens/PredictionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen}
          options={{presentation: 'fullScreenModal', headerShown: false}}/>
          <Stack.Screen name='AlgorithmOne' component={AlgorithmOneScreen}
          options={{presentation: 'fullScreenModal', headerShown: false}}/>
          <Stack.Screen name='AlgorithmTwo' component={AlgorithmTwoScreen}
          options={{presentation: 'fullScreenModal', headerShown: false}}/>
          <Stack.Screen name='Select' component={SelectScreen}
          options={{presentation: 'fullScreenModal', headerShown: false}}/>
          <Stack.Screen name='Prediction' component={PredictionScreen}
          options={{presentation: 'fullScreenModal', headerShown: false}}/>
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}