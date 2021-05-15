import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
  text?: string;
  handler?: () => void;
}

const ButtonBase = ({ text, handler }: Props) => {
  return (
    <Pressable style={styles.btn} onPress={handler}>
      <Text style={{ color: "white", fontSize: 28 }}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 80,
    backgroundColor: "#219ebc",
    borderRadius: 40,
  },
});

export default ButtonBase;
