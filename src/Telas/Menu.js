import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import BotaoCategoria from './BotaoCategoria';

const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('../../assets/Vetor.png')} style={styles.vetor} />
        <View style={styles.selecao}>
          <Text style={styles.txtsamuel}>Oi, Samuel!</Text>
          <Image source={require('../../assets/Samuel.png')} style={styles.artista} />
        </View>
      </View>
      <View style={styles.image}>
        <Image source={require('../../assets/artistas.png')} style={styles.imgdetalhe} />
        <TextInput
          placeholder=" Pesquisar "
          style={styles.pesquisa}
        />
      </View>


      <View style={styles.branco}>
        <ScrollView horizontal>
          <BotaoCategoria texto={'Grafite'} imagem={require('../../assets/grafite.png')} />

          <BotaoCategoria texto={'Pintor'} imagem={require('../../assets/Pintor.png')} />

          <BotaoCategoria texto={'Pintor'} imagem={require('../../assets/quadros.png')} />

          <BotaoCategoria texto={'Pintor'} imagem={require('../../assets/artesanato.png')} />
        </ScrollView>

      </View>
      
      <Text>Artistas Recomendados</Text>
      
      <View style={styles.jeff}>
      <Image source={require('../../assets/art.png')} style={styles.cara} />
      <Text>Jefferson
        Santos Fotografo
        <Image source={require('../../assets/estrela.png')} style={styles.estrela} />
      </Text>
      
      </View>
      <View>
      
      </View>
    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC700',
    flex: 1,
  },
  artista: {
    height: 60,
    width: 60,
    marginVertical: 30,
    marginHorizontal: 15,
    direction: ''
  },
  txtsamuel: {
    direction: 'rtl',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 30,
    marginHorizontal: 15
  },
  selecao: {
    direction: 'rtl',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    flex: 1
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pesquisa: {
    flex: 1,
    width: '90%',
    fontSize: 22,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    padding: 12
  },
  vetor: {
    width: 32,
    height: 32,
    margin: 30,
    direction: 'ltr'
  },
  branco: {
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  art: {
    width: 70,
    height: 40,
    backgroundColor: 'white'
  },
  pintor: {
    width: 50,
    height: 50,
    marginVertical: 30,
    marginHorizontal: 20
  },
  quadro: {
    width: 50,
    height: 50,
    marginVertical: 30,
    marginHorizontal: 20
  },
  artesanato: {
    width: 50,
    height: 50,
    marginVertical: 30,
    marginHorizontal: 20
  },
  imgdetalhe:{
    width: 300,
    height: 100,
    padding: 30
  },
  jeff: {
    display: 'flex', 
    justifyContent: 'center',
     alignItems: 'center',
      padding: 5, 
    borderRadius: 2,
     borderWidth: 4,
      borderColor: '#F97316',
       margin: 4,
       backgroundColor: 'white'
  },
  cara: {
     height: 50,
     width: 90,
     marginVertical: 10,
    marginHorizontal: 5
  },
  estrela: {
    width: 10,
    height: 10,
    marginHorizontal:10,
    marginVertical: 40
  }






});

export default Menu;