import React, { Component } from 'react';
import { Section, TimelineBlock, CalendarDay, FacebookPost, H1, SportKeeper } from '../ui';

class Tsjing extends Component
{
    render () {
        return (
            <Section
                backgroundImage="dist/tsjing.jpg"
            >
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

                <TimelineBlock>
                    <SportKeeper
                        type="Skated"
                        items={[
                            { date: '2016-05-02', amount: 4.02, time: 34.57 },
                            { date: '2016-05-13', amount: 17.55, time: 102.58 },
                            { date: '2016-05-16', amount: 6.71, time: 35.30 },
                            { date: '2016-05-18', amount: 10.68, time: 59.00 },
                            { date: '2016-05-20', amount: 7.90, time: 45.50 },
                            { date: '2016-05-24', amount: 12.84, time: 67.10 },
                            { date: '2016-05-26', amount: 22.69, time: 109.55 },
                            { date: '2016-05-28', amount: 36.86, time: 158.43 },
                            { date: '2016-05-31', amount: 30.00, time: 120.48 },
                            { date: '2016-06-03', amount: 24.29, time: 109.24 },
                            { date: '2016-06-05', amount: 26.93, time: 106.54 },
                            { date: '2016-06-07', amount: 14.56, time: 66.52 },
                            { date: '2016-06-10', amount: 42.21, time: 162.32 },
                            { date: '2016-06-12', amount: 14.00, time: 65.03 },
                            { date: '2016-06-14', amount: 15.03, time: 77.02 },
                            { date: '2016-06-17', amount: 28.12, time: 131.25 },
                            { date: '2016-06-19', amount: 24.75, time: 114.14 },
                            { date: '2016-06-22', amount: 26.29, time: 117.44 },
                            { date: '2016-06-27', amount: 14.31, time: 68.03 },
                            { date: '2016-06-30', amount: 14.05, time: 67.39 },
                            { date: '2016-07-04', amount: 13.61, time: 64.41 },
                            { date: '2016-07-06', amount: 13.47, time: 67.32 },
                            { date: '2016-07-09', amount: 31.46, time: 134.17 },
                            { date: '2016-07-12', amount: 13.91, time: 69.38 },
                            { date: '2016-07-14', amount: 13.41, time: 69.02 },
                            { date: '2016-07-16', amount: 14.94, time: 71.47 },
                            { date: '2016-07-18', amount: 14.21, time: 69.21 },
                            { date: '2016-07-23', amount: 13.43, time: 71.41 },
                            { date: '2016-07-27', amount: 13.67, time: 60.37 }
                        ]}
                    />
                    <H1>I suddenly got into inline skating</H1>
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="May"
                        day={3}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/photo.php?fbid=1087258404646245&set=a.452807001424725.98241.100000862866272&type=3&theater"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="May"
                        day={5}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/photo.php?fbid=1088959594476126&set=a.452807001424725.98241.100000862866272&type=3"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="May"
                        day={8}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/photo.php?fbid=1090767490962003&set=a.452807001424725.98241.100000862866272&type=3&theater"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="May"
                        day={17}
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <FacebookPost
                        href="https://www.facebook.com/dejakob/posts/1096163403755745"
                    />
                </TimelineBlock>

                <TimelineBlock>
                    <CalendarDay
                        month="May"
                        day={27}
                    />
                </TimelineBlock>
                
                <TimelineBlock>
                    <blockquote className="twitter-tweet" data-lang="en"><p lang="nl" dir="ltr">Zo brengt <a href="https://twitter.com/NMBS">@NMBS</a> nog wat spanning in m&#39;n leven... <a href="https://t.co/2r82Nh9sQY">pic.twitter.com/2r82Nh9sQY</a></p>&mdash; Jakob Kerkhove (@dejakob) <a href="https://twitter.com/dejakob/status/736207989560991750">May 27, 2016</a></blockquote>
                </TimelineBlock>
            </Section>
        );
    }
}

export default Tsjing;
