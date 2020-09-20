import React from 'react';
import './commentsForm.scss'

class CommentsForm extends React.Component {
    render() {
        return (
            <div className='current-video__comment-form-container'>
                <div className='current-video__avatar-container'>
                    <div className='current-video__avatar-image'></div>
                </div>
                <div className='current-video__comment-input-container'>
                    <form name='commentsForm' className='current-video__comment-form'>
                        <label className='current-video__comment-form-title'>JOIN THE CONVERSATION</label>
                        <textarea className='current-video__comment-form-input' name='comment' placeholder='That was easily the most spectacular BMX moment ever.' required></textarea>
                        <button className='current-video__comment-form-button'>COMMENT</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CommentsForm;