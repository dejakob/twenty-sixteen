import React, { Component } from 'react';
import VerticalLine from './VerticalLine';
import { ScrollService, PreloadService } from '../services';
import { findDOMNode } from 'react-dom';

/**
 * <TimelineBlock />
 *
 * Puts vertical lines around the block
 */
class TimelineBlock extends Component
{
    constructor () {
        super();
        this.state = { scrollTop: 0, top: 0, height: 0, width: 0, bottom: 0, right: 0, left: 0 };
        ScrollService.on(({ top: scrollTop }) => {
            let top = 0;
            let right = 0;
            let bottom = 0;
            let left = 0;
            let height = 0;
            let width = 0;

            if (this.domNode) {
                const rect = this.domNode.getBoundingClientRect();
                top = rect.top;
                right = rect.right;
                bottom = rect.bottom;
                left = rect.left;
                height = rect.height;
                width = rect.width;
            }

            this.setState({ scrollTop, top, right, bottom, left, height, width });
        });
        PreloadService.onReady(() => this.domNode = findDOMNode(this));
    }

    render () {
        const top = this.state.top;
        const treshold = Math.round(window.innerHeight);
        const opacity = Math.min(1 - (top / treshold) + 0.25, 1);

        return (
            <div
                style={{ opacity }}
            >
                <VerticalLine />
                    {this.props.children}
                <VerticalLine />
            </div>
        );
    }
}

export default TimelineBlock;
