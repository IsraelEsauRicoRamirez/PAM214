import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native'





export default function ActivityIndicatorScreen()  {

  const [cargando, setCargando]= useState(false);


  const iniciarCarga = () => {
    setCargando(true);
    setTimeout(() => setCargando(false), 3000);
  };

  
    return (


      <View style={styles.container}>
        <Text style={styles.texto}>
          'Presiona aqui para iniciar carga'
        </Text>

        <ActivityIndicator

        style={styles.indicador}
        animating={cargando}
        size="large"
        color="blue"
        hidesWhenStopped={true}
      
        />
        <View style={styles.botonContainer}>

          <Button color="red" title='Iniciar Carga' onPress={iniciarCarga}/>





        </View>


      </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  texto: {
    fontFamily: 'Times New Roman',
    marginBottom: 20,
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  indicador: {
    marginVertical: 10,
  },
  botonContainer: {
    marginTop: 30,
  },
});