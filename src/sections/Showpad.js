import React, { Component } from 'react';
import { Section, CalendarDay, H1, TimelineBlock, VerticalLine, FacebookPost, SportKeeper } from '../ui';

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
                        day={1}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/photo.php?fbid=1012634818775271&set=a.452807001424725.98241.100000862866272&type=3"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <H1>I suddenly got into running</H1>
                    <SportKeeper
                        type="Ran"
                        items={[
                            { date: '2016-01-03', amount: 5, time: 39.06 },
                            { date: '2016-01-06', amount: 4.82, time: 32.55 },
                            { date: '2016-01-08', amount: 7, time: 52 },
                            { date: '2016-01-10', amount: 10.53, time: 82 }
                        ]}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="January"
                        day={10}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1017187448320008"
                    />
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
