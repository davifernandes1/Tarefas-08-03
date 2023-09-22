import { View, Text, TextInput, Touchable, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { useState } from "react";


export default function Home(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

function handleUserAdd(){
    console.log(
        "Nome Completo: " + name
        +"\nEmail: " + email


    )
    Alert.alert(
        "Nome Completo: " + name
        +"\nEmail: " + email  
    )

}
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Preencha os Dados</Text>

            <TextInput
            style={styles.input}
            placeholder="Nome Completo"


            value={ name }
            onChangeText={ setName }

            />

            <TextInput
            style={styles.input}
            placeholder="E-mail"

            value={ email }
            onChangeText={ setEmail }

            />
            
            <TouchableOpacity style={styles.btn} onPress={ handleUserAdd }>

                    <Text style={styles.btnTxt}>Cadastrar</Text>

            </TouchableOpacity>

        </View>
    )
}