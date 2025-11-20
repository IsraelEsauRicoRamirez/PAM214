import { View, Text, StyleSheet } from 'react-native';


export default function Home() {
  return (
    <View style={styles.container}>
    <View style={styles.iconRow}>
     
        <Text style={styles.title}>Detalles Usuario</Text>
        <Text style={styles.subtitle}>Usando Navegacion Stack</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black',
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
},
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'green',
  },
  
});
