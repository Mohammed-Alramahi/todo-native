import React from 'react'
import { View,Text,StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'

function Main() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Todo</Text>
             </View>
             <ScrollView style={styles.scrollView}>
                
             </ScrollView>
                <View style={styles.footer}>
                    <TextInput style={styles.textInput} underlineColorAndroid="transparent" placeholderTextColor="white" placeholder="Enter Note"></TextInput>
                </View>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
     flex:1,
    },
    header:{
        backgroundColor:'#2196F3',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:10,
        borderBottomColor:'#ddd',
    },
    headerText:{
    color:'white',
    fontSize:20,
    padding:26
    },
    scrollView:{
        flex:1,
        marginBottom:100,
    },
    footer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        zIndex:10

    }, 
    textInput:{
        alignSelf:'stretch',
        color:'#fff',
        padding:20,
        backgroundColor:'#252525',
        borderTopWidth:2,
        borderTopColor:'#ededed'
    },
    addButton:{
        position:'absolute',
        zIndex:11,
        right:10,
        bottom:70,
        backgroundColor:'#2196F3',
        width:70,
        height:70,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        elevation:8
    },
    addButtonText:{
        color:'#fff',
        fontSize:36
    },
  });
  
export default Main
