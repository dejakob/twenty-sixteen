import React, { Component } from 'react';
import { Section } from '../ui';
import { COLORS } from '../constants';
import TwentySixteenSvg from '../svg/2016';
import AccordingToJakez from '../svg/according-to-jakez';

const OPACITY_LOW = 0.65;
const OPACITY_HIGH = 0.95;

class Intro extends Component {
    static titleStyle = {
        width: '90vw'
    };
    static subtitleStyle = {
        width: '20vw',
        minWidth: '200px'
    };
    static scrollDownStyle = {
        color: COLORS.WHITE,
        position: 'absolute',
        bottom: '30px',
        fontSize: '24px'
    };

    componentWillMount () {
        this.state = {
            opacity: OPACITY_LOW
        };
    }

    componentDidMount () {
        setInterval(() => {
            const opacity = this.state.opacity === OPACITY_LOW ? OPACITY_HIGH : OPACITY_LOW;
            this.setState({ opacity })
        }, 4000);
    }

    render () {
        return (
            <Section
                opacity={this.state.opacity}
                backgroundImage="dist/fire.jpeg"
            >
                <div
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '500px' }}
                >
                    <TwentySixteenSvg
                        color={COLORS.WHITE}
                        style={Intro.titleStyle}
                    />
                </div>
                <AccordingToJakez
                    color={COLORS.WHITE}
                    style={Intro.subtitleStyle}
                />

                <span
                    style={Intro.scrollDownStyle}
                >
                    <i className="fa fa-angle-double-down"></i>
                </span>
            </Section>
        );
    }
}

export default Intro;
