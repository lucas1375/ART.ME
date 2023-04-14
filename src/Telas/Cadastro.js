import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView
 } from 'react-native';
 import Estilo from './Estilo';

const  Cadastro = ({navigation}) => {
  return (
  
    <View style={Estilo.tela}>
        
      <Image source={require('../../assets/Imagens/artmelogo4.png')} style={Estilo.image}/> 

      <View style={Estilo.containerCadastro}>
        
          <View style ={ Estilo.titulo}>
                <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
                <Text style={Estilo.logoCadastro}>Login</Text>
                </TouchableOpacity>                
                <Text style = {Estilo.logo}>Cadastrar</Text>
          </View>

          <View style={Estilo.inputView}>
            <TextInput
          style={Estilo.inputText}
          placeholder="Nome"
          placeholderTextColor="#F97316"
            />
          </View>

        <View style={Estilo.inputView}>
        <TextInput
          style={Estilo.inputText}
          placeholder="Email"
          placeholderTextColor="#F97316"
        />
        </View>

        <View style={Estilo.inputView}>
        <TextInput
          style={Estilo.inputText}
          placeholder="Senha"
          placeholderTextColor="#F97316"
          secureTextEntry={true}
        />
        </View>

        <View style= {Estilo.campos}>
        <View style={Estilo.inputcurto}>
        <TextInput
          style={Estilo.inputText}
          placeholder="Telefone"
          placeholderTextColor="#F97316"
        />

        </View>
        <View style={Estilo.inputcurto}>
        <TextInput
          style={Estilo.inputText}
          placeholder="Estado"
          placeholderTextColor="#F97316"
             />
        </View>

      </View>

      <TouchableOpacity style={Estilo.loginButton} onPress={()=> navigation.navigate('Menu')}>      
        <Text style={Estilo.loginText}>Entrar</Text>
      </TouchableOpacity>

      </View>
    </View>
  

  );
}

export default Cadastro;