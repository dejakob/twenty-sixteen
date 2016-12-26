import React, { Component } from 'react';
import { COLORS } from '../constants';

/**
 * <VerticalLine />
 */
class VerticalLine extends Component
{
    style = {
        height: '30px',
        backgroundColor: this.props.color || COLORS.WHITE,
        width: this.props.width || '2px',
        position: 'relative',
        margin: '0 auto'
    };

    render () {
        return (
            <div
                style={this.style}
            ></div>
        );
    }
}

export default VerticalLine;
