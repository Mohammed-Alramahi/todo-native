import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function Note(props) {
  return (
    <View key={props.keyValue} style={styles.note}>
      <Text style={styles.noteText}>{props.val.date}</Text>
      <Text style={styles.noteText}>{props.val.note}</Text>
      <TouchableOpacity onPress={props.deleteMethod} style={styles.noteDelete}>
        <Text style={styles.noteDeleteText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed",
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#E91E63",
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980b9",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDeleteText: {
    color: "white",
    fontSize: 28,
  },
});

export default Note;
