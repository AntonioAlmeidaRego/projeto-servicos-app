import React from 'react';

import Components from '../../../importsComponentsReact/ImportsReact';
import StylesScreen from '../../../styles/StylesScreen';

export default class InputComponent extends React.Component{
    render() {
        return (
            <Components.Item style={StylesScreen.removeBorderBottom()}>
                <Components.Input
                    style={{borderWidth: 0.2, paddingLeft: 35, borderRadius: 6}}
                    secureTextEntry={this.props.secureTextEntry !== undefined
                    && this.props.secureTextEntry != null ? true : false}
                    placeholder={this.props.placeholder}>
                </Components.Input>
            </Components.Item>
        );
    }
}
