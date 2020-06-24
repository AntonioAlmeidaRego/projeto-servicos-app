import React from 'react';
import Components from '../../../importsComponentsReact/ImportsReact'
import StylesScreen from '../../../styles/StylesScreen';

export default class BoxTextComponent extends React.Component{
    render() {
        return (
            <Components.NT.View style={[StylesScreen.createPositionAbsolute(),
                StylesScreen.createContainerText(),
                this.props.style,
            ]}>
                {this.props.children}
            </Components.NT.View>
        );
    }
}
