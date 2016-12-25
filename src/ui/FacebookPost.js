import React, { Component } from 'react';
import FacebookProvider, { EmbeddedPost } from 'react-facebook';

class FacebookPost extends Component
{
    render () {
        const width = parseInt(Math.min(window.innerWidth * 0.9, 500));

        console.log('width', width);

        return (
            <FacebookProvider
                appID="1259809074087642"
            >
                <EmbeddedPost
                    href={this.props.href}
                    width={width}
                />
            </FacebookProvider>
        );
    }
}

export default FacebookPost;
