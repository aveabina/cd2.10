import { View, StyleSheet, StatusBar } from "react-native";
import GifsList from "../components/GifsList";


import * as React from 'react';
function MainApp() {
  return (
    <View style={styles.appContainer}>
      <StatusBar hidden />
      <GifsList/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: { flex: 1, backgroundColor: "#fff" },
});

export default MainApp;