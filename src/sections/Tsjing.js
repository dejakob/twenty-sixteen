import React, { Component } from 'react';
import { Section, VerticalLine, TimelineBlock, CalendarDay, FacebookPost } from '../ui';

class Tsjing extends Component
{
    render () {
        return (
            <Section
                backgroundImage="dist/tsjing.jpg"
            >
                <VerticalLine />

                <TimelineBlock>
                    <CalendarDay
                        month="April"
                        day={2}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1068226946549391"
                    />
                    <H1><i className="fa fa-beer"></i> I suddenly started doing professional research...</H1>
                </TimelineBlock>

                <VerticalLine />
            </Section>
        );
    }
}

export default Tsjing;
