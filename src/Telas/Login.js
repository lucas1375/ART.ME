import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView
 } from 'react-native';

 const  Login = ({navigation}) =>  {
  return (
    
    <View style={styles.tela}>
        
      <Image source={require('../../assets/Imagens/artmelogo4.png')} style={styles.image}/> 

        <View style={styles.container}>   

            <View style ={ styles.titulo}>
                <Text style={styles.logo}>Login</Text>
                <TouchableOpacity style= {styles.botaocadastrar} onPress = {() => navigation.navigate('Cadastro')}>
                <Text style = {styles.textocadastrar}>Cadastrar</Text>
                </TouchableOpacity>
            </View>


      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#F97316"
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Senha"
          placeholderTextColor="#F97316"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity  onPress={()=> navigation.navigate('Esqueceu')}>        
      <Text style={styles.forgot}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButton} onPress={()=> navigation.navigate('Menu')}>      
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
      
      </View>
    
    </View>
  

  );
}

const styles = StyleSheet.create({

  
  container: {
    borderRadius: 30,
    paddingVertical: 20,
    width: '80%',
    backgroundColor: '#FFC700',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Botão de login
  logo: {
    textAlign: 'center',
     flex: 1,
    borderRadius: 45,
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F97316',
    padding: 20,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    marginBottom: 40,
  },

  //input do Email e Senha
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 45,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },

  // Texto do Placeholder do Email e Senha
  inputText: {
    fontSize: 19,
    height: 50,
    color: 'orange',
  },

  //Botão de Entrar
  loginButton: {
    textAlign: 'center',
    width: '50%',
    height: 15,
    borderRadius: 40,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F97316',
    padding: 20,
    fontSize: 10,
    margin: 30,
  },

  // Fonte do Botão Entrar
  loginText: {
    fontSize: 19,
    color: 'white',
    fontWeight: 'bold'
  },

  // Frase de 'Esqueceu a senha'
  forgot: {
    color: '#F97316',
    fontSize: 17,
  },

  tela: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //imagem
  image: {  
  height: 100,
   width: 210,
   margin: 30
   
  },

  //Texto do botão cadastrar
  textocadastrar: {
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#F97316',
  },

// Botão de cadastro
  botaocadastrar: {
   borderWidth: 1,
   borderColor: '#F97316',
    flex : 1,
   width: 180,
   height: 40,
  borderRadius: 70,
  paddingHorizontal: 20,
  backgroundColor: 'white',
  padding: 20,
  marginBottom: 40,
  },

  titulo: {
   flexDirection: 'row',
   flex:1
  }
  
});

export default Login;