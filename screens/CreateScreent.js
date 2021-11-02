import React, { useEffect, useState } from "react";
import {
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Card } from "react-native-elements";
import { CreateSubScreen } from "./CreateSubScreen";

export const CreateScreen = (dataLoadingCallback, title) =>
  CreateSubScreen((props) => {
    const [people, setPeople] = useState();

    useEffect(() => {
      let shouldComponentUpdate = true;

      dataLoadingCallback().then((json) => {
        const people = json.results.map((item, index) => ({
          key: index.toString(),
          ...item,
        }));

        if (shouldComponentUpdate) {
          setPeople(people);
        }
      });

      return () => {
        shouldComponentUpdate = false;
      };
    }, [people]);

    const renderListItem = ({ item }) => {
      return (
        <TouchableWithoutFeedback>
          <View style={styles.textContainer}>
            <Text styles={styles.text}>{item.name}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    };

    return (
      <Card>
        <Card.Title style={styles.header}>{title}</Card.Title>
        <Card.Divider />
        <FlatList data={people} renderItem={renderListItem} />
      </Card>
    );
  });

const styles = StyleSheet.create({
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
  header: {
    fontSize: 25,
    marginBottom: 25,
    fontWeight: "600",
  },
});
