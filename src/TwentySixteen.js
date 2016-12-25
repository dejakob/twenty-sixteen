import React, { Component } from 'react';
import { Intro, Showpad, Antwerp, Tsjing, Flavr } from './sections';

class TwentySixteen extends Component {
  render() {
    return (
        <div>
            <Intro />
            <Showpad />
            <Antwerp />
            <Tsjing />
            <Flavr />
        </div>
    );
  }
}

export default TwentySixteen;
