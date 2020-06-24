import React from 'react';
import Components from '../../importsComponentsReact/ImportsReact'

import {Input, Content} from 'native-base';
import TextComponent from '../TextComponent';
import StylesCSS from '../../styles/StylesCSS';
import StylesScreen from '../../styles/StylesScreen';
import BoxContainerItemComponent from './components/BoxContainerItemComponent';
import BoxTextComponent from './components/BoxTextComponent';
import SpaceTopComponent from '../space/SpaceTopComponent';
import BoxItemComponent from './components/BoxItemComponent';
import BoxInputComponent from './components/BoxInputComponent';
import InputComponent from './components/InputComponent';



export default class LoginComponent extends React.Component{

    render() {
        const Background = StylesCSS.onView(this.props.backgroudCSS);

        const BoxLoginButton = StylesCSS.onView(this.props.boxLoginButton)
        const ButtonSignIn = StylesCSS.onTouchableOpacity(this.props.buttonSignIn);

        const BoxForgotPassword = StylesCSS.onView(this.props.boxForgotPassword);

        const BoxCreatAccount = StylesCSS.onView(this.props.boxCreatAccount);
        return (
            <Components.Content>
                <Components.NT.View style={[StylesScreen.createHeight('auto'),
                    {backgroundColor: 'rgba(34, 45, 159, 0.7)'}
                ]}>
                    <BoxTextComponent>
                        <TextComponent
                            text={"ki-tem"}
                            upper
                            color={'#fff'}
                            size={48}
                            fontFamily={'Roboto-Bold'}
                        />
                    </BoxTextComponent>
                    <BoxTextComponent style={{top: 75}}>
                        <TextComponent
                            text={"Guia de Profissionais \n" +
                            "e Serviços"}
                            color={'#E5E5E5'}
                            size={27}
                            fontFamily={'pristina'}
                            textAlign={'center'}
                        />
                    </BoxTextComponent>
                    <BoxItemComponent>
                        <BoxTextComponent style={{top: 20}}>
                            <TextComponent
                                textAlign={'center'}
                                text={"Login"}
                                color={'#2462B1'}
                                size={22}
                                fontFamily={'Questrial-Regular'}
                            />
                        </BoxTextComponent>
                        <BoxInputComponent style={{top: 60}}>
                            <BoxContainerItemComponent>
                                <InputComponent
                                    placeholder={'E-mail'}
                                />
                                {this.props.iconUsername}
                            </BoxContainerItemComponent>
                        </BoxInputComponent>
                        <BoxInputComponent style={{top: 130}}>
                            <BoxContainerItemComponent>
                                <InputComponent secureTextEntry placeholder={'Senha'}></InputComponent>
                                {this.props.iconPassword}
                            </BoxContainerItemComponent>
                        </BoxInputComponent>
                        <BoxLoginButton>
                            <BoxContainerItemComponent>
                                <ButtonSignIn>
                                    <TextComponent
                                        text={'Entrar'}
                                        color={'#fff'}
                                        size={16}
                                        fontFamily={'Sarabun-Bold'}
                                    />
                                </ButtonSignIn>
                            </BoxContainerItemComponent>
                        </BoxLoginButton>
                        <BoxTextComponent style={{top: 240}}>
                            <Components.Button transparent>
                                <TextComponent
                                    text={'Esqueçeu a senha'}
                                    textAlign={'center'}
                                    color={'#757F8C'}
                                    size={14}
                                    fontFamily={'Sarabun-Bold'}
                                />
                            </Components.Button>
                        </BoxTextComponent>
                        <BoxTextComponent style={{top: 270}}>
                            <Components.Button transparent>
                                <TextComponent
                                    text={'Criar uma nova conta'}
                                    textAlign={'center'}
                                    color={'#2462B1'}
                                    size={18}
                                    fontFamily={'Sarabun-Bold'}
                                />
                            </Components.Button>
                        </BoxTextComponent>
                    </BoxItemComponent>
                </Components.NT.View>
            </Components.Content>
        );
    }
}
