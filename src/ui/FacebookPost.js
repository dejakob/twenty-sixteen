import React, { Component } from 'react';
import moment from 'moment'
import Avatar from './Avatar';
import { COLORS } from '../constants';

class FacebookPost extends Component
{
    wrapperStyle = {
        backgroundColor: COLORS.WHITE,
        border: `2px ${COLORS.FACEBOOK_COLOR} solid`,
        width: '90vw',
        minWidth: '350px',
        maxWidth: '500px',
        margin: '0 auto',
        position: 'relative',
        paddingBottom: '30px',
        borderRadius: '3px',
        textDecoration: 'none',
        display: 'block'
    };
    textStyle = {
        fontFamily: '"Slabo 27px", serif',
        padding: '0 20px',
        marginTop: '20px',
        fontSize: '24px',
        fontStyle: 'italic',
        whiteSpace: 'pre-line',
        textAlign: 'center',
        color: COLORS.PRIMARY_FONT_COLOR
    };
    static avatarStyle = {
        position: 'absolute',
        top: '-26px',
        marginLeft: '-26px',
        left: '50%'
    };
    static facebookBannerStyle = {
        backgroundColor: COLORS.FACEBOOK_COLOR,
        display: 'block',
        textAlign: 'right',
        height: '16px',
        padding: '10px',
        color: COLORS.WHITE
    };

    componentWillMount () {
        this.post = window.facebookFeed.filter(item => item.url === this.props.href)[0];
        this.message = this.post.message || this.post.description || this.post.name;
        this.textStyle.fontSize = (this.message && this.message.length < 50) ? '24px' : '16px';
        this.url = this.post.url;

        this.likes = this.post.likes && this.post.likes.data ? this.post.likes.data : null;
        this.picture = ((this.post.images && this.post.images.length) ? this.post.images[0].source : null) ||
            this.picture;
        this.video = this.post.embed_html;

        if (this.picture || this.video) {
            this.wrapperStyle.maxWidth = '750px';
        }
    }

    render () {
        console.log('post',this.post);

        return (
            <a
                style={this.wrapperStyle}
                href={this.url}
                target="_blank"
            >
                <Avatar
                    user="100000862866272"
                    style={FacebookPost.avatarStyle}
                />
                <span
                    style={FacebookPost.facebookBannerStyle}
                >
                    <i className="fa fa-facebook-official"></i>
                </span>

                {this.renderVideo()}
                {this.renderPhoto()}
                {this.renderStatus()}
            </a>
        );
    }

    renderVideo () {
        if (!this.video) {
            return null;
        }

        return (
            <div dangerouslySetInnerHTML={{ __html: this.video }} />
        )
    }

    renderPhoto () {
        if (this.video || !this.picture) {
            return null;
        }

        return (
            <div>
                <img
                    style={{ width: '100%' }}
                    src={this.picture}
                    alt="facebook post image"
                />
            </div>
        );
    }

    renderStatus () {
        if (!this.message || !this.message.length) {
            return null;
        }

        return (
            <pre
                style={this.textStyle}
            >
                {this.message}
            </pre>
        )
    }
}

export default FacebookPost;
