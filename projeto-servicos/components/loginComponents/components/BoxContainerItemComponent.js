import React from 'react';
import Components from '../../../importsComponentsReact/ImportsReact';
import StylesScreen from '../../../styles/StylesScreen';




export default class BoxContainerItemComponent extends React.Component{
    render() {

        return (
              <Components.NT.View style={[StylesScreen.createPositionAbsolute(),
                  {left: 0, right: 0, bottom: 0, top: 0,}
              ]}>
                  {this.props.children}
              </Components.NT.View>
        );
    }
}
