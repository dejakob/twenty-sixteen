import React, { Component } from 'react';
import { Intro, Showpad, Antwerp, Tsjing, Flavr, Summer, Outro } from './sections';
import { H1 } from './ui';
import { PreloadService } from './services';
import { COLORS } from './constants';

class TwentySixteen extends Component {
    loadingOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
        textAlign: 'center',
        fontFamily: '\'Slabo 27px\', serif',
        zIndex: 3
    };

    constructor () {
        super();
        this.state = { isReady: false };
        PreloadService.onReady(() => this.setState({ isReady: true }));
    }

    componentDidMount () {
        setTimeout(PreloadService.exec, 400);
    }

    render () {
        return (
            <div>
                <Intro />
                <Showpad />
                <Antwerp />
                <Tsjing />
                <Summer />
                <Flavr />
                <Outro />

                {this.renderLoadingOverlay()}
            </div>
        );
    }

    renderLoadingOverlay () {
        if (this.state.isReady) {
            return null;
        }

        return (
            <div
                style={this.loadingOverlayStyle}
            >
                <H1>Loading the awesome...</H1>
                <p>It will be so amazing, it's worth the waiting.</p>
                <p>If you think the loading is taking a long time, think about this: time is relative.</p>
            </div>
        );
    }
}

export default TwentySixteen;
