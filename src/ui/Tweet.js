import React, { Component } from 'react';

class Tweet extends Component
{
    componentWillMount () {
        this.tweet = window.tweets.filter(tweet => tweet.id_str === this.props.id)[0];

        console.log('tweet', this.tweet);
    }

    render () {
        return (
            <div></div>
        );
    }
}

export default Tweet;
