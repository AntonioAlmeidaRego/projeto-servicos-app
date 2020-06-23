import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput
} from 'react-native';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StylesScreen from '../styles/StylesScreen';
import TextComponent from './TextComponent';
import BoxTextComponent from './BoxTextComponent';
import BoxItemComponent from './BoxItemComponent';
import InputFieldComponent from './InputFieldComponent';
import {
    LoginBackgroudStyle, LoginBoxButtonSigInStyle,
    LoginBoxInputBorderStyle,
    LoginBoxInputContainerStyle,
    LoginBoxInputStyle,
    LoginBoxPasswordBorderStyle, LoginBoxPasswordContainerStyle, LoginBoxPasswordStyle,
    LoginBoxStyle,
    LoginBoxTitleStyle,
    LoginBoxTitleTextStyle, LoginButtonSigInStyle, LoginButtonTitleSigInStyle,
    LoginSubtitleStyle,
    LoginTitleStyle,
} from '../styles/StylesCSS';

export default class BackgroundComponent extends React.Component{

    onBackgroundColor(color){
        return (
            <LoginBackgroudStyle>
                <LoginTitleStyle>
                    <TextComponent
                        text={"ki-tem"}
                        upper
                        color={'#fff'}
                        size={48}
                        fontFamily={'Roboto-Bold'}
                    />
                </LoginTitleStyle>
                <LoginSubtitleStyle>
                    <TextComponent
                        text={"Guia de Profissionais \n" +
                        "e Serviços"}
                        color={'#E5E5E5'}
                        size={27}
                        fontFamily={'pristina'}
                        textAlign={'center'}
                    />
                </LoginSubtitleStyle>
                <LoginBoxStyle>
                    <LoginBoxTitleStyle>
                        <TextComponent
                            textAlign={'center'}
                            text={"Login"}
                            color={'#2462B1'}
                            size={22}
                            fontFamily={'Questrial-Regular'}
                        />
                    </LoginBoxTitleStyle>
                    <LoginBoxInputStyle>
                        <LoginBoxInputContainerStyle>
                            <LoginBoxInputBorderStyle>
                            </LoginBoxInputBorderStyle>
                            <Icon style={{ position: 'absolute', left: 4, top: 12 }}>
                                <AntDesign name={'user'} size={25} color={'#000'}/>
                            </Icon>
                        </LoginBoxInputContainerStyle>
                    </LoginBoxInputStyle>
                    <LoginBoxPasswordStyle>
                        <LoginBoxPasswordContainerStyle>
                            <LoginBoxPasswordBorderStyle/>
                            <Icon style={{ position: 'absolute', left: 4, top: 12 }}>
                                <MaterialCommunityIcons name={'textbox-password'} size={25} color={'#000'}/>
                            </Icon>
                        </LoginBoxPasswordContainerStyle>
                    </LoginBoxPasswordStyle>
                    <LoginBoxButtonSigInStyle>
                        <LoginButtonSigInStyle>
                            <LoginButtonTitleSigInStyle>
                                Entrar
                            </LoginButtonTitleSigInStyle>
                        </LoginButtonSigInStyle>
                    </LoginBoxButtonSigInStyle>
                </LoginBoxStyle>
            </LoginBackgroudStyle>
        )
    }

    onBackgroundImage(){
        return undefined;
    }

    render() {
        return this.props.type == 'color' ? this.onBackgroundColor(this.props.color) : this.onBackgroundImage();
    }
}
