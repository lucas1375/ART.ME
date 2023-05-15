import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Telas/Login';
import Cadastro from './src/Telas/Cadastro';
import Menu from './src/Telas/Menu';
import Esqueceu from './src/Telas/Esqueceu';
import BoasVindas2 from './src/Telas/BoasVindas2';
import Perfil from './src/Telas/Perfil';
import Categoria from './src/Telas/Categoria';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const StackNavegacao =  () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='Categoria'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Menu" component={TabNavegacao} />
        <Stack.Screen name="Esqueceu" component={Esqueceu} />
        <Stack.Screen name="Perfil" component={Perfil} options={{title:'Minha Conta', headerTitleAlign: 'center'}} />
        <Stack.Screen name="BoasVindas2" component={BoasVindas2} options={{headerShown:false}} />
        <Stack.Screen name="Categoria" component={Categoria} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const TabNavegacao =  () => {
  return (
    <NavigationContainer independent={true}>
       <Tab.Navigator initialRouteName='Menu'>
        <Tab.Screen name="Menu" component={Menu} options={{tabBarIcon: ({size, color }) => (
          <MaterialCommunityIcons name='home' size= {12} color="#000000"/>
        ) }} />
        <Tab.Screen name="Perfil" component={Perfil} options={{title:'Minha Conta', headerTitleAlign: 'center'}} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default StackNavegacao;