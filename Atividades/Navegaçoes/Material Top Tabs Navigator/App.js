import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: '#50C5B7' }}>
      <Text style={{fontWeight: 'bold', color: 'white'}}>Dave Páginas</Text>
      <Image
          source={require('./neymar.png')}
          style={styles.logo}
        />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: '#D3FAD6' }}>
      <Text style={{fontWeight: 'bold', color: 'black'}}>Segunda Página</Text>
            <Image
          source={require('./neymar2.png')}
          style={styles.logo2}
        />
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Página 1" component={HomeScreen} />
        <Tab.Screen name="Página 2" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 200,
    marginBottom: 16,
  },
    logo2: {
    width: 300,
    height: 200,
    marginBottom: 16,
  },
  });

