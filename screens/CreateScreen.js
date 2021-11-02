import React from "react";
import { NavigationBar } from "../components/NavigationBar";
import { StyleSheet, View } from "react-native";

export const CreateScreen = (ScreenBaseComponent) => {
  return (props) => (
    <View>
      <View style={styles.container}>
        <ScreenBaseComponent {...props} />
      </View>
      <NavigationBar
        selectedTab={props.route.selectedTab}
        navigation={props.navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 650,
  },
});
