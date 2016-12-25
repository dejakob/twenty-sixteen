import React, { Component } from 'react';
import { Section, CalendarDay, H1, TimelineBlock } from '../ui';

class Showpad extends Component
{
    render () {
        return (
            <Section
                backgroundImage="dist/falling.jpg"
            >
                <TimelineBlock>
                    <CalendarDay
                        month="January"
                        day={15}
                    />
                </TimelineBlock>
                <TimelineBlock>
                    <H1>
                        <span>
                            Getting <i className="fa fa-fire-extinguisher" /> at Showpad
                        </span>
                    </H1>
                </TimelineBlock>
            </Section>
        );
    }
}

export default Showpad;
