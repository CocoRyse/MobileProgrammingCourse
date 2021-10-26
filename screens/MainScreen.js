import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getAllPeople } from "../services/swapi";

const MainScreen = () => {
  const [people, setPeople] = useState();
  useEffect(() => {
    const handlePeopleUpdate = (peoples) => {
      const people = peoples.map((item, index) => {
        return {
          key: index.toString(),
          ...item,
        };
      });
      setPeople(people);
    };

    getAllPeople(handlePeopleUpdate);
  }, []);

  const renderListItem = ({ item }) => {
    return <Text style={styles.text}>{item.name}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Список персонажей Star Wars</Text>
      <FlatList data={people} renderItem={renderListItem}></FlatList>
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
    fontSize: 25,
    marginBottom: 15,
    fontWeight: "600",
  },
  text: {
    fontSize: 25,
    paddingBottom: 25,
    minWidth: 300,
  },
});
