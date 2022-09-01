import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  Button,
} from 'react-native';

import axios from 'axios';
import {
  FIND_ALL_CLIENT,
  EQUIPMENT_FIND_DATA_ENTRADA,
  FIND_BY_ID_CLIENT,
} from '../util/urls';

class ClientListByDataEntrada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: [],
      refreshing: false,
    };
  }

  redirectToHome = () => {
    const {navigation} = this.props;
    navigation.navigate('FormEquipment', {paramKey: 0}, navigation);
  };
  redirectToEdit = id => {
    const {navigation} = this.props;
    navigation.navigate('FormEquipment', {paramKey: id});
  };
  _onRefresh = () => {
    var listClient = [];
    this.setState({refreshing: true});
    // axios({
    //   method: 'post',
    //   url: EQUIPMENT_FIND_DATA_ENTRADA,
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   data: {data_entrada: this.props.route.params.data_entrada},
    // }).then(response1 => {
    //   //doIt(response.data.id, response.data.name);
    //   console.log('response1  -  ');
    //   console.log(response1.data);
    //   console.log('foi');
    //   for (let i = 0; i < response1.data.length; i++) {
    //     console.log(response1.data[i].client_id);
    //     console.log('end');

    //     axios({
    //       method: 'post',
    //       url: FIND_BY_ID_CLIENT,
    //       headers: {
    //         'Content-type': 'application/json',
    //       },
    //       data: {id: Number(response1.data[i].client_id)},
    //     }).then(response => {
    //       console.log(response.data);
    //       var clientOne = {id: response.data.id, name: response.data.name};
    //       // eslint-disable-next-line react-hooks/exhaustive-deps
    //       listClient.push(clientOne);
    //       //doIt(response.data.id, response.data.name);
    //     });
    //   }
    // });
    // this.setState({client: listClient});
    this.setState({refreshing: false});
  };

  componentDidMount() {
    console.log('I have been mounted');

    console.log('componentDidMount1234');
    console.log('componentDidMount');
    var listClient = [];
    console.log('valor = ' + this.props.route.params.data_entrada);

    axios({
      method: 'post',
      url: EQUIPMENT_FIND_DATA_ENTRADA,
      headers: {
        'Content-type': 'application/json',
      },
      data: {data_entrada: this.props.route.params.data_entrada},
    }).then(response1 => {
      //doIt(response.data.id, response.data.name);
      console.log('response1  -  ');
      console.log(response1.data);
      console.log('foi');
      for (let i = 0; i < response1.data.length; i++) {
        console.log(response1.data[i].client_id);
        console.log('end');

        axios({
          method: 'post',
          url: FIND_BY_ID_CLIENT,
          headers: {
            'Content-type': 'application/json',
          },
          data: {id: Number(response1.data[i].client_id)},
        }).then(response => {
          console.log(response.data);
          var clientOne = {id: response.data.id, name: response.data.name};
          // eslint-disable-next-line react-hooks/exhaustive-deps
          listClient.push(clientOne);
          //doIt(response.data.id, response.data.name);
        });
      }
    });
    this.setState({client: listClient});
    console.log('minha lista');
  }
  alertItemName = item => {
    alert(item.name);
    this.setState({refreshing: false});
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
          }>
          {this.state.client.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={styles.container}
              onPress={() => this.alertItemName(item)}>
              <Text style={styles.text}>
                {item.name} - {item.id}{' '}
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

export default ClientListByDataEntrada;

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
