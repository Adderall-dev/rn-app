import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useHistory } from "react-router-native";
import ButtonBase from "../button";

const StartPage = () => {
  const history = useHistory();

  return (
    <View>
      <View>
        <Text>start</Text>
      </View>
      <ButtonBase text="Go to Main" handler={() => history.push("/")} />
    </View>
  );
};

export default StartPage;
