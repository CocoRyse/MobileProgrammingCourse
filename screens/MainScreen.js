import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getAllPeople } from "../services/swapi";

const MainScreen = () => {};

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
