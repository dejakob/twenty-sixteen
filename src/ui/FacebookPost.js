import React, { Component } from 'react';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';

// window.facebookFeed

class FacebookPost extends Component
{
    render () {

        console.log('data', window.facebookFeed.filter(item => item.link === this.props.href));

        return (
            <div></div>
        );
    }

    renderPhoto () {

    }

    renderStatus () {

    }
}

export default FacebookPost;
