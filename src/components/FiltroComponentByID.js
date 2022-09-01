import React from 'react';
import {StyleSheet, TextInput, View, Linking, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Button, ScrollView} from 'react-native';
import {PDF_BY_ID} from '../util/urls';
const FiltroComponentByID = ({navigation}) => {
  const [id, setId] = React.useState();
  const [check, isCheck] = React.useState(false);
  const handleClick = () => {
    Linking.canOpenURL(PDF_BY_ID + id).then(supported => {
      if (supported) {
        Linking.openURL(PDF_BY_ID + id);
      } else {
        console.log("Don't know how to open URI: ");
      }
    });
  };
  const callId = () => {
    navigation.navigate('FormEquipment', {paramKey: id});
  };
  const osId = () => {
    navigation.navigate('FormEquipment', {paramKey: id});
  };
  const select = select => {
    if (true) {
      handleClick(id);
    }
  };
  return (
    <>
      <ScrollView keyboardShouldPersistTaps="always">
        <TextInput
          style={styles.input}
          value={id}
          placeholder="ID"
          onChangeText={id => setId(id)}
          defaultValue={id}
        />
        <View style={styles1.checkboxContainer}>
          <CheckBox
            style={styles1.checkbox}
            value={check}
            onValueChange={value => select(value)}
          />
          <Text style={styles1.label}>Gerar PDF!</Text>
        </View>
        <View style={{marginVertical: 10}}>
          <Button title="Enviar" onPress={() => callId()} />
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

export default FiltroComponentByID;
