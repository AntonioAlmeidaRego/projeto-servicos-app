import React from 'react';
import Components from '../importsComponentsReact/ImportsReact'
import StylesScreen from '../styles/StylesScreen';


export default class RowComponent extends React.Component{
    render() {
        return (
            <Components.NT.View style={StylesScreen.createFlexDirection('row')}>
                {this.props.children}
            </Components.NT.View>
        );
    }
}
