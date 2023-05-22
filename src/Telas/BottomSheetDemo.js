import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, Alert, Image } from "react-native";

export default function BottomSheetDemo() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.text}>Escreva algo</Text> 
        
      </View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.teste}>
          <Text style={styles.text2}>Selecione uma categoria...</Text>    

        </View>
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 500
  }}
/>
</TouchableOpacity>
     <View>
      <Text style={styles.text2}>Escreva algo...</Text>
     </View>
   
      

      <View style={styles.bottomLeftContainer}>
        <Text style={styles.image}>Adicionar uma Imagem</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Selecione uma categoria</Text>
            <Pressable
              
              onPress={() => setModalVisible(!modalVisible)}>
             <Text style={styles.mode}>Voltar</Text>
              
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    
    backgroundColor: 'white'
  },
  topContainer: {
    marginTop: 10,
    
  },
  button: {
    borderRadius:20,
    elevation: 2,
    
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    padding: 15
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: 400,
    height: 600,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  text: {
    fontSize: 15,
    textAlign: "center"
  },
  image: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 5,
    backgroundColor: 'orange',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
   margin: 15
  },
  bottomLeftContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    margin: 15,
  },
  text2: {
    margin:10
  },
  arrowImage: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  teste: {
    flexDirection: 'row'
  },
  mode: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 5,
    backgroundColor: 'orange',
    color: 'white',
    margin:590

  },
});