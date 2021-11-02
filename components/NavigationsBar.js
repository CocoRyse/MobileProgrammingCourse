import React, { useCallback } from "react";
import { ButtonGroup } from "react-native-elements/dist/buttons/ButtonGroup";

const buttons = ["Planets", "People", "Films"];

export const NavigationBar = (props) => {
  const handlePressCallback = useCallback((updatedSelectedIndex) => {
    props.navigation.navigate(buttons[updatedSelectedIndex]);
  }, []);

  return (
    <ButtonGroup
      buttons={buttons}
      selectedIndex={props.selectedIndex}
      containerStyle={{ height: 50 }}
      onPress={handlePressCallback}
    />
  );
};
