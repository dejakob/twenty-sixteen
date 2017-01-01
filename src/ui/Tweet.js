import React, { Component } from 'react';
import { COLORS } from '../constants';
import Avatar from './Avatar';

class Tweet extends Component
{
    static wrapperStyle = {
        backgroundColor: COLORS.WHITE,
        border: `2px ${COLORS.TWITTER_COLOR} solid`,
        width: '90vw',
        minWidth: '250px',
        maxWidth: '500px',
        margin: '0 auto',
        position: 'relative',
        borderRadius: '3px',
        textDecoration: 'none',
        display: 'block'
    };
    static avatarStyle = {
        position: 'absolute',
        top: '-26px',
        marginLeft: '-26px',
        left: '50%'
    };
    static twitterBannerStyle = {
        backgroundColor: COLORS.TWITTER_COLOR,
        display: 'block',
        textAlign: 'right',
        height: '16px',
        padding: '10px',
        color: COLORS.WHITE
    };
    static tweetText = {
        fontFamily: '"Slabo 27px", serif',
        padding: '0 20px',
        margin: '40px 0',
        fontSize: '24px',
        whiteSpace: 'pre-line',
        textAlign: 'center',
        color: COLORS.PRIMARY_FONT_COLOR,
        backgroundColor: COLORS.WHITE
    };
    videoBgStyle = {
        backgroundColor: COLORS.BLACK,
        width: '100%'
    };

    componentWillMount () {
        this.tweet = window.tweets.filter(tweet => tweet.id_str === this.props.id)[0];
        this.picture = this.tweet.user.profile_image_url_https;
        this.text = this.tweet.text;

        // console.log('tweet', this.tweet);
    }

    render () {
        return (
            <a
                style={Tweet.wrapperStyle}
                href={this.url}
                target="_blank"
            >
                <Avatar
                    url={this.picture}
                    style={Tweet.avatarStyle}
                />
                <span
                    style={Tweet.twitterBannerStyle}
                >
                    <i className="fa fa-twitter"></i>
                </span>

                {this.renderMedia()}

                <p
                    style={Tweet.tweetText}
                >
                    {this.text}
                </p>
            </a>
        );
    }

    renderMedia () {
        if (!this.tweet.entities.media || !this.tweet.entities.media.length) {
            return null;
        }

        const { extended_entities } = this.tweet;
        const video = extended_entities &&
            extended_entities.media &&
            extended_entities.media.length &&
            extended_entities.media[0].video_info &&
            extended_entities.media[0].video_info.variants &&
            extended_entities.media[0].video_info.variants.length &&
            extended_entities.media[0].video_info.variants.map(mapVideoSource);
        
        if (video) {
            return (
                <video
                    controls
                    style={this.videoBgStyle}
                >
                    {video}
                </video>
            )
        }

        console.log('media', this.tweet.entities, this.tweet.extended_entities,video);


        return (
            <div></div>
        );

        function mapVideoSource (variant, index) {
            return (
                <source
                    key={index}
                    src={variant.url}
                    type={variant.content_type}
                />
            );
        }
    }
}

export default Tweet;
