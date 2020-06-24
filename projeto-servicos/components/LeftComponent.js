import React from 'react';
import Components from '../importsComponentsReact/ImportsReact'
import StylesScreen from '../styles/StylesScreen';

export default class LeftComponent extends React.Component{
    render() {
        return (
            <Components.NT.View style={StylesScreen.createLeft()}>
                {this.props.children}
            </Components.NT.View>
        );
    }
}
