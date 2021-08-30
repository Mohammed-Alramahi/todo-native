import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons as Icon } from "@expo/vector-icons";

function SignUp(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(true);
  const [icon, setIcon] = React.useState("eye");
  function showHidePassword() {
    setShowPassword(!showPassword);
    icon == "eye" ? setIcon("eye-off") : setIcon("eye");
  }
  function login() {
    console.log("login");
    props.login(email);
  }
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign In</Text>
      </View>
      <View style={styles.container}>
        <Icon
          name="person"
          size={24}
          color="#000"
          style={styles.emailInputIcon}
        />
        <TextInput
          style={styles.emailInput}
          onChangeText={(val) => setEmail(val)}
          value={email}
          placeholder="Enter User Name"
        />
        <Icon
          name="lock-closed"
          size={24}
          color="#000"
          style={styles.lockIcon}
        />
        <TextInput
          style={styles.passwordInput}
          onChangeText={(val) => setPassword(val)}
          value={password}
          placeholder="Enter Password"
          secureTextEntry={showPassword}
        />
        <Icon
          name={icon}
          style={styles.showPasswordIcon}
          size={20}
          onPress={() => showHidePassword()}
        />
        <TouchableOpacity onPress={() => login()} style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 50,
  },
  header: {
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    padding: 26,
    marginBottom: 10,
  },
  signInButton: {
    position: "absolute",
    left: "30%",
    top: "45%",
    backgroundColor: "#80ED99",
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    borderRadius: 3,
  },
  signInButtonText: {
    fontSize: 20,
    color: "#22577A",
    fontWeight: "bold",
  },

  emailInput: {
    flex: 1,
    position: "absolute",
    height: 35,
    left: "16%",
    right: "30%",
    top: "24%",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 28,
    color: "#131365",
    borderWidth: 1,
    borderColor: "#331365",
    paddingLeft: 5,
  },
  passwordInput: {
    flex: 1,
    position: "absolute",
    height: 35,
    left: "15%",
    right: "30%",
    top: "35%",
    flexDirection: "column",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 28,
    display: "flex",
    alignItems: "center",
    color: "#131365",
    borderWidth: 1,
    borderColor: "#331365",
    paddingLeft: 5,
  },
  showPasswordIcon: {
    position: "absolute",
    right: "31%",
    top: "36%",
  },
  lockIcon: {
    position: "absolute",
    left: "8.5%",
    top: "36%",
  },
  emailInputIcon: {
    position: "absolute",
    left: "8.5%",
    top: "24.5%",
  },
});

export default SignUp;
