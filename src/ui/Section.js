import React, { Component } from 'react';
import { PreloadService } from '../services';
import { COLORS } from '../constants';

class Section extends Component {
    get fallback () {
        switch (this.props.backgroundImage) {
            case 'dist/fire.jpg':
                return 'url(dist/fire-mobile.jpg) 100% center';

            case 'dist/falling.jpg':
                return 'linear-gradient(to left, #43cea2 , #185a9d)';

            case 'dist/antwerp.jpg':
                return 'linear-gradient(to left, #2c3e50 , #3498db)';

            case 'dist/dutchie.jpg':
                return 'linear-gradient(to left, #7b4397 , #dc2430)';

            case 'dist/flavr-team.jpg':
                return 'linear-gradient(to left, #136a8a , #267871)';

            case 'dist/tsjing.jpg':
                return 'linear-gradient(to left, #517fa4 , #243949)';
        }
    }

    get style () {
        const style = {
            minHeight: `${window.innerHeight}px`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

            position: 'relative'
        };

        if (window.innerWidth > 960) {
            style.backgroundImage = `url(${this.props.backgroundImage})`;
            style.backgroundPosition = 'center center';
            style.backgroundSize = 'cover';
            style.backgroundRepeat = 'no-repeat';
            style.backgroundAttachment = 'fixed';
        }
        else {
            style.background = this.fallback;
        }

        return style;
    }

    get overlayStyle () {
        return {
            opacity: this.props.opacity || 0,
            backgroundColor: COLORS.BLACK,
            transition: 'opacity 10s',
            zIndex: 0,

            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        };
    }

    get contentStyle () {
        return {
            zIndex: 1,
            minHeight: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        };
    }

    componentWillMount () {
        if (window.innerWidth > 960) {
            PreloadService.addImage(this.props.backgroundImage);
        }
    }

    render () {
        return (
            <div
                style={this.style}
            >
                <div
                    style={this.overlayStyle}
                ></div>
                <div
                    style={this.contentStyle}
                >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Section;
