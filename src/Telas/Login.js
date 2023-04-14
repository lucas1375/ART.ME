import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView
 } from 'react-native';
import Estilo from './Estilo';

 const  Login = ({navigation}) =>  {
  return (
    
    <View style={Estilo.tela}>
        
      <Image source={require('../../assets/Imagens/artmelogo4.png')} style={Estilo.image}/> 

        <View style={Estilo.containerLogin}>   

            <View style ={ Estilo.titulo}>
                <Text style={Estilo.logo}>Login</Text>
                <TouchableOpacity style= {Estilo.botaocadastrar} onPress = {() => navigation.navigate('Cadastro')}>
                <Text style = {Estilo.textocadastrar}>Cadastrar</Text>
                </TouchableOpacity>
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

      <TouchableOpacity  onPress={()=> navigation.navigate('Esqueceu')}>        
      <Text style={Estilo.forgot}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={Estilo.loginButton} onPress={()=> navigation.navigate('Menu')}>      
        <Text style={Estilo.loginText}>Entrar</Text>
      </TouchableOpacity>
      
      </View>
    
    </View>
  

  );
}

export default Login;