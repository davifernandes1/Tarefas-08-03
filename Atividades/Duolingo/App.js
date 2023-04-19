import { StatusBar, Image, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./duolingo.png')} />
      <Text style={styles.text}>Learn a language for free. {'\n'}Forever.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { borderRadius: 20, height: 60, width: '40%' }]}>
          <Text style={[styles.buttonText, { fontSize: 24 }]}>GET STARTED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { marginTop: 10, backgroundColor: 'white', borderWidth: 2, borderColor: 'rgba(184,184,184,255)', borderRadius: 20, height: 60, width: '40%' }]}>
          <Text style={[styles.buttonText, { color: 'rgba(120,200,0,255)', fontSize: 20 }]}>I ALREADY HAVE AN ACCOUNT</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 180,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    color: 'rgba(184,184,184,255)',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 'auto',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'rgba(120,200,0,255)',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
