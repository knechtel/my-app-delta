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
import { FIND_EQUIPMENT_BY_CLIENT} from '../util/urls';

class ClientListEquipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
 
      equipment:[],
      refreshing: false,
    };
  }
  redirectToHome = () => {
    const {navigation} = this.props;
    navigation.navigate('FormEquipmentByID', {paramKey: 0}, navigation);
  };
  redirectToEdit = id => {
    const {navigation} = this.props;
    navigation.navigate("FormEquipmentByID", {
      paramKey: id,
      access_token: this.props.route.params.access_token,
    });
    
  };
  _onRefresh = () => {

    this.setState({refreshing: true});
    axios.post(FIND_EQUIPMENT_BY_CLIENT,{
      headers: {"Authorization" : `Bearer ${this.props.route.params.access_token}`} },
      {"id":this.props.route.params.paramKey}).then(response => {
      this.setState({
        equipment: response.data,
      });
    });
    this.setState({refreshing: false});
  };

   componentDidMount() {
    axios.post(FIND_EQUIPMENT_BY_CLIENT,{ 
     "id":this.props.route.params.paramKey},{
      headers: {"Authorization" : `Bearer ${this.props.route.params.access_token}`},
     } )  .then(response => {
      console.log(response.data);
      this.setState({
        equipment: response.data,
      });
    });;

    }
  alertItemName = item => {
    alert(item.model);
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
          {this.state.equipment.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={styles.container}
              onPress={() => this.alertItemName(item)}>
              <Text style={styles.text}>
                {item.model} - {item.id}{' '} 
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

export default ClientListEquipment;

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
