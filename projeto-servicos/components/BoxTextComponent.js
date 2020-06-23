import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import StylesScreen from '../styles/StylesScreen';


export default class BoxTextComponent extends React.Component{
    render() {
        return (
            <View style={StylesScreen.createWidth('auto')}>
                <View style={[
                    {flex: 1},
                    StylesScreen.createPositionAbsolute(),
                    StylesScreen.createWidth(this.props.width),
                    StylesScreen.createHeight(this.props.height),
                    StylesScreen.createPaddingLeft(this.props.left),
                    StylesScreen.createPaddingTop(this.props.top),
                    StylesScreen.createContainerText(),
                    this.props.style,
                ]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}
