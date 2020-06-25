import React from 'react';
import Components from '../../importsComponentsReact/ImportsReact'

import TextComponent from '../TextComponent';
import StylesCSS from '../../styles/StylesCSS';
import StylesScreen from '../../styles/StylesScreen';
import BoxContainerItemComponent from './components/BoxContainerItemComponent';
import BoxTextComponent from './components/BoxTextComponent';
import BoxItemComponent from './components/BoxItemComponent';
import BoxInputComponent from './components/BoxInputComponent';
import InputComponent from './components/InputComponent';
import AlertComponent from '../alerts/AlertComponent';
const validation = new Components.Validation();
const arrayUtil = new Components.ArrayUtil();

export default class LoginComponent extends React.Component{

    state={
        isError: false,
        isNotFound: false,
        buttonValid: false,
        isLoading: false,
        isDisabled: false,
        inputs: [],
        top: 0,
        isEmail: false,
    }

    componentWillUnmount() {
        arrayUtil.clear();
    }

    onStop = async ()=>{
        this.setState({
            ...this.state.buttonValid = false,
        });
    }

    onSetInput = async(id, val)=>{
        validation.setValInput(id, val);
        if(id == "email" && !validation.isEmail(val)){
            this.setState({
                top: 40,
                isEmail: true,
            });
        }else if(id == "email" && validation.isEmail(val)){
            this.setState({
                top: 0,
                isEmail: false
            });
        }

        this.setState({
            inputs: validation.toArray,
        });
    }

    onLoading(){
        return (
            <Components.NT.ActivityIndicator color="#fff" size={30} />
        )
    }

    onRequest = async ()=>{
        this.setState({
            ...this.state.buttonValid = true,
        });
        if(!arrayUtil.isEmpty()){
            if(!arrayUtil.isAttrsEmpty('val')){
                if(validation.isEmail(arrayUtil.object('email').val)){
                    const statusOK = 200;
                    const statusNOTFOUND = 404;
                    const statusERROR = 500;
                    const result = this.props.onActionRequest;
                    if(statusNOTFOUND == result){
                        this.setState({
                            isError: false,
                            isNotFound: true,
                            top: 45,
                        });
                    }else if(statusERROR == result){
                        this.setState({
                            ...this.state.buttonValid = true,
                            isError: true,
                            isNotFound: false,
                            top: 45,
                        });
                    }
                }else{
                    this.setState({
                        top: 40,
                        isEmail: true,
                    });
                }
            }
        }
    }

    render() {

        const BoxLoginButton = StylesCSS.onView(this.props.boxLoginButton)
        const ButtonSignIn = StylesCSS.onTouchableOpacity(this.props.buttonSignIn);

        return (
            <Components.Content>

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
                    <BoxItemComponent width={286} height={325 + this.state.top}>
                        <BoxTextComponent style={{top: 20}}>
                            <TextComponent
                                textAlign={'center'}
                                text={"Login"}
                                color={'#2462B1'}
                                size={22}
                                fontFamily={'Questrial-Regular'}
                            />
                            {this.state.isError &&(
                                <AlertComponent onVisible={this.state.isError}
                                                onClose={()=>this.setState({...this.state.isError = false, top: 0})} type={'danger'}
                                                description={this.props.error}/>
                            )}
                            {this.state.isNotFound &&(
                                <AlertComponent onVisible={this.state.isNotFound}
                                                onClose={()=>this.setState({...this.state.isNotFound = false, top: 0})} type={'danger'}
                                                description={this.props.notFound}/>
                            )}
                            {this.state.isEmail &&(
                                <AlertComponent type={'danger'} description={'Email Inválido!'}
                                                onClose={()=>this.setState({...this.state.isEmail = false, top: 0})}
                                />
                            )}
                        </BoxTextComponent>
                        <BoxInputComponent style={{top: parseInt(60 + this.state.top)}}>
                            <BoxContainerItemComponent>
                                <InputComponent
                                    id={"email"}
                                    onSet={this.onSetInput}
                                    onStop={this.onStop}
                                    valid={this.state.buttonValid}
                                    placeholder={'E-mail'}
                                />
                                {this.props.iconUsername}
                            </BoxContainerItemComponent>
                        </BoxInputComponent>
                        <BoxInputComponent style={{top: parseInt(130 + this.state.top)}}>
                            <BoxContainerItemComponent>
                                <InputComponent
                                    id={"password"}
                                    onSet={this.onSetInput}
                                    onStop={this.onStop}
                                    valid={this.state.buttonValid}
                                    secureTextEntry
                                    placeholder={'Senha'} />
                                {this.props.iconPassword}
                            </BoxContainerItemComponent>
                        </BoxInputComponent>
                        <BoxLoginButton>
                            <BoxContainerItemComponent>
                                <ButtonSignIn style={{top: parseInt(this.state.top)}} disabled={this.state.isDisabled} onPress={() => this.onRequest()}>
                                    {this.state.isLoading &&(
                                        this.onLoading()
                                    )}
                                    {!this.state.isLoading && (
                                        <TextComponent
                                            text={'Entrar'}
                                            color={'#fff'}
                                            size={16}
                                            fontFamily={'Sarabun-Bold'}
                                        />
                                    )}
                                </ButtonSignIn>
                            </BoxContainerItemComponent>
                        </BoxLoginButton>
                        <BoxTextComponent style={{top: parseInt(240 + this.state.top)}}>
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
                        <BoxTextComponent style={{top: parseInt(270 + this.state.top)}}>
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
