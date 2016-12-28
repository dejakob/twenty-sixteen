import React, { Component } from 'react';
import { Section, VerticalLine, CalendarDay, TimelineBlock } from '../ui';

class Summer extends Component
{
    render () {
        return (
            <Section
                backgroundImage="dist/dutchie.jpg"
            >
                <VerticalLine />

                <TimelineBlock>
                    <CalendarDay
                        month="June"
                        day={2}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">My commit is officially part of <a href="https://twitter.com/hashtag/reactnative?src=hash">#reactnative</a> <a href="https://twitter.com/hashtag/soproud?src=hash">#soproud</a><a href="https://t.co/kg8ijmVW91">https://t.co/kg8ijmVW91</a></p>&mdash; Jakob Kerkhove (@dejakob) <a href="https://twitter.com/dejakob/status/738276658797502464">June 2, 2016</a></blockquote>
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="June"
                        day={10}
                    />
                </TimelineBlock>
                
                <TimelineBlock>
                    <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Just completed a 42.21 km skate with Runkeeper. Check it out! <a href="https://t.co/59waiusFHb">https://t.co/59waiusFHb</a> <a href="https://twitter.com/hashtag/Runkeeper?src=hash">#Runkeeper</a></p>&mdash; Jakob Kerkhove (@dejakob) <a href="https://twitter.com/dejakob/status/741357178678841344">June 10, 2016</a></blockquote>
                </TimelineBlock>

                <VerticalLine />
            </Section>
        )
    }
}

export default Summer;