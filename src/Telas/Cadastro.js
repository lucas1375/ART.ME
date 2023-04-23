import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as yup from "yup";
import axios from "axios";
import Estilo from './Estilo';



const Cadastro = ({ navigation }) => {

  // Axios Cadastro
const handleClickCadastro = async (values) => {
  // Coloque o ip do seu pc. Para isso, abra o console e digite
  // 'ipconfig' copie o endereço IPV4 e cole na linha abaixo
  axios.post("http://192.168.100.6:3005/cadastrarUsuario", {
    nome: values.nome,
    email: values.email,
    password: values.password,
    telefone: values.telefone,
    uf: values.uf
  }, {mode: 'no-cors'}).then((response) => {
    if(response == 201){
      console.log('Cadastro realizado com sucesso!');
    } else if(response == 400){
      console.log("algo errado")
    }
    
  }).catch((error) => {
    console.log(error);
  })
}

// Validação dos dados
const validationCadastro = yup.object().shape({
  
  nome: yup
  .string()
  .required("Este campo é obrigatório"),
    
  email: yup
  .string()
  .email('Não é um Email')
  .required("Este campo é obrigatório"),

  password: yup
    .string()
    .min(8, 'A senha deve ter 8 caracteres')
    .required("Este campo é obrigatório"),

  telefone: yup
  .string()
  .required("Este campo é obrigatório"),

  uf: yup
  .string()
  .required("Este campo é obrigatório"),
  
})

  const [enviar, setEnviar] = useState(false);
  const [dados, setDados] = useState();


  useEffect(()=>{
    if(enviar==true){ 
      console.log(dados)
      handleClickCadastro(dados)
      setDados({})
      setEnviar(false)
    }
   
    return () => {
      setDados([])
      setEnviar(false)
    }

  }, [enviar]);

  const userInfo = {
    nome: '',
    email: '',
    password: '',
    telefone: '',
    uf: '',
  };

  const [error, setError] = useState('');

  const { nome, email, password, telefone, uf } = userInfo;

  return (
    <Formik
      initialValues={{
        nome: '',
        email: '',
        password: '',
        telefone: '',
        uf: '',
      }}

      // validationSchema={validationCadastro}
      onSubmit={values=>{handleClickCadastro(values)}}
      // onSubmit={values => console.log(values)}
      >

      {({ handleChange, handleBlur, handleSubmit, values }) => (

        <View style={Estilo.tela}>
          <Image source={require('../../assets/Imagens/artmelogo4.png')} style={Estilo.image} />
          <View style={Estilo.containerCadastro}>

            <View style={Estilo.titulo}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={Estilo.logoCadastro}>Login</Text>
              </TouchableOpacity>
              <Text style={Estilo.logo}>Cadastrar</Text>
            </View>

            {/* input nome */}
            < View style={Estilo.inputView}>
              <TextInput
                style={Estilo.inputText}
                placeholder="Nome"
                placeholderTextColor="#F97316"
                value={values.nome}
                onChangeText={handleChange('nome')}
                onBlur={handleBlur('nome')}
              />
            </View>

            {/* input email */}
            <View style={Estilo.inputView}>
              <TextInput
                style={Estilo.inputText}
                placeholder="Email"
                placeholderTextColor="#F97316"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
            </View>

            {/* input senha */}
            <View style={Estilo.inputView}>
              <TextInput
                style={Estilo.inputText}
                placeholder="Senha"
                placeholderTextColor="#F97316"
                value={values.password}
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
            </View>

            {/* input curtos */}
            <View style={Estilo.campos}>

              {/* input telefone */}
              <View style={Estilo.inputcurto}>
                <TextInput
                  style={Estilo.inputText}
                  placeholder="Telefone"
                  placeholderTextColor="#F97316"
                  value={values.telefone}
                  onChangeText={handleChange('telefone')}
                onBlur={handleBlur('telefone')}
                />
              </View>

              {/* input estado */}
              <View style={Estilo.inputcurto}>
                <TextInput
                  style={Estilo.inputText}
                  placeholder="Estado"
                  placeholderTextColor="#F97316"
                  value={values.uf}
                  onChangeText={handleChange('uf')}
                  onBlur={handleBlur('uf')}
                />
              </View>
            </View>
            
            {/* <TouchableOpacity style={Estilo.loginButton} onPress={() => navigation.navigate('Menu')}>
              <Text style={Estilo.loginText}>Entrar</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={Estilo.loginButton} onPress={handleSubmit}>
              <Text style={Estilo.loginText}>Cadastrar</Text>
            </TouchableOpacity>


          </View>
        </View>


      )
      }

    </Formik >


  );

}

export default Cadastro;