import { StatusBar } from 'expo-status-bar';
import path from 'path/posix';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {WebView} from 'react-native-webview'

export default class HomeScreen extends React.Component{

  render(){
    const {longitude, latitude} = this.state
    const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}.102493&latitude=${latitude}.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'

    return(
      <View>
         <WebView scalesPageToFit = {true}
      source = {{uri: path}}
      style = {{marginBottom: 20, marginTop: 20}}/>

      <TextInput style = {{height: 40, borderColor: 'gray', borderWidth: 1}}
      placeholder = "Enter your latitude"
      placeholderTextColor = "#ffff#000000" 
      onChangeText = {(text)=>{
        this.setState({
          latitude: text
        })
      }}/>

    <TextInput style = {{height: 40, borderColor: 'gray', borderWidth: 1}}
      placeholder = "Enter your longitude"
      placeholderTextColor = "#ffff#000000" 
      onChangeText = {(text)=>{
        this.setState({
          longitude: text
        })
      }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});