import React from 'react';
import './commentsForm.scss'

class CommentsForm extends React.Component {
    render() {
        return (
            <div className='current-video__comment-form-container'>
                <div className='current-video__avatar-container'>
                    <div className='current-video__avatar-image'></div>
                </div>
                <form name='commentsForm' className='current-video__comment-form'>
                    <label className='current-video__comment-form-title'>JOIN THE CONVERSATION</label>
                    <textarea className='current-video__comment-form-input' name='comment' placeholder='Write comment here' required></textarea>
                    <button className='current-video__comment-form-button'>COMMENT</button>
                </form>
            </div>
        )
    }
}

export default CommentsForm;