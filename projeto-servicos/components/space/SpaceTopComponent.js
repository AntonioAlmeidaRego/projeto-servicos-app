import React from 'react';
import Components from '../../importsComponentsReact/ImportsReact';
import StylesScreen from '../../styles/StylesScreen';


export default class SpaceTopComponent extends React.Component{
    render() {
        return (
            <Components.NT.View style={StylesScreen.createSpaceTop(this.props.space)}>
                {this.props.children}
            </Components.NT.View>
        );
    }
}
