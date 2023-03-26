import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Telas/Login';
import Cadastro from './src/Telas/Cadastro';
import Menu from './src/Telas/Menu';
import Esqueceu from './src/Telas/Esqueceu';
import BoasVindas2 from './src/Telas/BoasVindas2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='BoasVindas2'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Esqueceu" component={Esqueceu} />
        <Stack.Screen name="BoasVindas2" component={BoasVindas2} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}