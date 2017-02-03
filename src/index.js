/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Analytics from 'mobile-center-analytics';
import Crashes from 'mobile-center-crashes';

export default class testApp extends Component {
  sendEvent(){
    Analytics.trackEvent('clicked on the button',{
      prop1: 'custom property',
      emailAdress: 'rahulanandSinha@gmail.com',
      timeStamp: new Date().toISOString()
    })
  }
  sendNativeCrash(){
    Crashes.generateTestCrash();
  }
  render() {
    return (
      <View style={styles.container}>
          <Button title="Send Event" onPress ={()=>{this.sendEvent()}}/>
          <Button title="Send Native Crashes" onPress ={()=>{this.sendNativeCrash()}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
