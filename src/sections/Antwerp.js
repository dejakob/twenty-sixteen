import React, { Component } from 'react';
import { Section, TimelineBlock, FacebookPost, CalendarDay, H1 } from '../ui';

class Antwerp extends Component
{
    render () {
        return (
            <Section
                backgroundImage="dist/antwerp.jpg"
            >
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

                <TimelineBlock>
                    <CalendarDay
                        day={27}
                        month="February"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <H1><i className="fa fa-suitcase"></i> Moved to Antwerp</H1>
                </TimelineBlock>

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

                <TimelineBlock>
                    <CalendarDay
                        month="March"
                        day={5}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1046359462069473"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="March"
                        day={9}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1048482415190511"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="March"
                        day={14}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1051475454891207"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="March"
                        day={22}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1057500710955348"
                    />
                </TimelineBlock>
            </Section>
        );
    }
}

export default Antwerp;
