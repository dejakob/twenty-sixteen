import React, { Component } from 'react';
import { COLORS } from '../constants';

class H1 extends Component
{
    style = {
        fontFamily: '\'Slabo 27px\', serif',
        fontSize: '36px',
        color: this.props.color || COLORS.WHITE
    };

    render () {
        return (
            <h1
                style={this.style}
            >
                {this.props.children}
            </h1>
        )
    }
}

export default H1;
