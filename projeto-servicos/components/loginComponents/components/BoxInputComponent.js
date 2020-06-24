import React from 'react';
import Components from '../../../importsComponentsReact/ImportsReact'
import StylesScreen from '../../../styles/StylesScreen';


export default class BoxInputComponent extends React.Component{
    render() {
        return (
            <Components.NT.View style={[
                StylesScreen.createPositionAbsolute(),
                StylesScreen.createContainer(),
                StylesScreen.createWidth('88%'),
                StylesScreen.createHeight('25%'),
                this.props.style,
            ]}>
                {this.props.children}
            </Components.NT.View>
        );
    }
}
