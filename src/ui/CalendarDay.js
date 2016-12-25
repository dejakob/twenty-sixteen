import React, { Component } from 'react';
import { COLORS } from '../constants';

/**
 * <CalendarDay />
 *
 * @property {String} month
 * @property {Number} day
 */
class CalendarDay extends Component
{
    static propTypes = {
        month: React.PropTypes.string,
        day: React.PropTypes.number
    };

    outerStyle = {
        fontFamily: '\'Lato\', sans-serif',
        borderColor: COLORS.WHITE,
        color: COLORS.WHITE,
        textAlign: 'center',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderRadius: '5px',
        display: 'block',
        width: '100px'
    };
    monthStyle = {
        fontSize: '16px',
        display: 'block',
        backgroundColor: COLORS.WHITE,
        color: COLORS.BLACK,
        padding: '5px 0'
    };
    dayStyle = {
        fontSize: '48px',
        fontWeight: '300',
        display: 'block',
        background: 'rgba(0,0,0,0.3)',
        padding: '10px 0'
    };

    render () {
        return (
            <div
                style={this.outerStyle}
            >
                <span
                    style={this.monthStyle}
                >
                    {this.props.month}
                </span>
                <span
                    style={this.dayStyle}
                >
                    {this.props.day}
                </span>
            </div>
        );
    }
}

export default CalendarDay;
