import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ClientList from "./components/ClientList";
import FormEquipment from "./components/FormEquipment";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListEquipment from "./components/ListEquipment";

import FiltroComponent from "./components/FiltroComponent";
import FiltroComponentByID from "./components/FiltroComponentByID";

import FiltroComponentDataEntrada from "./components/FiltroComponentDataEntrada";
import ClientListByDataEntrada from "./components/ClientListByDataEntrada";
import ClientListByDataEntrega from "./components/ClientListByDataEntrega";
import FiltroComponentDataEntrega from "./components/FiltroComponentDataEntrega";
import FiltroComponentByName from "./components/FiltroComponentByName";
import FiltroChangeServer from "./components/FiltroChangeServer";
const Stack = createNativeStackNavigator();

const App = () => {
  const flagComponent = true;

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="filtroComponent"
            component={FiltroComponent}
            options={{ title: "Eletrônica Delta" }}
          />
          <Stack.Screen
            name="filtroComponentByID"
            component={FiltroComponentByID}
            options={{ title: "Eletrônica Delta" }}
          />
          <Stack.Screen
            name="FiltroChangeServer"
            component={FiltroChangeServer}
            options={{ title: "Eletrônica Delta" }}
          />
          <Stack.Screen
            name="FiltroComponentByName"
            component={FiltroComponentByName}
            options={{ title: "Eletrônica Delta" }}
          />

          <Stack.Screen
            name="ClientList"
            component={ClientList}
            options={{ title: "Eletrônica Delta" }}
          />
          <Stack.Screen
            name="FormEquipment"
            component={FormEquipment}
            options={{ title: "Cadastrar Equipamento" }}
          />
          <Stack.Screen
            name="ListEquipment"
            component={ListEquipment}
            options={{ title: "Cadastrar Equipamento" }}
          />
          <Stack.Screen
            name="FiltroComponetDataEntrada"
            component={FiltroComponentDataEntrada}
            options={{ title: "Cadastrar Equipamento" }}
          />
          <Stack.Screen
            name="ClientListByDataEntrada"
            component={ClientListByDataEntrada}
            options={{ title: "Eletrônica Delta" }}
          />
          <Stack.Screen
            name="ClientListByDataEntrega"
            component={ClientListByDataEntrega}
            options={{ title: "Eletrônica Delta" }}
          />
          <Stack.Screen
            name="FiltroComponentDataEntrada"
            component={FiltroComponentDataEntrada}
            options={{ title: "Eletrônica Delta" }}
          />
          <Stack.Screen
            name="FiltroComponentDataEntrega"
            component={FiltroComponentDataEntrega}
            options={{ title: "Eletrônica Delta" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
export default App;
