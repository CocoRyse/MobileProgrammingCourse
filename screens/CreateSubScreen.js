import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationBar } from "../components/NavigationsBar";

export const CreateSubScreen = (ScreenBaseComponent) => {
  return (props) => {
    return (
      <View>
        <View style={styles.container}>
          <ScreenBaseComponent {...props} />
        </View>
        <NavigationBar
          selectedIndex={props.route.selectedTab}
          navigation={props.navigation}
        />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    height: 650,
  },
});
