import React from 'react';
import Components from '../importsComponentsReact/ImportsReact';
import StylesScreen from '../styles/StylesScreen';
import TextComponent from './TextComponent';
import RowComponent from './RowComponent';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';


export default class FooterMenuComponent extends React.Component{
    render() {
        return (
            <Components.NT.View style={{bottom: 0, position: 'absolute', top: StylesScreen.createHeight('auto').height-90}}>
                <Components.NT.View style={[
                    {width: 314, height: 90, alignSelf: 'center', left: 23, top: 30,
                        borderRadius: 15,
                    },
                    StylesScreen.createColorBackground('#fff')
                ]}>
                <Components.NT.View style={{top: 20, paddingHorizontal: 50}}>
                    <Components.Row>
                        <Components.Left>
                            <Components.Icon >
                                <Components.AntDesign name={'home'} size={30} color={'#A6AAB4'}/>
                            </Components.Icon>

                        </Components.Left>
                        <Components.Right>
                            <Components.Icon>
                                <Components.AntDesign name={'setting'} size={30} color={'#A6AAB4'}/>
                            </Components.Icon>
                        </Components.Right>
                    </Components.Row>
                </Components.NT.View>
                </Components.NT.View>
            </Components.NT.View>
        );
    }
}
