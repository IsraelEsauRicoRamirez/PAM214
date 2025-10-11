//1. imports: Zona de importaciones.

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import React, { useState } from 'react';

//2. MAIN: Zona de componentes.
export default function ContadorScreen() {

  const[contador, setContador]=useState(0);//Variable desestructurada

  return (
    // Siempre debe ir dentro de un view para que sea vivible.
    <View style={styles.container}>
    
      <Text style={styles.texto}> Contador : </Text>  
      <Text style={styles.texto2}> {contador} </Text>  

      <View style={styles.contenedorBotones}>

          <Button color="#808000"   title='Agregar' onPress={()=>setContador(contador+1)}/>
          <Button color="#8f0455ff" title='Quitar' onPress={()=>setContador(contador-1)}/>
          <Button color="#808000" title='Reiniciar' onPress={()=>setContador(0)}/>
      </View>


      <StatusBar style="auto" />
    </View>
    
  );
}


//3. Estilos: Zona estetica y posicionamiento.

const styles = StyleSheet.create({
  container: {
    flex: 1, // Asignar numero es asignar tama;o de vistas.
    backgroundColor: '#ECFCCA',// Asignar un color de preferencia.
    alignItems: 'center',
    justifyContent: 'center',
  },// Cuidar que siempre este esta coma.

  texto:{

   color:'#db2b25ff',
    fontSize:30,
    fontFamily: 'Time New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through'


  },
    texto2:{

   color:'#198122ff',
    fontSize:40,
    fontFamily: 'Courier',
    fontWeight:'900',
    textDecorationLine:'underline',


  },

  contenedorBotones:{
    marginTop:15,
    flexDirection:'row',
    gap:15


  },


});
