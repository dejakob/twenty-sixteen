import React, { Component } from 'react';
import VerticalLine from './VerticalLine';
import { ScrollService } from '../services';

/**
 * <TimelineBlock />
 *
 * Puts vertical lines around the block
 */
class TimelineBlock extends Component
{
    constructor () {
        super();
        ScrollService.on(({ top }) => this.setState({ scrollTop: top }))
    }

    render () {
        console.log('scrollTop', ScrollService.scrollTop);

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
