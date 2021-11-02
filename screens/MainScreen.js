import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { ScreensMapping } from "./ScreensMapping";

// const buttons = [{ key: "Planets" }, { key: "People" }, { key: "Films" }];
const buttons = Object.keys(ScreensMapping).map((item) => ({ key: item }));

const MainScreen = ({ navigation }) => {
  const handleListItemPress = (touchedItemData) => {
    navigation.navigate(touchedItemData.key);
  };

  const renderListItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => handleListItemPress(item)}>
        <Text style={styles.text}>{item.key}</Text>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Выбирети на какой экран хотите перейти</Text>
      <FlatList data={buttons} renderItem={renderListItem}></FlatList>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    marginBottom: 15,
  },
  text: {
    fontSize: 25,
    margin: 15,
  },
});
