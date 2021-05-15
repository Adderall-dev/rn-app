import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import Main from "./components/main";
import StartPage from "./components/start-page";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/startpage" component={StartPage} />
          </Switch>
        </View>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#023047",
    alignItems: "center",
  },
});
