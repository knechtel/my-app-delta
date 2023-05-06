import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  Button,
  TouchableOpacity,
} from "react-native";

import { login } from "../actions/loginApi";

export default LoginComponent = ({ navigation }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const sendForm = async () => {
    console.log("Olha para ca!!!");
    var TOKEN = await login(email, password);
    console.log(TOKEN);
    if (TOKEN != null) {
      navigation.navigate("filtroComponent", { access_token: TOKEN });
    } else {
      alert("Usuário/Senha inválido!");
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Text>Eletrônica Delta</Text>
        <Text>Fernandes Bastos 1978</Text>
        <Text>Telefone: (51)98204-0011</Text>
        <Image source={require("../img/delta_rotate_txt.png")} />
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity onPress={sendForm} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};;
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#64bd5c",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 3,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#a69550",
  },
});
