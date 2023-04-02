import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView
 } from 'react-native';

const  Cadastro = ({navigation}) => {
  return (
  
    <View style={styles.tela}>
        
      <Image source={require('../../assets/Imagens/artmelogo4.png')} style={styles.image}/> 

      <View style={styles.container}>
        
          <View style ={ styles.titulo}>
                <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
                <Text style={styles.logo}>Login</Text>
                </TouchableOpacity>                
                <Text style = {styles.textocadastrar}>Cadastrar</Text>
          </View>

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

  logo: {  
    textAlign: 'center',
    borderRadius: 70,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F97316',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
    marginBottom: 40,
  },

  //Texto do botão cadastrar
    textocadastrar: {
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#F97316',
    borderWidth: 1,
    borderColor: '#F97316',
    flex : 1,
    width: 130,
    height: 50,
    borderRadius: 70,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    padding: 10,
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

  inputText: {
    fontSize: 19,
    height: 50,
    color: 'orange',
  },
  
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

  loginText: {
    fontSize: 19,
    color: 'white',
    fontWeight: 'bold'
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
    width: '20%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 45,
    marginBottom: 20,
    justifyContent: 'center',
    marginHorizontal: 7,
    padding: 20,
    fontSize: 19,
  },
  titulo: {
    flexDirection: 'row',
    flex:1
   }
   
});

export default Cadastro;