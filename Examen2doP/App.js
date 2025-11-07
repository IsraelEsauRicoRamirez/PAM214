import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, ImageBackground, Button, Alert, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App() {
const [showSplash, setShowSplash] = useState(true);
const [alerta, setAlerta] = useState('')

 useEffect(() => {
  
      const timer = setTimeout(() => {
  
        setShowSplash(false);
  
      }, 4000);
  
      return () => clearTimeout(timer);
  
  },[]);

 if(showSplash){
      return (
        <ImageBackground
        source={{
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lvjjRAVDQ-nBDq_4dy1xCyRjjDaHV-Tqcw&s',}}
      style={styles.background}
        
        >
        <View style={styles.splashContainer}>
          <Text style={styles.splashText}> "Bienvenido a mi Examen" </Text>
        </View>
        </ImageBackground>
      );
    }
  return (
    <SafeAreaView style={{flex: 1}}>
    

     
       

    
      <ImageBackground
      
      source={{ uri:'https://st.depositphotos.com/1695227/4813/i/450/depositphotos_48132517-stock-photo-deep-forest-stream-with-crystal.jpg',}}
       style = {styles.background}
      >
       <ScrollView
      showsVerticalScrollIndicator={false}>



      
    <View style={styles.card}>
      <Text style={styles.label}>Mi perfil:</Text>
      <Text style={styles.Subtitulos}>Nombre Completo:</Text>
      <Text style={styles.Texto}>Israel Esau Rico Ramirez</Text>
      <Text style={styles.Subtitulos}>Profesión/Titulo</Text>
      <Text style={styles.Texto}>Estudiante de Ing.Tecnologias de la Información e Inovación Digital</Text>
       <Text style={styles.Subtitulos}>Presentación:</Text>
        <Text style={styles.Texto}>Me llamo Israel Esau Rico Ramirez y soy estudiente de la Universidad Politecnica de Querétaro
          , vivo en Humimilpan Querétaro y tengo 18 años y apoco de cumplir los 19 el 24 de Diciembre.
        </Text>
        <Text style={styles.Subtitulos}>Correo Electronico:</Text>
        <Text style={styles.Texto}>israelrmirez12@gmail.com</Text>
        <Text style={styles.Subtitulos}>Número de telefono:</Text>
        <Text style={styles.Texto}>4481012175</Text>



        <Button
        title="Editar Perfil"
      
        color="#1F7A55"
        onPress={()=>setAlerta(  
          alert(`Elige: <Button title="Guardar" color="#1F7A55"/> , <Button  title="Cancelar" color="#1F7A55"/>`),
          Alert.alert(`Elige: ,<Button title="Guardar" color="#1F7A55"/> , <Button  title="Cancelar" color="#1F7A55"/>`))}

        />





      <StatusBar style="auto" />
    </View>
    </ScrollView>
    </ImageBackground>
 
    
       </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {

    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 


  }, 


  splashContainer: {

    flex: 1,
    alignItems:'center'


  },

  splashText: {
    fontSize: 50, 
    backgroundColor:'#edf0ed50',
    color: '#034F3B', 
    fontWeight: 'bold',
   
  }, 
  card:{
     backgroundColor: '#1a181896', 
  padding: 20,
  borderRadius: 15,
  width: '100%',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 10,

  },
  label: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#1F7A55'
  },
  Subtitulos:{
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
       color: '#eefc29ff', 

  },
  Texto:{
     fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 120,
       color: '#ffffffff', 
       fontFamily:'Arial'

  },

});
