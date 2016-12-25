import React, { Component } from 'react';
import { Intro, Showpad, Antwerp, Tsjing, Flavr } from './sections';
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
                <Flavr />

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
            ></div>
        );
    }
}

export default TwentySixteen;
