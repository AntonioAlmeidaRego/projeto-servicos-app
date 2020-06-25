import React from 'react';

import Components from '../../../importsComponentsReact/ImportsReact';
import StylesScreen from '../../../styles/StylesScreen';
import Required from '../../../app/model/Required';
import TextComponent from '../../TextComponent';
import AddIconToFieldComponent from '../../AddIconToFieldComponent';

export default class InputComponent extends React.Component{
    constructor(props: Readonly<P>) {
        super(props);
        this.required = new Required(false);
        this.secureText = new Required(this.props.secureTextEntry !== undefined ? true : false);
        this.secureVisibleStyle = new Required(false);
        this.secureIcon = new Required(false);
        this.state = {
            val: '',
            start: false,
            nameIcon: 'visibility-off',
        }
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if(prevProps.valid !== undefined){
            if(this.props.valid && this.state.val == ""){
                this.setState({
                    ...this.required.required = true,
                });
                this.props.onStop();
            }
        }
    }

    onChange = async (val: string)=>{
        this.setState({
            val: val,
            ...this.required.required = false,
            ...this.secureVisibleStyle.required = true,
            ...this.secureIcon.required = this.props.secureTextEntry !== undefined ? true : false,
        });

    }

    onSecureText(){
        if(this.state.nameIcon == 'visibility-off'){
            this.setState({nameIcon: 'visibility', ...this.secureText.required = false});
        }else{
            this.setState({nameIcon: 'visibility-off', ...this.secureText.required = true});
        }
    }

    onStyles(){
        if(this.required.required){
            return {borderWidth: 0.5, paddingLeft: 35, borderRadius: 6, borderColor: '#EA6A6A'}
        }else if(this.secureText.required){
            return {borderWidth: 0.2, paddingLeft: 35, borderRadius: 6, paddingRight: 50};
        }
        return {borderWidth: 0.2, paddingLeft: 35, borderRadius: 6}
    }

    render() {
        return (
            <Components.Item style={StylesScreen.removeBorderBottom()}>
                <Components.Input
                    onChangeText={val => this.onChange(val)}
                    style={this.onStyles()}
                    secureTextEntry={this.secureText.required}
                    value={this.state.val}
                    placeholder={this.props.placeholder}>
                </Components.Input>
                {this.required.required && (
                    <AddIconToFieldComponent
                        right
                        text={<TextComponent fontFamily={'Sarabun-Bold'} upper size={10} color={'#EA6A6A'} text={'Campo Obrigatório!'}/>}
                        icon={<Components.Icon><Components.Feather name={'alert-triangle'} size={18}
                                                                   color={'#EA6A6A'}/></Components.Icon>}
                    />
                )}
                {this.secureIcon.required &&(
                    <AddIconToFieldComponent
                        right
                        icon={<Components.Icon onPress={ () => this.onSecureText()}><Components.MaterialIcons name={this.state.nameIcon} size={18}
                                                                                                              color={'#686767'}/></Components.Icon>}
                    />
                )}
            </Components.Item>
        );
    }
}
