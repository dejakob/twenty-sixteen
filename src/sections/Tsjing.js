import React, { Component } from 'react';
import { Section, VerticalLine, TimelineBlock, CalendarDay, FacebookPost, H1 } from '../ui';

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

                <TimelineBlock>
                    <CalendarDay
                        month="April"
                        day={3}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1069235383115214"
                    />
                </TimelineBlock>

                <VerticalLine />

                <TimelineBlock>
                    <CalendarDay
                        month="April"
                        day={8}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1072661902772562"
                    />
                </TimelineBlock>

                <VerticalLine />
            </Section>
        );
    }
}

export default Tsjing;
