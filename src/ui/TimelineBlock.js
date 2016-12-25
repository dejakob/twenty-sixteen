import React, { Component } from 'react';
import VerticalLine from './VerticalLine';

/**
 * <TimelineBlock />
 *
 * Puts vertical lines around the block
 */
class TimelineBlock extends Component
{
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
