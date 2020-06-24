import React from 'react';
import Components from '../importsComponentsReact/ImportsReact'
import StylesScreen from '../styles/StylesScreen';

export default class BoxItemComponent extends React.Component{
    render() {
        return (
            <Components.NT.View style={[StylesScreen.createFlex(1), StylesScreen.createWidth('auto')]}>
                <Components.NT.View style={[StylesScreen.createPositionAbsolute(),
                    StylesScreen.createWidth(this.props.width),
                    StylesScreen.createHeight(this.props.height),
                    StylesScreen.createMarginTop(this.props.top),
                    StylesScreen.createColorBackground(this.props.backgroundColor),
                    StylesScreen.createBorderRadius(this.props.borderRadius)
                ]}>
                    {this.props.children}
                </Components.NT.View>
            </Components.NT.View>
        );
    }
}
