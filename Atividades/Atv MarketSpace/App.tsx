import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('./logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>marketspace</Text>
        <Text style={styles.subtitle}>Seu espaço de compra e venda</Text>
      </View>
      <Text style={styles.sectionTitle}>Acesse sua conta</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.createAccountText}>Ainda não tem acesso?</Text>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountButtonText}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#edecee',
    padding: 16,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  logo: {
    width: 90,
    height: 70,
    marginBottom: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  subtitle: {

    fontSize: 14,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 13,
    marginTop: 24,
  },
  input: {
    width: '85%',
    height: 40,
    backgroundColor: '#f7f7f8',
    borderRadius: 8,
    marginTop: 16,
    paddingHorizontal: 8,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#647ac6',
    paddingHorizontal: 105, 
      paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 200,
    alignItems: 'center',
  },
  createAccountText: {
    fontSize: 14,
    color: '#000',
  },
  createAccountButton: {
    marginTop: 8,
    backgroundColor: '#d9d8da',
    paddingHorizontal: 90,
    paddingVertical: 10,
    borderRadius: 6,
  },
  createAccountButtonText: {
    color: '#1a181b',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default App;