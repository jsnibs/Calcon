import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Btn = ({ text, colorText, onPress, zero, double }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={zero ? styles.zeroContainer : double ? styles.doubleContainer : styles.container}      
    >
      <Text style={colorText ? styles.textLight : styles.textDark}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'transparent',
  },
  zeroContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'transparent',
    backgroundColor: 'rgba(95,158,160,0.2)'
  },
  doubleContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'transparent',
  },
  textLight: {
    fontSize: 32,
    color: "#000",
    fontFamily: 'sans-serif-light',
    fontWeight: '200'
  },
  textDark: {
    fontSize: 32,
    color: "#fafafa",
    fontFamily: 'sans-serif-light',
    fontWeight: '200'
  }
});
export default Btn;
