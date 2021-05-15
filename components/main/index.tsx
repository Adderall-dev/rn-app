import React from "react";
import { View, Text } from "react-native";
import { useHistory } from "react-router";
import ButtonBase from "../button";

const Main = () => {
  const history = useHistory();
  return (
    <View>
      <Text>Main</Text>
      <ButtonBase
        text="go to start"
        handler={() => history.push("/startpage")}
      />
    </View>
  );
};

export default Main;
