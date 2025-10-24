import { Text, StyleSheet, View, TextInput, Button, Alert} from 'react-native'
import React, { Component, useState} from 'react';


export default function TextInputScreen()  {

  const[nombre, setNombre ] = useState("")
  const[contrasena, setContrasena ] = useState("")
  const[comentario, setComentario ] = useState("")

  const mostrarAlerta = () => {

    if ([nombre.trim() , contrasena.trim(),comentario.trim()].includes('') ){
   
      alert("Error, Por favor rellena todos los campos");
      Alert.alert("Error, Por favor rellena todos los campos");
    }else {
      Alert.alert(`Hola, ${nombre}! Tu datos han sido registrado con éxito`);
      alert(`Hola, ${nombre}!, Tu datos han sido registrado con éxito . Tu contraseña es ${contrasena}`);
      setNombre('');
    }
     
  };
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}> Ingresa tu nombre:</Text>


        <TextInput
        style={styles.input}
        placeholder="Ej. Israel"
        value={nombre}
        onChangeText={setNombre}
        keyboardType="default"
        autoCapitalize="words"
        />
      <TextInput
        style={styles.input}
        value={contrasena}
        onChangeText={setContrasena}
        placeholder="Ej. Password"
        keyboardType="numeric"
        secureTextEntry={true}
        />
         <TextInput
        style={styles.input}
        value={comentario}
        onChangeText={setComentario}
        multiline={true}
        numberOfLines={4}
        placeholder="Ej. Escribe un comentario"
      
        />

        <Button
        title="Saludar"
        onPress={mostrarAlerta}
        color="#1F7A55"

        />

      </View>
    );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FEF9C2',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16,
  },
});