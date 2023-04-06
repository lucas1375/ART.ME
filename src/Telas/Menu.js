import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

const Menu = () => {
  return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
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
            <View>
              <Image source={require('../../assets/grafite.png')} style={styles.art} />
                </View>
                <View>
                <Image source={require('../../assets/Pintor.png')}  style={styles.pintor}/>
                </View>
                <View>
                <Image source={require('../../assets/quadros.png')} style={styles.quadro}/>
                </View>
                <View>
                <Image source={require('../../assets/artesanato.png')} style={styles.artesanato} />
                </View>
            </View>
            <View>
              <Text>Artistas Recomendados</Text>
            <Image source={require('../../assets/art.png')} style={styles.artesanato} />
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
    height: 65,
    width: 65,
    marginVertical: 30,
    marginHorizontal: 15,
    direction: 'ltr'
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
  imgdetalhe: {
    height: 220,
    width: 650,
    margin: 30,
    borderRadius: 10,
    opacity: '80%'
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
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  pintor: {
    width: 50,
    height: 50,
    marginVertical: 20,
  },
  quadro: {
    width: 50,
    height: 50,
    marginVertical: 30,
  },
  artesanato: {
    width: 50,
    height: 50,
    marginVertical: 40,
  }
  


  
});

export default Menu;