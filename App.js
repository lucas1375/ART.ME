import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Telas/Login';
import Cadastro from './src/Telas/Cadastro';
import Menu from './src/Telas/Menu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}