import React, { Component } from 'react';
import { COLORS } from '../constants';

class Avatar extends Component
{
    static style = {
        borderRadius: '50%',
        border: `2px ${COLORS.WHITE} solid`
    };

    componentWillMount () {
        this.src = this.props.user ?
            `https://graph.facebook.com/${this.props.user}/picture${this.props.large ? '?type=large' : ''}` :
            this.props.url;
    }

    render () {
        return (
            <img
                style={{...this.props.style, ...Avatar.style}}
                src={this.src}
                alt="avatar"
            />
        );
    }
}

export default Avatar;
