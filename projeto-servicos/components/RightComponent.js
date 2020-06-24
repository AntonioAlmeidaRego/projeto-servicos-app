import React from 'react';
import Components from '../importsComponentsReact/ImportsReact'
import StylesScreen from '../styles/StylesScreen';


export default class RightComponent extends React.Component{
    render() {
        return (
            <Components.NT.View style={StylesScreen.createRight()}>
                {this.props.children}
            </Components.NT.View>
        );
    }
}
