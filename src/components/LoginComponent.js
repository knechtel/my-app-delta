import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "react-native-login-screen";
const LoginComponent = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  return (
    <LoginScreen
      onLoginPress={() => {}}
      onSignupPress={() => {}}
      onEmailChange={(email) => {}}
      onPasswordChange={(setPassword) => {}}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default LoginComponent;
