import React, { Component } from 'react';
import { COLORS } from '../constants';

class Outro extends Component
{
    static style = {
        backgroundColor: COLORS.WHITE,
        color: COLORS.PRIMARY_FONT_COLOR,
        textAlign: 'center',
        fontFamily: '"Slabo 27px", serif'
    };
    static paragraphStyle = {
        margin: '45vh 10px',
        fontSize: '36px',
    };
    static smallParagraph = {
        fontSize: '12px',
        marginBottom: '20px'
    };
    static smallParagraph2 = {
        fontSize: '12px',
        marginBottom: '10vh'
    };

    render () {
        return (
            <div
                style={Outro.style}
            >
                <p
                    style={Outro.paragraphStyle}
                >
                    Well, it was a weird, interesting and long year. <br />
                    Let's see what 2017 will have to offer
                </p>
                <p
                    style={Outro.smallParagraph}
                >
                    Hosted on <a href="http://dejakob.com" target="_blank">dejakob.com</a>
                </p>
                <p
                    style={Outro.smallParagraph2}
                >
                    Pictures used are labelled under 'Creative Commons' (CC0) on <a href="http://pexels.com" target="_blank">pexels.com</a>
                </p>
            </div>
        );
    }
}

export default Outro;
