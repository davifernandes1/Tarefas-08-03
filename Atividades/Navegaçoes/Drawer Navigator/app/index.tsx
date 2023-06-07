import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/valorant.png')} />
      <Text style={styles.titulo}>Valorant Space</Text>
      <Text style={styles.text}>Valorant é um FPS tático online que mistura uso de armas e habilidades especiais. Cada personagem tem seu próprio kit de skills.Desenvolvido pela Riot Games, Valorant foi lançado oficialmente em 2020. Desde então, vem ganhando cada vez mais popularidade.</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.botao}>
      <Link href="/cadastro" style={styles.btnTxt}>ENTRAR</Link>
     </TouchableOpacity>
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
    margin: 40,
    color: '#CD1818',
  },
  image: {
    width: 600,
    height: 400,

  },
  text: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: "center",
    margin: 10,
    width: 500,
    color: '#000000',
  },
  botao:{
    backgroundColor: '#CD1818',
    borderRadius: 2,
    margin: 15,
    marginTop: 40,
  },
  btnTxt:{
    color: '#000000',
    fontWeight: 'bold',
    padding: 10,
  }
});
