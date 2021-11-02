import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { Card } from "react-native-elements";
import { getPeopleFromPage } from "../services/swapi";
import { CreateScreen } from "./CreateScreen";

const PeopleScreen = (props) => {
  const [people, setPeople] = useState();

  useEffect(() => {
    let shouldUpdateState = true;

    getPeopleFromPage().then((json) => {
      const people = json.results.map((item, index) => ({
        key: index.toString(),
        ...item,
      }));

      if (shouldUpdateState) {
        setPeople(people);
      }
    });

    return () => (shouldUpdateState = false);
  }, [people]);

  const handleListItemClick = (touchedItem) => {
    console.log(touchedItem);
  };

  const renderListItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => handleListItemClick(item)}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Card>
      <Card.Title style={styles.header}>
        {"Список персонажей\nStar Wars"}
      </Card.Title>
      <Card.Divider />
      <FlatList data={people} renderItem={renderListItem} />
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  header: {
    fontSize: 25,
    marginBottom: 25,
    fontWeight: "600",
  },
  textContainer: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginBottom: 25,
    paddingBottom: 2,
  },
  text: {
    fontSize: 20,
    minWidth: 350,
  },
});

export default CreateScreen(PeopleScreen);
