import React, { Component } from 'react';
import { Section, TimelineBlock, CalendarDay, FacebookPost, Tweet, FlavrOverview, VerticalLine } from '../ui';

class Flavr extends Component
{
    render () {
        return (
            <Section
                backgroundImage="dist/flavr-team.jpg"
            >
                <TimelineBlock>
                    <CalendarDay
                        month="September"
                        day={10}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1183379561700795"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="September"
                        day={22}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <Tweet
                        id="779065737067585536"
                     />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="September"
                        day={28}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <Tweet
                        id="781216695482454017"
                     />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="October"
                        day={2}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <Tweet
                        id="782639453034733568"
                     />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="October"
                        day={21}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <Tweet
                        id="789530300653142016"
                     />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="November"
                        day={23}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1253352261370191"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="November"
                        day={24}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1254810747891009"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="November"
                        day={25}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/photo.php?fbid=1255914061114011&set=a.452807001424725.98241.100000862866272&type=3&theater"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="November"
                        day={26}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/photo.php?fbid=1256672834371467&set=a.452807001424725.98241.100000862866272&type=3"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="December"
                        day={18}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1283819698323447"
                    />
                </TimelineBlock>

                <VerticalLine />

                <TimelineBlock>
                    <FlavrOverview
                    />
                </TimelineBlock>

                <VerticalLine />
            </Section>
        );
    }
}

export default Flavr;
