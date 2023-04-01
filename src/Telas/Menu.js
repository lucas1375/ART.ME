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
        </View >
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
  }
});

export default Menu;