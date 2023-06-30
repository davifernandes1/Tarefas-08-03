import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function ScreenA() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function openScreen() {
    if (username === 'davi' && password === '123') {
      navigation.navigate('screenB');
    } else {
      alert('Login inválido');
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX/////AAD/8/P/29v/39//W1v/8PD/6Oj/5eX/7Oz//Pz/n5//k5P/bW3/qqr/i4v/1tb/wcH/l5f/ycn/QED/h4f/ODj/SEj/IyP/srL/xMT/eHj/UlL/paX/YmL/e3v/LS3/Fhb/uLj/gYH/Zmb/0dH/r6//Jib/RET/DQ3/cnKBvIN8AAADUklEQVR4nO3ci1LaUBRG4YRLCMEgIQgiCIJiW9//AVtKRZhWJ/sk/Fun63sAJmvQnEtyiCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAgy1pJv5emnU77VaeTpr1+0soy74uzyZK0vSuL7XBwdbPOV8vJwyauYvMwWa7y9c3VYLgtyl07TT5feFYO8mmlmqqm+aD8NJ3ZcNZo3JvZ8FNEXl8o7+DavbG8aN9e6Rt4f/HAOL73DHwWBMbxs19gRxIYxx23wm+iwluvwLkoMI7nToW3skKnL3EkC4zjnUvhjbDw0aVwIyzceAQmwsA4ThwK76SFdw6FA2nhwKFwIS1cOBQupYVLh0LVlO3AY8yXBsYxhc3LLJfXwAxWv5vRMl1e/b2Alrywb7u81kvNwp680LS+338BnUmtQv0637R2OvyJbesUjuSFO3thrb1V/aaiaeJ9vE30u6GFhbzQ9Cd3ciMsA0eOrbzQtFV6dqsPGzmG8kLTdZ4PZlnIskS/fBqHFwaNHGN5oem2+PeExDxyXMsLH+sVmkcO/W7bum6hceTQL/JN88x3ps07w8iRa/N+yRsotNyRn5Rxv60aKaw+cqyEbQemf6KPFnfDah/RlZW9aqiw9VTxI75qYfV5g347sYnC4kf1j/iKhanpRaOv91eamSZFHoU1R4uKd9A3+tGi6j3wn4W7B2ugw4hfY06TmL7/P/SzNtMq9qzQtLI80s+8Q1dPRVCfx+opbAVsGyFO6VfAIbsYmWlReU6/ixGwE2UeIU7p38E0vdS2LwwYIU7pX20z7nkHjRCn9K+b2J7MhI0Qp/RPZnqWyzOsId6jf35oesrdAId39sWF+sDouzRw4lBY98G8jX7iHTqBDnXlUFjrqbyZ/gFpFLWlhfrhMBLfTF0OeDV74PBjU4/ACx/LO6dfHe6Z3qipyee8RdTAbLMqn0DJ4cMDtyOIskKvQNl/ouNBWc2ZC4+zFke1Npcq0r/vdaa9uXDfpu0bGF36jup6kPvo7lJLxReP81zv6BXjvN573Ocm+bjQ7z1VkKSjstjO9z9ussi7s2m1d55up7Nuvtj/tMl8W5Sj1OOsYT0f/D6N96UBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCf+gmPWjb5/XLbeQAAAABJRU5ErkJggg==')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={openScreen} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});