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
                </TimelineBlock>

                <TimelineBlock>
                    <H1><i className="fa fa-beer"></i> I suddenly started doing professional research...</H1>
                </TimelineBlock>

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

                <TimelineBlock>
                    <CalendarDay
                        month="April"
                        day={19}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1079248212113931"
                    />
                </TimelineBlock>

                <VerticalLine />

                <TimelineBlock>
                    <SportKeeper
                        type="Skated"
                        items={[
                            { date: '2016-05-02', amount: 4.02, time: 34.57 },
                            { date: '2016-05-13', amount: 17.55, time: 102.58 },
                            { date: '2016-05-16', amount: 6.71, time: 35.30 },
                            { date: '2016-05-18', amount: 10.68, time: 59.00 },
                            { date: '2016-05-20', amount: 7.90, time: 45.50 },
                        ]}
                    />
                    <H1>I suddenly got into running</H1>
                </TimelineBlock>

                <VerticalLine />
            </Section>
        );
    }
}

export default Tsjing;
