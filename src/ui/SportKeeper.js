import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { COLORS } from '../constants';
import { ScrollService, PreloadService } from '../services';
import { Avatar } from '../ui';

const TIME_PAR_STAGE = 200;

/**
 * <SportKeeper />
 *
 * @property {String} type
 * @property {Array.<{date, amount, time}>} items
 */
class SportKeeper extends Component
{
    static style = {
        border: `3px ${COLORS.RUNKEEPER_COLOR} solid`,
        backgroundColor: COLORS.WHITE,
        color: COLORS.PRIMARY_FONT_COLOR,
        fontFamily: '\'Lato\', sans-serif',
        fontSize: '18px',
        borderRadius: '3px',
        display: 'block',
        textDecoration: 'none',
        position: 'relative'
    };
    static avatarStyle = {
        position: 'absolute',
        top: '-26px',
        marginLeft: '-26px',
        left: '50%'
    };
    static bannerStyle = {
        backgroundColor: COLORS.RUNKEEPER_COLOR,
        display: 'block',
        textAlign: 'right',
        height: '16px',
        padding: '10px'
    };
    static dateStyle = {
        textAlign: 'center',
        display: 'block',
        fontWeight: '600',
        margin: '30px 10px'
    };
    static contentStyle = {
        fontFamily: '\'Slabo 27px\', serif',
        display: 'block',
        fontSize: '24px',
        textAlign: 'center',
        marginBottom: '30px',
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
            <a
                href="https://runkeeper.com/user/dejakob"
                target="_blank"
                style={SportKeeper.style}
            >
                <span
                    style={SportKeeper.bannerStyle}
                >
                    <img
                        src="dist/runkeeper.png"
                        alt="Runkeeper logo"
                        height="16"
                    />
                </span>
                <Avatar
                    user="100000862866272"
                    style={SportKeeper.avatarStyle}
                />

                <div>
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
            </a>
        );
    }
}

export default SportKeeper;
