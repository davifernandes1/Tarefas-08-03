import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/valorant.png')} />
      <Text style={styles.titulo}>Valorant Space</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="red"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="red"

      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        placeholderTextColor="red"

  
      />
        <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="red"

      />

      <TouchableOpacity style={styles.botao}>
      <Link href="sobre" style={styles.btnTxt}>SALVAR</Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}>
      <Link href="/" style={styles.btnTxt}>VOLTAR</Link>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EDD4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 45,
    fontWeight: 'bold',
    margin: 30,
    color: '#CD1818',
  },
  image: {
    width: 600,
    height: 400,

  },
  texto: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: "center",
    margin: 10,
    width: 200,
    color: '#CD1818',

  },
  input: {
    width: '30%',
    height: 50,
    margin: 10,
    borderWidth: 2,
    borderColor: '#CD1818',
    borderRadius: 3,
    marginBottom: 25,
    paddingHorizontal: 10,
    backgroundColor:'#FAD4D4',
  },
  botao:{
    backgroundColor: '#CD1818',
    borderRadius: 3,
    margin: 5,

  },
  btnTxt:{
    color: '#00000',
    fontWeight: 'bold',
    padding: 10,
  }
});
