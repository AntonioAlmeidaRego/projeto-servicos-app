import React from 'react';
import Components from '../importsComponentsReact/ImportsReact'
import StylesScreen from '../styles/StylesScreen';
import TextComponent from './TextComponent';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import RowComponent from './RowComponent';

export default class ListComponent extends React.Component{
    render() {
        return (
            <Components.Content>
                <Components.NT.View style={[StylesScreen.createHeight('auto'),
                    {backgroundColor: 'rgba(116, 125, 221, 0.6)'}
                ]}>
                   <RowComponent style={StylesScreen.createPositionAbsolute()}>
                       <LeftComponent>
                           <Components.NT.View style={[StylesScreen.createPositionAbsolute(),
                               {width: 13,
                                   height: StylesScreen.createHeight('auto').height,
                                   left: 0,
                                   top: 0,
                                   bottom: 0,
                                   backgroundColor: '#2462B1',
                               }
                           ]}>

                           </Components.NT.View>
                       </LeftComponent>
                       {this.props.children}
                       <RightComponent>
                           <Components.NT.View style={[StylesScreen.createPositionAbsolute(),
                               {   width: 22,
                                   height: StylesScreen.createHeight('auto').height,
                                   top: 0,
                                   bottom: 0,
                                   backgroundColor: '#2462B1',
                               }
                           ]}>
                           </Components.NT.View>
                       </RightComponent>
                   </RowComponent>
                </Components.NT.View>
            </Components.Content>
        );
    }
}
