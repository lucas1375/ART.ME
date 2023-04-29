import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Estilo from './Estilo';

const Perfil = () => {
return (
    
    <View>
         <Image source={require('../../assets/Vetor.png')} style={styles.vetor} />
    <View style={styles.beck}>
    <Text style={styles.edit}>Editar</Text>
    
    <Image source={require('../../assets/Samuel.png')} style={styles.margem} />
   
    <Text style={styles.samu}> Samuel Cursino </Text>
    <Text style={styles.samu}> 10K Seguidores 
                              12K Seguindo </Text>


     

    </View>

  <View>
  <TouchableOpacity style={styles.button} onPress={() => console.log('Botão Sobre pressionado')}>
      <Text style={styles.text}>Sobre</Text>
    </TouchableOpacity>
    

    <Text style={styles.red}>Pintor de Quadros</Text>

    <Text style={styles.texto1}>
    olá, prazer!!
   
   Sou artista no ramo de pintura de quadros e artesanato.
Vivo em busca de inspiração, impacto positivo e uma vida saudável.
</Text>


<Text style={styles.texto1}>
Tenho como objetivo principal "Transformar o mundo através da arte". Eu acredito 
que somente através da pintura será possível impactar (em grande escala) a sociedade e
o meio ambiente e transformar positivamente o mundo.
</Text>   



<Text style={styles.texto2}> Formado em Artes Visuais </Text> 
<Text style={styles.texto2}> Sao Paulo</Text>
  
    </View>
    

    </View>
)
}

const styles = StyleSheet.create({
    containerLogin: {
        margin: 80,
        alignItems: 'center',
        justifyContent: 'center',
       
      },   
     beck: {
        width: 350,
        backgroundColor: 'orange',
        borderRadius: 15,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        
     },
     button: {
        backgroundColor: '#007AFF',
        borderRadius: 5,
        padding: 10,
      },
      text: {
        borderRadius: 30,
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10
        
      },
      red: {
        color: '#FF0000',
        margin: 10,
        fontWeight: 'bold'
      },
      margem: {
        height: 50,
        width: 50,
        backgroundColor: 'white'
      },
      samu: {
         fontWeight: 'bold',
         color: '#FFFFFF'
      },
      edit: {
        fontWeight: 'bold',
         color: '#FFFFFF'
      },
      texto1: {
       margin: 10
      },
      texto2: {
        margim: 20  
      },
      edit: {
       height: 20,
       width: 300,
       color: 'white'
      },

      
  });
    



export default Perfil;