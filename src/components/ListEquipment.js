import React, {Component} from 'react';
import {Text} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {FIND_ALL_EQUIPMENT_BY_CLIENT} from '../util/urls';

class ListEquipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipment: [],
      refreshing: false,
    };
  }

  redirectToEdit = id => {
    const {navigation} = this.props;
    navigation.navigate('FormOnlyEquipment', {paramKey: id});
  };

  alertItemName = item => {
    alert(item.name);
    this.setState({refreshing: false});
    console.log('Item id abaixo:');
    console.log(item.id);
    this.redirectToEdit(item.id);
  };
  componentDidMount() {
    const {navigation, route} = this.props;
    axios
      .post(FIND_ALL_EQUIPMENT_BY_CLIENT, {
        id: route.params.paramKey,
      })
      .then(response => {
        console.log(response.data.listEquipment);
        this.setState({
          equipment: response.data.listEquipment,
        });
      });
    console.log(this.state.equipment.length);
  }

  render() {
    return (
      <>
        <Text>Aparelho do cliente _</Text>
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
      </>
    );
  }
}

export default ListEquipment;

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
