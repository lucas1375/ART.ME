import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView
 } from 'react-native';

const  Cadastro = () => {
  return (
  
    <View style={styles.tela}>
        
      <Image source={require('../../assets/Imagens/artmelogo4.png')} style={styles.image}/> 
      <View style={styles.container}>
      <Text style={styles.logo}>Cadastrar</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nome"
          placeholderTextColor="#F97316"
        />
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
      <View style= {styles.campos}>
      <View style={styles.inputcurto}>
        <TextInput
          style={styles.inputText}
          placeholder="Telefone"
          placeholderTextColor="#F97316"
        />
      </View>
      <View style={styles.inputcurto}>
        <TextInput
          style={styles.inputText}
          placeholder="Estado"
          placeholderTextColor="#F97316"
             />
            </View>
      </View>
      <Text style={styles.forgot}>Esqueceu a senha?</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        
      </TouchableOpacity>
      </View>
    </View>
  

  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 70,
    paddingVertical: 20,
    width: '80%',
    backgroundColor: '#FFC700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    textAlign: 'center',
    width: '50%',
    borderRadius: 70,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F97316',
    padding: 20,
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    fontSize: 22,
    height: 50,
    color: 'orange',
  },
  loginButton: {
    textAlign: 'center',
    width: '50%',
    borderRadius: 70,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F97316',
    padding: 20,
    fontWeight: 'bold',
    margin: 30,
  },
  loginText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  forgot: {
    color: '#F97316',
    fontSize: 22,
  },
  tela: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
  
  height: 100,
   width: 210,
   margin: 30
   
  },
  campos: {
    flexDirection: 'row',
    flex:1,
    justifyContent: 'center'
    
     
   },

   inputcurto: {
    width: '25%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 20,
  },
   
});

export default Cadastro;