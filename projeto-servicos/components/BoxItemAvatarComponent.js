import React from 'react';
import Components from '../importsComponentsReact/ImportsReact';
import StylesScreen from '../styles/StylesScreen';
import RowComponent from './RowComponent';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import TextComponent from './TextComponent';


export default class BoxItemAvatarComponent extends React.Component{
    render() {
        console.log(this.props.description.length);
        return (
            <Components.NT.View style={[
            ]}>
                <RowComponent style={[
                    StylesScreen.createPositionAbsolute(),
                ]}>
                    <LeftComponent>
                        <Components.Thumbnail
                            style={[StylesScreen.createTop(20), {marginLeft: 60}, {width: 80}]}
                            large source={{uri: 'https://www.vippng.com/png/full/8-87659_clipart-big-image-png-transparent-background-user-icon.png'}}>

                        </Components.Thumbnail>
                    </LeftComponent>
                    <RightComponent>
                        <Components.NT.View style={[StylesScreen.createTop(40), {paddingHorizontal: 20}]}>
                            <Components.NT.View style={{right: 20, position: 'absolute', bottom: -2}}>
                                <TextComponent
                                    text={this.props.title}
                                    textAlign={'center'}
                                    fontFamily={'Roboto-Regular'}
                                    justifyContent={'center'}
                                    alignSelf={'center'}
                                    size={15}
                                    color={'#505050'}
                                    padding={10}
                                />
                            </Components.NT.View>
                            <Components.NT.View style={{right: 15, position: 'absolute', top: 0, left: -160}}>
                                <TextComponent
                                    text={this.props.description}
                                    textAlign={'center'}
                                    justifyContent={'center'}
                                    alignSelf={'center'}
                                    fontFamily={'Roboto-Bold'}
                                    size={12}
                                    color={'#e0dfdf'}
                                />
                            </Components.NT.View>
                        </Components.NT.View>
                    </RightComponent>
                </RowComponent>
                <Components.NT.View style={[StylesScreen.createBorder('#e0dfdf', 0.5, null), {top: this.props.description.length <= 40 ? 30 : this.props.description.length/2}]}>
                </Components.NT.View>
            </Components.NT.View>
        );
    }
}
