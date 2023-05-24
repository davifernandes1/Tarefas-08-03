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
        <Text style={styles.title}>Boas Vindas!</Text>
        <Text style={styles.subtitle}>Crie sua conta e use o espaço para comprar itens variados e vender seus produtos</Text>
        <Image
          source={require('./logoCadastro.png')}
          style={styles.image}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.createAccountText}>Já tem uma conta?</Text>
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountButtonText}>Ir para o Login</Text>
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
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 40,
    marginBottom: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 8,
    padding: 12,
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
    backgroundColor: '#1a181b',
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
    marginTop: 60,
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