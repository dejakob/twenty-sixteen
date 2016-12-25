import React, { Component } from 'react';
import { Section, CalendarDay, H1, TimelineBlock, VerticalLine } from '../ui';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';

class Showpad extends Component
{
    render () {
        return (
            <Section
                backgroundImage="dist/falling.jpg"
            >
                <VerticalLine />

                <TimelineBlock>
                    <CalendarDay
                        month="January"
                        day={10}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <EmbeddedPost href="http://www.facebook.com" width="500" />
                </TimelineBlock>

                <TimelineBlock>
                    <H1>
                        Posted my previous year overview
                    </H1>
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="January"
                        day={15}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <H1>
                        Getting <i className="fa fa-fire-extinguisher" /> at Showpad
                    </H1>
                </TimelineBlock>
            </Section>
        );
    }
}

export default Showpad;
