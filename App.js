import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./app/components/main";
import SignUp from "./app/components/auth/signup";
function App() {
  const Drawer = createDrawerNavigator();
  const [screen, setScreen] = React.useState(<SignUp login={login} />);
  function login(user) {
    setScreen(<Main user={user} />);
  }
  return screen;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default App;
