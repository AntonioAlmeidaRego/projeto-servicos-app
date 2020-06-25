import React from 'react';
import Components from '../../importsComponentsReact/ImportsReact';
import TextComponent from '../TextComponent';
import {Dimensions} from 'react-native';

export default class AlertComponent extends React.Component {

    state = {
        types: [
            {
                type: 'info',
                backgroundColor: '#4EA7DA',
                borderColor: '#4EA7DA',
                icon: <Components.Icon><Components.SimpleLineIcons name={'info'} size={30}
                                                                   color={'#fff'}/></Components.Icon>,
                color: '#686767',
            },
            {
                type: 'danger',
                backgroundColor: '#EA6A6A',
                borderColor: '#EA6A6A',
                icon: <Components.Icon><Components.Feather name={'alert-triangle'} size={30}
                                                           color={'#fff'}/></Components.Icon>,
                color: '#686767',
            },
            {
                type: 'success',
                backgroundColor: '#3d9970',
                borderColor: '#3d9970',
                icon: <Components.Icon><Components.AntDesign name={'check'} size={30}
                                                             color={'#fff'}/></Components.Icon>,
                color: '#686767',
            },
            {
                type: 'warning',
                backgroundColor: '#ffc107',
                borderColor: '#edb100',
                icon: <Components.Icon><Components.SimpleLineIcons name={'question'} size={30}
                                                                   color={'#686767'}/></Components.Icon>,
                color: '#686767',
            },
        ],
        visible: this.props.onVisible,
    };

    onType(type) {
        for (let i = 0; i < this.state.types.length; i++) {
            if (this.state.types[i].type == type) {
                return this.state.types[i];
            }
        }
        return undefined;
    }

    onClose = async () => {
        this.props.onClose();
    };

    render() {
        console.log();
        const type = this.onType(this.props.type);
        return <Components.NT.Modal visible={this.props.onVisible} transparent>
            <Components.NT.View style={[
                {
                    position: 'relative',
                    width: '100%',
                    height: 130,
                    backgroundColor: '#FFFFFF',
                    borderWidth: 2,
                    borderColor: type.borderColor,
                    borderRadius: 10,
                },
            ]}>
                <Components.NT.View style={{
                    position: 'absolute',
                    width: 50,
                    height: 130,
                    left: -2,
                    top: -2,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: type.backgroundColor,
                    borderBottomLeftRadius: 12,
                    borderTopLeftRadius: 12,
                }}>
                    {type.icon}
                </Components.NT.View>
                <Components.NT.View style={{
                    position: 'absolute',
                    width: 379,
                    height: 152,
                    left: 70,
                    top: 0,
                    borderRadius: 10,
                }}>
                    <Components.NT.View style={{
                        position: 'absolute',
                        width: 200,
                        height: 56,
                        left: this.props.title.toString().length <= 6 ? '-15%' : this.props.title.toString().length-44,
                        top: 13,
                    }}>
                        <TextComponent
                            text={this.props.title.toString().substring(0, 18)}
                            fontFamily={'Sarabun-Bold'}
                            color={type.color}
                            size={20}
                            upper
                            lineHeight={47}
                        />
                    </Components.NT.View>
                    <Components.NT.View style={{
                        position: 'absolute',
                        width: 281,
                        height: 65,
                        left: 15,
                        top: 60,
                    }}>
                        <TextComponent
                            text={this.props.description.toString().substring(0, 70)}
                            fontFamily={'Sarabun-Bold'}
                            color={type.color}
                            size={16}
                            lineHeight={23}
                        />
                    </Components.NT.View>
                </Components.NT.View>
                <Components.NT.View style={{
                    position: 'absolute',
                    width: 40,
                    height: 52,
                    left: '85%',
                    top: 0,
                }}>
                    <Components.NT.View style={{
                        position: 'absolute',
                        width: 30,
                        height: 30,
                        left: '50%',
                        top: 10,
                    }}>
                        <Components.Icon onPress={() => this.onClose()}>
                            <Components.EvilIcons
                                name={'close'}
                                size={30}
                                color={'#C1B4B4'}
                            />
                        </Components.Icon>
                    </Components.NT.View>
                </Components.NT.View>
            </Components.NT.View>
        </Components.NT.Modal>;
    }
}
