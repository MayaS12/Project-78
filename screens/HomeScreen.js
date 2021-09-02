import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, SafeAreaView, StatusBar, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View>
        <SafeAreaView/>
        <ImageBackground source = {require("../assets/stars.gif")} style = {styles.background}>
        <View>
            <Text style = {styles.title}>
              Stellar App!
            </Text>
          </View>

          <TouchableOpacity style = {styles.routeCard} onPress = {() => {
            this.props.navigation.navigate('SpaceCraft')
          }}>
            <Text style = {styles.routeText}>
              Space Crafts!
            </Text>
            <Image source = {require('../assets/space_crafts.png')} style = {{width: 80, height: 80, position: 'absolute', top: 10, left: 20, }}></Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.routeCard} onPress = {() => {
            this.props.navigation.navigate('StarMap')
          }}>
            <Text style = {styles.routeText}>
              Star Map!
            </Text>
            <Image source = {require('../assets/star_map.png')} style = {{width: 80, height: 80, position: 'absolute', top: 10, left: 20}}></Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.routeCard} onPress = {() => {
            this.props.navigation.navigate('DailyPic')
          }}>
            <Text style = {styles.routeText}>
              Daily Pictures!
            </Text>
            <Image source = {require('../assets/daily_pictures.png')} style = {{width: 80, height: 80, position: 'absolute', top: 10, left: 20}}></Image>
          </TouchableOpacity>
        </ImageBackground>
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
  title:{
    color: 'white', 
    alignSelf: 'center', 
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    flex: 0.15,
    marginTop: 30
  },
  routeCard:{
    flex: 0.35,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 2,
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50
  },
  routeText:{
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 120,
    marginTop: 60,
    fontSize: 35,
  },
});