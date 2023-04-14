import React from 'react';
import { StyleSheet, TextInput, View } from "react-native";
import * as Progress from "react-native-progress";
import { useEffect } from "react";

import { Button, ScrollView } from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import { PDF_BY_ID } from "../util/urls";
const FiltroComponentByID = ({ route, navigation }) => {
  const [id, setId] = React.useState();
  const [check, isCheck] = React.useState(false);
  const [actBar, setActBar] = React.useState(false);

  useEffect(() => {
    console.log("teste>><<<>><<>>  123", route.params.access_token);
  }, [route.params.access_token]);
  const handleClick = async () => {
    setActBar(true);
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir; // this is the pictures directory. You can check the available directories in the wiki.
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
        notification: true,
        path: PictureDir + "/os.pdf", // this is the path where your downloaded file will live in
        description: "Downloading image.",
      },
    };
    await config(options)
      .fetch("GET", PDF_BY_ID + id)
      .then((res) => {
        // do some magic here
      });
    setActBar(false);
  };
  const callId = () => {
    navigation.navigate("FormEquipment", {
      paramKey: id,
      access_token: route.params.access_token,
    });
  };
  const osId = () => {
    navigation.navigate("FormEquipment", { paramKey: id });
  };
  const select = (select) => {
    if (true) {
      handleClick(id);
    }
  };
  return (
    <>
      {actBar && (
        <Progress.Bar
          progress={0.3}
          width={400}
          animated={true}
          indeterminate={true}
        />
      )}
      <ScrollView keyboardShouldPersistTaps="always">
        <TextInput
          style={styles.input}
          value={id}
          placeholder="     OS"
          onChangeText={(id) => setId(id)}
          defaultValue={id}
        />
        <View style={{ marginVertical: 10 }}>
          <Button
            title="Gera PDF"
            style={styles1.checkbox}
            value={check}
            onPress={(value) => select(value)}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button title="Editar" onPress={() => callId()} />
        </View>
      </ScrollView>
    </>
  );
};;

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
  input: {
    margin: 8,
    font: 24,
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
