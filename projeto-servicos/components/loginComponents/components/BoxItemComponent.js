import React from 'react';
import Components from '../../../importsComponentsReact/ImportsReact';
import StylesScreen from '../../../styles/StylesScreen';


export default class BoxItemComponent extends React.Component{
    render() {
        return (
            <Components.NT.View style={[
                StylesScreen.createPositionAbsolute(),
                StylesScreen.createContainer(),
                StylesScreen.createBox('center', 'center',
                    'center', 286, 325, 12, null),
                StylesScreen.createColorBackground('#fff'),
                {top: 200}
            ]}>
                {this.props.children}
            </Components.NT.View>
        );
    }
}
