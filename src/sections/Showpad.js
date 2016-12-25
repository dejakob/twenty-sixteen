import React, { Component } from 'react';
import { Section, CalendarDay, H1 } from '../ui';

class Showpad extends Component
{
    render () {
        return (
            <Section
                backgroundImage="dist/falling.jpg"
            >
                <CalendarDay
                    month="January"
                    day={15}
                />
                <H1>
                    <span>
                        Getting <i className="fa fa-fire-extinguisher" /> at Showpad
                    </span>
                </H1>
            </Section>
        );
    }
}

export default Showpad;
