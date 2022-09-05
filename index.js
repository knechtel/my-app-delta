import { registerRootComponent } from 'expo';
import React from "react";

import { StyleSheet, Text, View } from "react-native";

import ClientList from "./src/components/ClientList";
import FormEquipment from "./src/components/FormEquipment";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListEquipment from "./src/components/ListEquipment";

import FiltroComponent from "./src/components/FiltroComponent";
import FiltroComponentByID from "./src/components/FiltroComponentByID";
import FiltroComponentByName from "./src/components/FiltroComponentByName";
import FiltroComponentDataEntrada from "./src/components/FiltroComponentDataEntrada";
import ClientListByDataEntrada from "./src/components/ClientListByDataEntrada";
import ClientListByDataEntrega from "./src/components/ClientListByDataEntrega";
import FiltroComponentDataEntrega from "./src/components/FiltroComponentDataEntrega";
import ClientListByName from "./src/components/ClientListByName";
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
            name="FiltroComponentByName"
            component={FiltroComponentByName}
            options={{ title: "Eletrônica Delta" }}
          />

          <Stack.Screen
            name="filtroComponentByID"
            component={FiltroComponentByID}
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
            name="ClientListByName"
            component={ClientListByName}
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
registerRootComponent(App);