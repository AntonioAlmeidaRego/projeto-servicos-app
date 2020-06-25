/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import LoginComponent from './projeto-servicos/components/loginComponents/LoginComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Icon} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListComponent from './projeto-servicos/components/ListComponent';
import BoxItemComponent from './projeto-servicos/components/BoxItemComponent';
import BoxItemAvatarComponent from './projeto-servicos/components/BoxItemAvatarComponent';
import TextComponent from './projeto-servicos/components/TextComponent';
import Component from './projeto-servicos/importsComponentsReact/ImportsReact';
import FooterMenuComponent from './projeto-servicos/components/FooterMenuComponent';

const styles = require("./projeto-servicos/components/loginComponents/styles/styles");

const list = [
    {id: 1, value: 'Assistência Técnica'},
    {id: 2, value: 'Aulas'},
    {id: 3, value: 'Autos'},
    {id: 4, value: 'Consulturia'},
    {id: 5, value: 'Eventos'},
    {id: 6, value: 'Moda e Beleza'},
    {id: 7, value: 'Reformas'}
]

export default class App extends React.Component{

    onScreenLogin(){
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
        )
    }

    onScreenListCategorias(){
        return <ListComponent
                    children={
                        [<BoxItemComponent
                            width={314}
                            height={549}
                            backgroundColor={'#fff'}
                            top={12}
                            borderRadius={15}
                        >
                            <BoxItemAvatarComponent
                                title={'Antônio Almeida'}
                                description={'antonio.alm_pdf@hotmail.com'}
                            />
                            <View style={{top: 40}}>
                                <TextComponent
                                    textAlign={'center'}
                                    text={"Lista de Categorias"}
                                    color={'#2462B1'}
                                    size={18}
                                    fontFamily={'Questrial-Regular'}
                                />
                            </View>
                            <View style={{top: 60}}>
                                {list.map(item =>
                                    <Component.ListItem>
                                        <Component.Left>
                                            <TextComponent color={'#484851'} fontFamily={'Roboto-Regular'} text={item.value}/>
                                        </Component.Left>
                                        <Component.Right>
                                            <Component.Icon name={'ios-arrow-forward'} size={30} color={'#000'}>
                                            </Component.Icon>
                                        </Component.Right>
                                    </Component.ListItem>
                                )}
                            </View>
                        </BoxItemComponent>,
                        <FooterMenuComponent />
                        ]
                    }
                />
    }

    render(){
      return (
          this.onScreenLogin()
      );
    }
}
