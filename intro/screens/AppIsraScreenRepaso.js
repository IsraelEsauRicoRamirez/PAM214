import { Text, StyleSheet, View,  SafeAreaView, ImageBackground, Button, TextInput, Alert, Switch, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';


export default function AppIsraScreenRepaso()  {
   const [showSplash, setShowSplash] = useState(true);
   const[nombre, setNombre ] = useState("");
   const[correo, setCorreo] = useState("");
   const [isAccepted, setIsAccepted] = useState(false);

  
  
    useEffect(() => {
  
      const timer = setTimeout(() => {
  
        setShowSplash(false);
  
      }, 3000);
  
      return () => clearTimeout(timer);
  
  },[]);
  
  
  
  if(showSplash){
      return (
        <ImageBackground
        source={{
      uri: 'https://png.pngtree.com/background/20250105/original/pngtree-forest-wallpapers-picture-image_15431100.jpg',}}
      style={styles.background}
        
        >
        <View style={styles.splashContainer}>
          <Text style={styles.splashText}> "Bienvenido a la App" </Text>
        </View>
        </ImageBackground>
      );
    }



  const mostrarAlerta = () => {
    if (nombre.trim() === '' ){
       
          alert("Error, Por favor Ingresa un Nombre");
          Alert.alert("Error, Por favor Ingresa un Nombre");
          return;
        }
        if(correo.trim() === ''){
        
          Alert.alert("Error  Por favor Ingresa un Correo");
          alert("Error  Por favor Ingresa un Correo");
          
          return;
        }
         if (!isAccepted) {
           Alert.alert('Error', 'Debes aceptar los términos y condiciones');
           alert('Error, Debes aceptar los términos y condiciones');
           return;
    }

        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!correoRegex.test(correo)){
           alert("'Por favor, ingresa una dirección de correo válida");
           Alert.alert("Por favor, ingresa una dirección de correo válida");
           return;

        }else {
          Alert.alert(`Registro exitoso, Nombre: ${nombre}          Correo: ${correo} `);
          alert(`Registro exitoso, Nombre: ${nombre} Correo: ${correo} `);
          
          setNombre('');
          setCorreo('');
          setIsAccepted(false);
        }  
      };
  
    return (
      <SafeAreaView  style={{flex: 1}}>
        <ImageBackground
         source={{
         uri: 'https://carboninstitute.org/wp-content/uploads/2019/11/carbon-institute-forests-header-1600x900.jpg',}}
         style={styles.background}
        >
        
        

              <View style={styles.card}>
              <Text style={styles.label}> Registro de Usuario:</Text>
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
                      value={correo}
                      onChangeText={setCorreo}
                      placeholder="Ej. correo@gmail.com"
                      keyboardType="default"
                      autoCapitalize="words"
              />
     <Text style={styles.switchLabel}>Aceptar términos y condiciones</Text>
     <View style={styles.switchContainer}>
           <Switch
              value={isAccepted}
              onValueChange={setIsAccepted}
              thumbColor={isAccepted ? '#1F7A55' : '#ccc'}
          />
           
        </View>
        <TouchableOpacity style={styles.button} onPress={mostrarAlerta} activeOpacity={0.8}>
          <Text style={styles.button}>Registrarse</Text>
          </TouchableOpacity>
      
        </View>
      </ImageBackground>
      </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    
  },
  label: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fffb0dff'
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 20,
    color: '#ffffffff'
  },
   splashContainer: {
    flex: 1, 
   
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  
  splashText: {
    fontSize: 50, 
    backgroundColor:'#edf0ed50',
    color: '#034F3B', 
    fontWeight: 'bold',

  },
   background: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

   switchContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: '#ffffff',
  },

  card: {
  backgroundColor: '#1a181896', // fondo negro translúcido
  padding: 20,
  borderRadius: 15,
  width: '90%',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 10,
},
button: {
  color:'#37BC7D',
   textAlign: 'center'
},




  
});