import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component, useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInputScreen from './TextInputScreen'
import ImageBackgroundScreen from './ImageBackgroundScreen'
import ScrollViewScreen from './ScrollViewScreen'
import ActivityIndicatorScreen from './ActivityIndicatorScreen'
import FlatListScreen from './FlatListScreen'
import ModalScreen from './ModalScreen'
import BottomScreen from './BottomScreen'


export default function MenuScreen() {

    const[screen, setScreen]=useState('menu')

    switch(screen){

        case 'contador': 
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'TextInput':
        return <TextInputScreen/>
        case 'ImageBackgorund':
            return <ImageBackgroundScreen/>
        case 'ScrollView':
            return <ScrollViewScreen/>
        case 'ActivityIndi':
            return <ActivityIndicatorScreen/>
        case 'FlatList':
            return <FlatListScreen/>
        case 'Modal':
            return <ModalScreen/>
        case 'Bottom':
            return <BottomScreen/>
        case 'menu':
            default:
            return (

      <View style={styles.container2}>
        
        <Text  style={styles.texto2}>Menu Practicas:</Text>
        <View style={styles.contenedorBotones2}>
       <Button onPress={()=>setScreen('contador')} title='Pract:Contador'/>
       <Button onPress={()=>setScreen('botones')} title='Pract:Buttons'/>
       <Button onPress={()=>setScreen('TextInput')} title='Pract:TextInput'/>
       <Button onPress={()=>setScreen('ImageBackgorund')} title='Pract:ImageBackground'/>
       <Button onPress={()=>setScreen('ActivityIndi')} title='Pract:ActivityIndicator'/>
       <Button onPress={()=>setScreen('FlatList')} title='Pract:FlatList'/>
       <Button onPress={()=>setScreen('Modal')} title='Pract:Modal'/>
       <Button onPress={()=>setScreen('Bottom')} title='Pract:Bottom'/>
        </View>
      </View>
    )
       

    }
  
   
}


const styles = StyleSheet.create({
container2: {
    flex: 1,
    backgroundColor: '#ECFCCA',
    alignItems: 'center',
    justifyContent: 'center',
  },

contenedorBotones2:{
    marginTop:15,
    
    gap:15


  },
    texto2:{

   color:'#114549ff',
    fontSize:30,
    fontFamily: 'Time New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'underline'


  },
  })