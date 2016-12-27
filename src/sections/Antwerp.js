import React, { Component } from 'react';
import { Section, VerticalLine, TimelineBlock, FacebookPost, CalendarDay, H1 } from '../ui';

class Antwerp extends Component
{
    render () {
        return (
            <Section
                backgroundImage="dist/antwerp.jpg"
            >
                <VerticalLine />

                <TimelineBlock>
                    <CalendarDay
                        day={11}
                        month="February"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1033315610040525"
                    />
                </TimelineBlock>

                <VerticalLine />

                <TimelineBlock>
                    <CalendarDay
                        day={27}
                        month="February"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <H1><i className="fa fa-suitcase"></i> Moved to Antwerp</H1>
                </TimelineBlock>

                <VerticalLine />

                <TimelineBlock>
                    <CalendarDay
                        month="March"
                        day={4}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1045631878808898"
                    />
                </TimelineBlock>

                <VerticalLine />
            </Section>
        );
    }
}

export default Antwerp;
