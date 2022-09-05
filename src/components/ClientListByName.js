import React, { Component } from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  Button,
} from "react-native";

import axios from "axios";
import { FIND_BY_NAME_CLIENT } from "../util/urls";

class ClientListByName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: [],
      refreshing: false,
    };
  }
  redirectToHome = () => {
    const { navigation } = this.props;
    navigation.navigate("FormEquipment", { paramKey: 0 }, navigation);
  };
  redirectToEdit = (id) => {
    const { navigation } = this.props;
    navigation.navigate("FormEquipment", { paramKey: id });
  };
  _onRefresh = () => {
    this.setState({ refreshing: true });

    this.setState({ refreshing: false });
  };

  componentDidMount() {
    console.log("I have been mounted");

    console.log("componentDidMount1234");
    console.log("componentDidMount");
    var listClient = [];

    axios({
      method: "post",
      url: FIND_BY_NAME_CLIENT,
      headers: {
        "Content-type": "application/json",
      },
      data: { name: this.props.route.params.name },
    }).then((response1) => {
      console.log(response1.data);
      //doIt(response.data.id, response.data.name);
      var clientOne = { id: response1.data.id, name: response1.data.name };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      for (let i = 0; i < response1.data.length; i++) {
        listClient.push(response1.data[i]);
      }
    });
    this.setState({ client: listClient });
    console.log("minha lista");
  }
  alertItemName = (item) => {
    alert(item.name);
    this.setState({ refreshing: false });
    this.redirectToEdit(item.id);
  };
  render() {
    return (
      <>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          {this.state.client.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={styles.container}
              onPress={() => this.alertItemName(item)}
            >
              <Text style={styles.text}>
                {item.name} - {item.id}{" "}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Button
          onPress={this.redirectToHome}
          title="Adicionar equipamento"
          color="#841584"
        />
      </>
    );
  }
}

export default ClientListByName;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: "#d9f9b1",
    alignItems: "center",
  },
  text: {
    color: "#4f603c",
  },
});
