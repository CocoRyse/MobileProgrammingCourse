import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const MainScreen = () => {
  const [planets, setPlanets] = useState();

  const fetchPlanets = async () => {
    try {
      const response = await fetch("http://swapi.dev/api/planets/");
      const planetsJson = await response.json();
      const planets = planetsJson.results.map((planet, index) => {
        return {
          key: index.toString(), // необходимо для того, чтобы не было проблем с открисовкой списка
          ...planet,
        };
      });
      setPlanets(planets);
    } catch {
      // Хорошо бы хендлить ошибку по-человечески, но это потом
      console.error("Не повезло, не повезло");
    }
  };

  // Хук useEffect позволяет управлять
  // различными сопутствующими действиями в функциональном компоненте —
  // то, что называется побочными эффектами
  // В нашем случае это вызов метода SWAPI
  // https://ru.reactjs.org/docs/hooks-reference.html#useeffect
  useEffect(() => {
    fetchPlanets();
  }, []);

  const renderListItem = ({ item }) => {
    return <Text style={styles.text}>{item.name}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>swapi.dev/api/planets/</Text>
      <FlatList data={planets} renderItem={renderListItem}></FlatList>
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
