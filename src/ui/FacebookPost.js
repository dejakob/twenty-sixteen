import React, { Component } from 'react';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';

// window.facebookFeed

class FacebookPost extends Component
{
    render () {

        console.log('data', window.facebookFeed.filter(item => item.url === this.props.href)[0], this.props.href);

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
