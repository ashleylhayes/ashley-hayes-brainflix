import React from 'react';
import './comment.scss'

class Comment extends React.Component {
    render() {
        let {name, date, comment} = this.props;
        return (
            <div className='current-video__comment'>
                <div className='current-video__comment-avatar-container'>
                    <div className='current-video__comment-avatar-image'></div>
                </div>
                <div className='current-video__comment-info-container'>
                    <p className='current-video__comment-name'>{name}</p>
                    <p className='current-video__comment-date'>{date}</p>
                        <p className='current-video__comment-comment'>{comment}</p>
                </div>
            </div>
        )
    }
}

export default Comment;