import React, { Fragment, useState } from "react";
import { View, Text, StyleSheet, Button, Image, FlatList } from "react-native";

let res;

const getRes = async () => {
  try {
    res = (
      await (await fetch("http://swapi.dev/api/planets/")).json()
    ).results.map((item, index) => {
      return { ...item, key: index };
    });
    console.log(res);
  } catch {
    console.log("не повезло");
    return ["Не повезло, дружище"];
  }
};

const MainScreen = () => {
  if (!res) {
    getRes();
  }

  const renderListItem = ({ item }) => {
    return <Text style={styles.text}>{item.json()}</Text>;
  };

  return (
    <View style={styles.container} accessibilityLabel={res?.length}>
      <FlatList data={res} renderItem={renderListItem}></FlatList>
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
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  text: {
    backgroundColor: "#fff",
  },
});
