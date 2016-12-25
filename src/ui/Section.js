import React, { Component } from 'react';
import { PreloadService } from '../services';
import { COLORS } from '../constants';

class Section extends Component {
    get style () {
        return {
            backgroundColor: COLORS.BLACK,
            backgroundImage: `url(${this.props.backgroundImage})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',

            minHeight: `${window.innerHeight}px`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

            position: 'relative'
        };
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
        PreloadService.addImage(this.props.backgroundImage);
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
