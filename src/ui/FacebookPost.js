import React, { Component } from 'react';
import { COLORS } from '../constants';

class FacebookPost extends Component
{
    static wrapperStyle = {
        backgroundColor: COLORS.WHITE,
        width: '90%',
        maxWidth: '500px',
        margin: '0 auto',
        position: 'relative',
        padding: '30px 20px',
        borderRadius: '3px'
    };
    static textStyle = {
        fontFamily: '"Slabo 27px", serif',
        fontSize: '24px',
        fontStyle: 'italic',
        whiteSpace: 'pre-line',
        textAlign: 'center',
        color: COLORS.PRIMARY_FONT_COLOR
    };

    componentWillMount () {
        this.post = window.facebookFeed.filter(item => item.url === this.props.href)[0];
        this.message = this.post.message || this.post.description;
    }

    render () {
        console.log('post',this.post);

        return (
            <div
                style={FacebookPost.wrapperStyle}
            >
                <pre
                    style={FacebookPost.textStyle}
                >{this.message}</pre>
            </div>
        );
    }

    renderPhoto () {

    }

    renderStatus () {

    }
}

export default FacebookPost;
