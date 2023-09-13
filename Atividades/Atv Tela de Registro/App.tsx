import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirmaEmail, setConfirmaEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idioma, setIdioma] = useState('portuguese'); 
  const [dadosCadastro, setDadosCadastro] = useState('');

  const handleLanguageChange = (itemValue) => {
    setIdioma(itemValue);
  };

  const handleCadastro = () => {
    
    console.log('Dados informados pelo usuário:');
    console.log('Nome:', nome);
    console.log('Gênero:', genero);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
    console.log('E-mail:', email);
    console.log('Confirmação de E-mail:', confirmaEmail);
    console.log('CPF:', cpf);
    console.log('Idioma do Currículo:', idioma);

    // Atualizar os dados na tela
    const dados = `
Dados informados pelo usuário:
Nome: ${nome}
Gênero: ${genero}
Data de Nascimento: ${dataNascimento}
Usuário: ${usuario}
Senha: ${senha}
E-mail: ${email}
Confirmação de E-mail: ${confirmaEmail}
CPF: ${cpf}
Idioma do Currículo: ${idioma}
`;
    setDadosCadastro(dados);
  };

  const handleCpfChange = (text) => {
  
    const numericCpf = text.replace(/[^0-9]/g, '');

  
    let formattedCpf = '';
    for (let i = 0; i < numericCpf.length; i++) {
      if (i === 3 || i === 6) {
        formattedCpf += '.';
      } else if (i === 9) {
        formattedCpf += '-';
      }
      formattedCpf += numericCpf[i];
    }

    setCpf(formattedCpf);
  };

  const handleDataNascimentoChange = (text) => {
    
    const numericDate = text.replace(/[^0-9]/g, '');

    let formattedDate = '';
    for (let i = 0; i < numericDate.length; i++) {
      if (i === 2 || i === 4) {
        formattedDate += '/';
      }
      formattedDate += numericDate[i];
    }

    setDataNascimento(formattedDate);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <Text style={styles.label}>Gênero</Text>
      <Picker
        style={styles.input}
        selectedValue={genero}
        onValueChange={(itemValue) => setGenero(itemValue)}
      >
        <Picker.Item label="Selecione o Gênero" value="" />
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
      </Picker>

      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInput
        style={styles.input}
        value={dataNascimento}
        onChangeText={handleDataNascimentoChange}
        keyboardType="numeric" 
      />

      <Text style={styles.label}>Usuário</Text>
      <TextInput
        style={styles.input}
        value={usuario}
        onChangeText={(text) => setUsuario(text)}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.label}>Confirme seu E-mail</Text>
      <TextInput
        style={styles.input}
        value={confirmaEmail}
        onChangeText={(text) => setConfirmaEmail(text)}
      />

      <Text style={styles.label}>CPF</Text>
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={handleCpfChange}
        keyboardType="numeric" 
      />

      <Text style={styles.label}>Idioma do Currículo</Text>
      <Picker
        style={styles.input}
        selectedValue={idioma}
        onValueChange={handleLanguageChange}
      >
        <Picker.Item label="Português" value="Português" />
        <Picker.Item label="Inglês" value="Inglês" />
        <Picker.Item label="Espanhol" value="Espanhol" />
        <Picker.Item label="Italiano" value="Italiano" />
        <Picker.Item label="Francês" value="Francês" />
      </Picker>

      <Button title="CADASTRAR" onPress={handleCadastro} />

      
      <View style={{ height: 20 }} />

      
      <Text>{dadosCadastro}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
});
