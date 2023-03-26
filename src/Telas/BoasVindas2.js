import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BoasVindas2 = ({navigation}) => {
    return (
        <View style={styles.tela}>
            <Image source={require('../../assets/backgroundboasvindas.png')} style={styles.arte} />
            <View style={styles.campoinferior}>
                <Text style={styles.texto}>
                    Escolha o serviço perfeito para você
                </Text>
                <Text style={styles.texto}>
                    Por Artistas Criativos
                </Text>
                <TouchableOpacity style={styles.fundobotao} onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.textobotao}>Próximo</Text>
                </TouchableOpacity>
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    arte: {
        height: '75%',
        width: '100%',
        resizeMode: 'stretch'

    },
    tela: {
        flex: 1,
        backgroundColor: '#FFC700',
    },
    texto: {
        color: 'white',
        fontSize: 20    ,
        fontWeight: 'bold'
    },
    campoinferior:{
        justifyContent: 'center',
        alignItems: 'center'

    },
    fundobotao:{
     backgroundColor: 'white',
     padding: 25,
     width:'50%',
     margin:15,
     borderRadius:50,
     
    },
    textobotao:{
      fontSize:20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#F97316'
      

    },



});

export default BoasVindas2;

