import React from 'react';
import Components from '../importsComponentsReact/ImportsReact'
import RowComponent from './RowComponent';

export default class AddIconToFieldComponent extends React.Component{
    render() {
        return (
            <Components.NT.View style={{position: "absolute",
                marginHorizontal: 10,
                right: this.props.right !== undefined ? 1 : null,
                left: this.props.left !== undefined ? 1 : null,
            }}>
                <RowComponent style={{top: 10}}>
                    {this.props.icon}
                    <Components.NT.View style={{marginLeft: 2,}}>
                        {this.props.text}
                    </Components.NT.View>
                </RowComponent>
            </Components.NT.View>
        );
    }
}
