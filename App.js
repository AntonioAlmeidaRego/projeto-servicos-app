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
import LoginComponent from './projeto-servicos/components/loginComponents/LoginComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Icon} from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = require("./projeto-servicos/components/loginComponents/styles/styles");



export default class App extends React.Component{
    render(){
      return (
          <LoginComponent
              backgroudCSS={styles.backgroundCSS}
              titleCSS={styles.titleCSS}
              subTitleCSS={styles.subTitleCSS}
              boxLogin={styles.boxLogin}
              boxLoginTitle={styles.boxLoginTitle}
              boxLoginInputUsername={styles.boxLoginInputUsername}
              inputUsername={styles.inputUsername}
              boxLoginInputPassword={styles.boxLoginInputPassword}
              inputPassword={styles.inputPassword}
              iconUsername={
                  <Icon style={{ position: 'absolute', left: 4, top: 12 }}>
                      <AntDesign name={'user'} size={25} color={'#000'}/>
                  </Icon>
              }
              iconPassword={
                  <Icon style={{ position: 'absolute', left: 4, top: 12 }}>
                      <MaterialCommunityIcons name={'textbox-password'} size={25} color={'#000'}/>
                  </Icon>
              }
              boxLoginButton={
                  styles.boxButtonLogin
              }
              buttonSignIn={
                  styles.buttonSignIn
              }
              boxForgotPassword={
                  styles.boxForgotPassword
              }
              boxCreatAccount={
                  styles.boxCreatAccount
              }
          />
      );
    }
}
