import React, { Component } from 'react';
import { Section, VerticalLine, CalendarDay, TimelineBlock, FacebookPost } from '../ui';

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

                <VerticalLine />

                <TimelineBlock>
                    <CalendarDay
                        month="June"
                        day={3}
                    />
                </TimelineBlock>
                
                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/videos/1106582099380542/"
                    />
                </TimelineBlock>

                <VerticalLine />

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

                <TimelineBlock>
                    <CalendarDay
                        month="June"
                        day={12}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/photo.php?fbid=1111964478842304&set=a.145248142180614.16143.100000862866272&type=3"
                    />
                </TimelineBlock>

                <VerticalLine />

                <TimelineBlock>
                    <CalendarDay
                        month="June"
                        day={18}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1115283245177094"
                    />
                </TimelineBlock>

                <VerticalLine />

                <TimelineBlock>
                    <CalendarDay
                        month="June"
                        day={19}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1116229378415814"
                    />
                </TimelineBlock>

                <VerticalLine />

                <TimelineBlock>
                    <CalendarDay
                        month="June"
                        day={22}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/photo.php?fbid=1118426578196094&set=a.746643742041048.1073741828.100000862866272&type=3"
                    />
                </TimelineBlock>

                <VerticalLine />

                <TimelineBlock>
                    <CalendarDay
                        month="June"
                        day={24}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1119559418082810"
                    />
                </TimelineBlock>

                <VerticalLine />
            </Section>
        )
    }
}

export default Summer;
