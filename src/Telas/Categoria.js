import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Categoria = () => {
  return (
    <View style={styles.beck}>
      <Text style={styles.container}>
        Escreva algo
      </Text>

      <View style={styles.categoriaContainer}>
        <Text style={styles.pesquisa}>
          Selecione uma categoria......
        </Text>
        <Image source={require('../../assets/Imagens/seta.png')} style={styles.seta} />
      </View>

      <Text style={styles.escreva}>
        Escreva...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row'
  },
  pesquisa: {
    margin: 12,
    textDecorationLine: 'underline',
    fontSize: 20
  },
  escreva: {
    margin: 12
  },
  beck: {
    backgroundColor: "white"
  },
  categoriaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12
  },
  seta: {
    
    width: 30,
    height: 30,
    marginLeft: 5,
    
  }
});

export default Categoria;