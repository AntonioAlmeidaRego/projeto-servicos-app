/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import BackgroundComponent from './projeto-servicos/components/BackgroundComponent';

export default class App extends React.Component{
    render(){
      return (
          <BackgroundComponent
                type={'color'}
                color={'#222d9f'}
          />
      );
    }
}
