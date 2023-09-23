import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import { ScrollView, StyleSheet, Linking } from "react-native";

import { PDF_BY_ID, PHOTO_SERVIDOR } from "../util/urls";

class FiltroComponent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  handleClick = (id) => {
    Linking.canOpenURL(PDF_BY_ID + id).then((supported) => {
      if (supported) {
        Linking.openURL(PDF_BY_ID + id);
      } else {
        console.log("Don't know how to open URI: ");
      }
    });
  };
  photoServidor = () => {
    Linking.canOpenURL(PHOTO_SERVIDOR).then((supported) => {
      if (supported) {
        Linking.openURL(PHOTO_SERVIDOR);
      } else {
        console.log("Don't know how to open URI: ");
      }
    });
  };
  numeroOS = () => {
    const { navigation } = this.props;
    navigation.navigate("filtroComponentByID", {
      access_token: this.props.route.params.access_token,
    });
  };
  dataEntrada = () => {
    const { navigation } = this.props;
    navigation.navigate("FiltroComponentDataEntrada", {
      access_token: this.props.route.params.access_token,
    });
    console.log("data_entrada token " + this.props.route.params.access_token);
  };
  dataEntrega = () => {
    const { navigation } = this.props;
    navigation.navigate("FiltroComponentDataEntrega", {
      access_token: this.props.route.params.access_token,
    });
  };
  listClient = () => {
    const { navigation } = this.props;
    navigation.navigate("ClientList", {
      access_token: this.props.route.params.access_token,
    });
  };
  doNewClient = async () => {
    const { navigation } = this.props;
    navigation.navigate(
      "FormEquipment",
      { access_token: this.props.route.params.access_token },
      navigation
    );
  };
  filtroPorNome = () => {
    const { navigation } = this.props;
    navigation.navigate("FiltroComponentByName");
  };
  render() {
    return (
      <>
        <Text>Controle de ordem de serviço _</Text>
        <ScrollView>
          <View style={{ marginVertical: 10 }}>
            <Button
              title="Cadastrar Cliente"
              onPress={() => this.doNewClient()}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button title="All Clients" onPress={() => this.listClient()} />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button title="por numero de os " onPress={() => this.numeroOS()} />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button
              title="por data de entrada "
              onPress={() => this.dataEntrada()}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button
              title="por data de Saída "
              onPress={() => this.dataEntrega()}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button title="PDF" onPress={() => this.numeroOS()} />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button
              title="Filtro por nome"
              onPress={() => this.filtroPorNome()}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default FiltroComponent;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  text: {
    color: '#4f603c',
  },
});
