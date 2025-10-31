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
import AppIsraScreenRepaso from './AppIsraScreenRepaso'



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
        case 'Repaso':
            return  <AppIsraScreenRepaso/>
        case 'menu':
            default:
            return (

      <View style={styles.container2}>
        
        <Text  style={styles.texto2}>Menu Practicas:</Text>
        <View style={styles.contenedorBotones2}>
       <Button color="#FFB86A" onPress={()=>setScreen('contador')} title='Pract:Contador'/>
       <Button color="#FEE685"onPress={()=>setScreen('botones')} title='Pract:Buttons'/>
       <Button color="#31C950"onPress={()=>setScreen('TextInput')} title='Pract:TextInput'/>
       <Button color="#37BC7D" onPress={()=>setScreen('ImageBackgorund')} title='Pract:ImageBackground'/>
        <Button color="#721378" onPress={()=>setScreen('ScrollView')} title='Pract:ScrollView'/>
       <Button color="#FF637E"onPress={()=>setScreen('ActivityIndi')} title='Pract:ActivityIndicator'/>
       <Button color="#016630"onPress={()=>setScreen('FlatList')} title='Pract:FlatList'/>
       <Button color="#21BCFF" onPress={()=>setScreen('Modal')} title='Pract:Modal'/>
       <Button color="#861043" onPress={()=>setScreen('Bottom')} title='Pract:Bottom'/>

        <Button color="#721378" onPress={()=>setScreen('Repaso')} title='Pract:Repaso'/>
        </View>
      </View>
    )
       

    }
  
   
}


const styles = StyleSheet.create({
container2: {
    flex: 1,
    backgroundColor: '#2D9966',
    alignItems: 'center',
    justifyContent: 'center',
  },

contenedorBotones2:{
    marginTop:15,
    
    gap:15


  },
    texto2:{

   color:'#FEF9C2',
    fontSize:30,
    fontFamily: 'Time New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'underline'


  },
  })