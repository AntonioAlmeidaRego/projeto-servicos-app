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

export default class BoxItemComponent extends React.Component{
    render() {
        return (
            <View style={[StylesScreen.createFlex(1), StylesScreen.createWidth('auto')]}>
                <View style={[StylesScreen.createPositionAbsolute(),
                    StylesScreen.createWidth(286),
                    StylesScreen.createHeight(305),
                    StylesScreen.createMarginTop(240),
                    StylesScreen.createColorBackground('#fff'),
                    StylesScreen.createBorderRadius(12)
                ]}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}
