import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { COLORS } from '../constants';
import { ScrollService, PreloadService } from '../services';

const TIME_PAR_STAGE = 500;

/**
 * <SportKeeper />
 *
 * @property {String} type
 * @property {Array.<{date, amount, time}>} items
 */
class SportKeeper extends Component
{
    static style = {
        backgroundColor: COLORS.WHITE,
        color: COLORS.BLACK,
        fontFamily: '\'Lato\', sans-serif',
        fontSize: '18px',
        padding: '20px',
        borderRadius: '3px'
    };
    static dateStyle = {
        textAlign: 'right',
        display: 'block',
        fontWeight: '100'
    };
    static contentStyle = {
        paddingTop: '16px',
        display: 'block',
        fontSize: '24px',
        textAlign: 'center',
        color: '#666'
    };
    static emStyle = {
        color: COLORS.BLACK,
        fontWeight: '600',
        fontSize: '36px',
        width: '140px',
        display: 'inline-block',
        textAlign: 'center'
    };

    constructor () {
        super();
        this.state = {};
        this._tick = 0;

        ScrollService.on(() => {
            if (this.domNode) {
                const rect = this.domNode.getBoundingClientRect();

                console.log('top', rect.top);


                if (rect.top > 0 && rect.top < window.innerHeight && !this._interval) {
                    this.start();
                }
            }
        });
        PreloadService.onReady(() => this.domNode = findDOMNode(this));
    }

    start () {
        this._interval = setInterval(this._handleTick.bind(this), 25);
    }

    _handleTick () {
        const { items } = this.props;
        const stage = Math.floor(this._tick / TIME_PAR_STAGE);
        const item = items[stage];

        if (typeof item === 'undefined') {
            return clearInterval(this._interval);
        }

        const { date, amount, time } = item;

        let value = amount;

        if (this._tick - TIME_PAR_STAGE * stage < TIME_PAR_STAGE / 2) {
            const percentage = (this._tick - stage * TIME_PAR_STAGE) / (TIME_PAR_STAGE / 2);
            value = Math.round(amount * percentage * 100) / 100;
        }

        this.setState({ date, value, time });

        this._tick++;
    }

    render () {
        return (
            <div
                style={SportKeeper.style}
            >
                <span
                    style={SportKeeper.dateStyle}
                >
                    { this.state.date }
                </span>
                <span
                    style={SportKeeper.contentStyle}
                >
                    { this.props.type } <em style={SportKeeper.emStyle}>{ this.state.value }km</em> in { this.state.time }min
                </span>
            </div>
        );
    }
}

export default SportKeeper;
