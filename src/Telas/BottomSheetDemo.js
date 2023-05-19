import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BottomSheet } from "react-native-btr";

export default function BottomSheetDemo() {
  const [visible, setVisible] = useState(false);

  function toggle() {
    setVisible((visible) => !visible);
  }

  return (
    <View style={styles.container}>
        <View>
          <Text style={styles.text}> Escreva algo </Text>
        </View>
        <TouchableOpacity onPress={toggle}>
        <View>
          <Text style={styles.text}>  Selecione uma categoria...</Text>
        </View>
        </TouchableOpacity>
  
        <View>
          <Text>  ___________________________________________________</Text>
        </View>
        <View>
          <Text style={styles.text2}>Escreva...</Text>
        </View>
        <View>
          <Text style={styles.image}>
            Adicionar uma Imagem

          </Text>
        </View>
       
    
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
      >
        <View style={styles.card}>
          <Text>Selecione uma categoria...</Text>
        </View>

        
        
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 100,
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    height: 700,
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: '20%'
  },
  text: {
    fontSize: 15,
    margin:15,
    justifyContent: "center",
    alignItems: "center",

  },
  text2: {
    margin: 15,
    textAlign: "center",
    justifyContent: "center"
  },
  seta: {

    height:10,
    width: 10
    },
    inicio: {
      textAlign: "center",
      justifyContent:"center"
    },
    image: {
      borderWidth: 2,
    borderRadius: 20,
    padding: 5,
    backgroundColor: 'orange',
    marginEnd: 100,
    fontFamily: 'white',
    flex: 3
    }
    
});