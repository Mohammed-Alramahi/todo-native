import React from 'react';
import { render } from 'react-dom';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Note from './note';

function Main() {
    constructor (props)  {
super(props);
this.state={
    noteArray:[],
    noteText:'',}
    }
    render(){
        let notes=thus.state.noteArray.map((val,key)=>{
            return <Note key ={key} keyVal={key} val={val} deleteMethod={()=>this.deleteMethod(key)}/>
        });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Todo</Text>
      </View>
      <ScrollView style={styles.scrollView}>{notes}</ScrollView>

      <View style={styles.footer}>
        <TextInput
        onChangeText={(noteText)=>this.setState({noteText})}
        value={this.state.noteText}
          style={styles.textInput}
          underlineColorAndroid="transparent"
          placeholderTextColor="white"
          placeholder="Enter Note"
        ></TextInput>
      </View>
      <TouchableOpacity onPress={this.addNote.bind(this)}style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
addNote(){
    if (this.state.noteText) {
        let d=new Date()
;
this.state.noteArray.push({
    'date':d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate(),'note':this.state.noteText
});
this.setState({noteArray:this.state.noteArray})
this.setState({noteText:''});
}
}
deleteMethod(key){

    this.state.noteArray.splice(key,1);
    this.setState({noteArray:this.state.noteArray})
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    padding: 26,
  },
  scrollView: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 10,
    bottom: 70,
    backgroundColor: '#2196F3',
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 36,
  },
});

export default Main;
