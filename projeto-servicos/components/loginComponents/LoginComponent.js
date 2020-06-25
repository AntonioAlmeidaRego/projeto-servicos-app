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
import {View} from 'react-native';
import AlertComponent from '../alerts/AlertComponent';
import AddIconToFieldComponent from '../AddIconToFieldComponent';



export default class LoginComponent extends React.Component{

    state={
        visible: false,
    }

    onAlert = async ()=>{
        this.setState({
            ...this.state.visible = true,
        });
    }

    render() {

        const BoxLoginButton = StylesCSS.onView(this.props.boxLoginButton)
        const ButtonSignIn = StylesCSS.onTouchableOpacity(this.props.buttonSignIn);

        return (
            <Components.Content>
                <AlertComponent onVisible={this.state.visible}
                                onClose={()=>this.setState({...this.state.visible = false})} type={'danger'}
                                title={'aviso!'} description={'Usuário Inválido. Por favor tente novamente!'}/>
                <Components.NT.View style={[StylesScreen.createHeight('auto'),
                    {backgroundColor: 'rgba(34, 45, 159, 0.7)'}
                ]}>
                    <BoxTextComponent style={{top: 40}}>
                        <TextComponent
                            text={"ki-tem"}
                            upper
                            color={'#fff'}
                            size={48}
                            fontFamily={'Roboto-Bold'}
                        />
                    </BoxTextComponent>
                    <BoxTextComponent style={{top: 105}}>
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
                                <AddIconToFieldComponent
                                    right
                                    text={<TextComponent fontFamily={'Sarabun-Bold'} upper size={10} color={'#EA6A6A'} text={'Campo Obrigatório!'}/>}
                                    icon={<Components.Icon><Components.Feather name={'alert-triangle'} size={18}
                                                                               color={'#EA6A6A'}/></Components.Icon>}
                                />
                            </BoxContainerItemComponent>
                        </BoxInputComponent>
                        <BoxInputComponent style={{top: 130}}>
                            <BoxContainerItemComponent>
                                <InputComponent secureTextEntry placeholder={'Senha'}></InputComponent>
                                {this.props.iconPassword}
                                <AddIconToFieldComponent
                                    right
                                    text={<TextComponent fontFamily={'Sarabun-Bold'} upper size={10} color={'#EA6A6A'} text={'Campo Obrigatório!'}/>}
                                    icon={<Components.Icon><Components.Feather name={'alert-triangle'} size={18}
                                                                               color={'#EA6A6A'}/></Components.Icon>}
                                />
                            </BoxContainerItemComponent>
                        </BoxInputComponent>
                        <BoxLoginButton>
                            <BoxContainerItemComponent>
                                <ButtonSignIn onPress={() => this.onAlert()}>
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
