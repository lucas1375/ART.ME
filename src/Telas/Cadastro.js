import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Formik } from 'formik';
 import * as yup from "yup"; 
 import Axios from "axios";
 import Estilo from './Estilo';

const  Cadastro = ({navigation}) => {
  return (
  
  //   // Axios Cadastro
  //  handleClickCadastro = (values) => {
  //   Axios.post("http://localhost:3005/cadastrarUsuario",{
  //     nome: values.nome,
  //     uf: values.uf,
  //     telefone: values.telefone,
  //     email: values.email,
  //     password: values.password,
  //   }).then(() =>{
  //     console.log('Cadastro realizado com sucesso!');
  //   }) .catch((error) => {
  //     console.log(error);
  //   })
  // },

  // // Validação dos dados
  //  validationCadastro = yup.object().shape({
  //   email:yup
  //   .string()
  //   .email('Não é um Email')
  //   .required("Este campo é obrigatório"),

  //   nome:yup
  //   .string()
  //   .required("Este campo é obrigatório"),

  //   uf:yup
  //   .string()
  //   .required("Este campo é obrigatório"),

  //   telefone:yup
  //   .string()
  //   .required("Este campo é obrigatório"),

  //   password: yup
  //   .string()
  //   .min(8, 'A senha deve ter 8 caracteres')
  //   .required("Este campo é obrigatório"),

  // }),

    <View style={Estilo.tela}>
        
      <Image source={require('../../assets/Imagens/artmelogo4.png')} style={Estilo.image}/> 

      <View style={Estilo.containerCadastro}>
        
          <View style ={ Estilo.titulo}>
                <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
                <Text style={Estilo.logoCadastro}>Login</Text>
                </TouchableOpacity>                
                <Text style = {Estilo.logo}>Cadastrar</Text>
          </View>

          {/* <Formik initialValues={{}} onSubmit={handleClickCadastro} 
      validationSchema={validationCadastro}> */}
        
          {/* input nome */}
          <View style={Estilo.inputView}>
                              
            <TextInput
          style={Estilo.inputText}
          placeholder="Nome"
          placeholderTextColor="#F97316"
          // value={values.nome}
            />
          </View>          
          
          {/* input email */}
          <View style={Estilo.inputView}>

          <TextInput
          style={Estilo.inputText}
          placeholder="Email"
          placeholderTextColor="#F97316"
          // value={values.email}
          />
          </View>

          {/* input senha */}
          <View style={Estilo.inputView}>

          <TextInput
          style={Estilo.inputText}
          placeholder="Senha"
          placeholderTextColor="#F97316"
          // value={values.senha}
          secureTextEntry={true}
          />
          </View>

        {/* input curtos */}
        <View style= {Estilo.campos}>

          {/* input telefone */}
          <View style={Estilo.inputcurto}>
            <TextInput
              style={Estilo.inputText}
              placeholder="Telefone"
              placeholderTextColor="#F97316"
            />
          </View>

          {/* input estado */}
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

    
  {/* </Formik> */}

      </View>
    </View>
  );
}

export default Cadastro;