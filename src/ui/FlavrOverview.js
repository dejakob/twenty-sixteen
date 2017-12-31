import React, { Component } from 'react';
import { COLORS } from '../constants';
import { Avatar } from '../ui';

class FlavrOverview extends Component
{
    static wrapperStyle = {
        backgroundColor: COLORS.WHITE,
        border: `2px ${COLORS.FLAVR} solid`,
        width: '90vw',
        margin: '0 auto',
        position: 'relative',
        borderRadius: '3px',
        textDecoration: 'none',
        display: 'block'
    };
    static avatarStyle = {
        position: 'absolute',
        top: '-26px',
        marginLeft: '-26px',
        left: '50%'
    };
    static flavrBannerStyle = {
        backgroundColor: COLORS.FLAVR,
        display: 'block',
        textAlign: 'right',
        height: '16px',
        padding: '10px'
    };
    static contentStyle = {
        padding: '0 20px',
        margin: '40px 0',
        backgroundColor: COLORS.WHITE,
        position: 'relative'
    };
    linkStyle = {
        width: '50%',
        display: 'inline-block',
        textDecoration: 'none'
    };
    static figureStyle = {
        margin: '2px',
        position: 'relative',
        borderRadius: '3px',
        overflow: 'hidden'
    };
    static figcaptionStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '80px',
        background: 'rgba(255,255,255,0.8)',
        borderBottomLeftRadius: '3px',
        borderBottomRightRadius: '3px',
        color: COLORS.PRIMARY_FONT_COLOR,
        fontFamily: '"Lato", sans-serif'
    };
    static mealImageStyle = {
        width: '100%',
        backgroundColor: '#666'
    };
    static chefPictureStyle = {
        height: '40px',
        margin: '17px',
        float: 'left'
    };
    static chefNameStyle = {
        display: 'flex',
        alignItems: 'center',
        height: '80px'
    };
    static footerStyle = {
        padding: '10px',
        backgroundColor: COLORS.FLAVR_LIGHT,
        color: COLORS.WHITE,
        fontFamily: '"Lato", sans-serif',
        fontWeight: '100'
    };
    static footerEmStyle = {
        fontWeight: '600'
    };

    componentWillMount () {
        this.state = { width: window.innerWidth };
        this.orders = this.shuffle(window.pastFlavrOrders).slice(0, 8);
        window.addEventListener('resize', () => {
            this.setState({ width: window.innerWidth });
        })
    }

    render () {
        if (this.state.width < 600) {
            this.linkStyle.display = 'block';
            this.linkStyle.width = '100%';
        }
        else if (this.state.width < 960) {
            this.linkStyle.display = 'inline-block';
            this.linkStyle.width = '50%';
        }
        else {
            this.linkStyle.display = 'inline-block';
            this.linkStyle.width = '25%';
        }

        return (
            <div
                style={FlavrOverview.wrapperStyle}
            >
                <Avatar
                    user="100000862866272"
                    style={FlavrOverview.avatarStyle}
                />
                <span
                    style={FlavrOverview.flavrBannerStyle}
                >
                    <img
                        src="dist/flavr.png"
                        alt="flavr logo"
                        height="16"
                    />
                </span>

                <div
                    style={FlavrOverview.contentStyle}
                >
                    {this.orders.map((flavrOrder, index) =>
                    <a
                        key={index}
                        href={`https://flavr.be/dish/${flavrOrder.id}`}
                        target="_blank"
                        style={this.linkStyle}
                    >
                        <figure
                            style={FlavrOverview.figureStyle}
                        >
                            <img
                                alt="meal picture"
                                src={flavrOrder.picture}
                                style={FlavrOverview.mealImageStyle}
                            />

                            <figcaption
                                style={FlavrOverview.figcaptionStyle}
                            >
                                <Avatar
                                    url={flavrOrder.chef}
                                    style={FlavrOverview.chefPictureStyle}
                                />
                                <span
                                    style={FlavrOverview.chefNameStyle}
                                >
                                    {flavrOrder.title}
                                </span>
                            </figcaption>
                        </figure>
                    </a>
                    )}
                </div>

                <div
                    style={FlavrOverview.footerStyle}
                >
                    Want a coupon of 6 EUR? Try <em style={FlavrOverview.footerEmStyle}>FLAVRJAKOB</em> on your first order!
                </div>
            </div>
        );
    }

    shuffle (a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }

        return a;
    }
}

export default FlavrOverview;
