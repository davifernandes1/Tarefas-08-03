import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from "expo-router";

const Images = () => {
  return (
    <View style={styles.posicao}>
      <View style={styles.row}>
        <Image style={styles.imageHome} source={require('../assets/images/jett.jpg')} />
        <Image style={styles.imageHome} source={require('../assets/images/raze.jpg')} />
      </View>
      <View style={styles.row}>
        <Image style={styles.imageHome} source={require('../assets/images/reyna.jpg')} />
        <Image style={styles.imageHome} source={require('../assets/images/killjoy.jpg')} />
      </View>
      <View style={styles.row}>
        <Image style={styles.imageHome} source={require('../assets/images/cypher.jpg')} />
        <Image style={styles.imageHome} source={require('../assets/images/omen.jpg')} />
      </View>
      <View style={styles.row}>
        <Image style={styles.imageHome} source={require('../assets/images/viper.jpg')} />
        <Image style={styles.imageHome} source={require('../assets/images/sova.jpg')} />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/valorant.png')} />
      <Text style={styles.titulo}>Valorant Space</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.botao}>
        <Link href="/" style={styles.btnTxt}>VOLTAR</Link>
      </TouchableOpacity>
      <Text style={[styles.texto]}>Imagens</Text>
      <View>
        <Images></Images>
      </View>
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
    fontSize: 50,
    fontWeight: 'bold',
    margin: 40,
    color: '#CD1818',
  },
  image: {
    width: 600,
    height: 400,
    margin: 30,
  },
  texto: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: "center",
    margin: 10,
    width: 200,
    color: '#CD1818',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#CD1818',
    borderRadius: 4,
    margin: 10,
  },
  btnTxt: {
    color: '#00000',
    fontWeight: 'bold',
    padding: 5,
  },
  posicao: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  imageHome: {
    width: 150,
    height: 100,
  }
});
