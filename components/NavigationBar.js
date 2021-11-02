import React, { useCallback } from "react";
import { ButtonGroup } from "react-native-elements";

const buttons = ["Planets", "People", "Films"];

export const NavigationBar = (props) => {
  const handlePressCallback = useCallback((updatedSelectedIndex) => {
    props.navigation.navigate(buttons[updatedSelectedIndex]);
  }, []);

  return (
    <ButtonGroup
      buttons={buttons}
      selectedIndex={props.selectedTab}
      onPress={handlePressCallback}
      containerStyle={{ height: 50 }}
      selectedButtonStyle={{ color: "#cef" }}
    />
  );
};
