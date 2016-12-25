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
        ScrollService.on(({ top }) => this.setState({ scrollTop: top }));
        PreloadService.onReady(() => {
            const domNode = findDOMNode(this);

            console.log('rect', domNode.getBoundingClientRect());
        });
    }

    render () {
        return (
            <div>
                <VerticalLine />
                {this.props.children}
                <VerticalLine />
            </div>
        );
    }
}

export default TimelineBlock;
