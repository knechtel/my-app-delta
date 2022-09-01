import React from 'react';
import {StyleSheet, TextInput, Text, View, Alert} from 'react-native';
import {Button, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import {
  CREATE_CLIENT,
  CREATE_EQUIPMENT,
  FIND_BY_ID_CLIENT,
  FIND_EQUIPMENT_BY_CLIENT,
  UPDATE_CLIENT,
} from '../util/urls';
import {
  createNewClient,
  createNewEquipment,
  updateCliente,
  updateEquipment,
} from '../actions/callApi';
import ListEquipment from './ListEquipment';
import {useEffect} from 'react';

const FiltroComponentDataEntrega = () => {
  const [id, setId] = React.useState();
  const navigation = useNavigation();

  const callId = id => {
    console.log('eu');
    console.log(id);

    navigation.navigate('ClientListByDataEntrega', {data_entrega: id});
  };

  return (
    <>
      <ScrollView keyboardShouldPersistTaps="always">
        <TextInput
          style={styles.input}
          value={id}
          placeholder="Data de Saída"
          onChangeText={id => setId(id)}
          defaultValue={id}
        />

        <View style={{marginVertical: 10}}>
          <Button title="Enviar" onPress={() => callId(id)} />
        </View>
      </ScrollView>
    </>
  );
};

const stylesButton = StyleSheet.create({
  button: {
    marginBottom: 20,
    padding: 30,
  },
});

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default FiltroComponentDataEntrega;
