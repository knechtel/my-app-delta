import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { Button, ScrollView } from "react-native";

const FiltroComponentByName = ({ navigation }) => {
  const [name, setName] = React.useState();
  const [check, isCheck] = React.useState(false);

  const callId = (name) => {
    navigation.navigate("ClientListByName", { name: name });
  };

  return (
    <>
      <ScrollView keyboardShouldPersistTaps="always">
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Nome"
          onChangeText={(name) => setName(name)}
          defaultValue={name}
        />

        <View style={{ marginVertical: 10 }}>
          <Button title="Enviar" onPress={() => callId(name)} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default FiltroComponentByName;
