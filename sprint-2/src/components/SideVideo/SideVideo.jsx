import React from 'react';
import './sideVideo.scss'

class SideVideo extends React.Component {
    render() {
        let {id, image, title, channel} = this.props;
        return (
            <div className='next-video__side-video'>
                <div className='next-video__side-video-image-container'>
                    <img className='next-video__side-video-image' src={image} alt="" />
                </div>
                <div className='next-video__side-video-info-container'>
                    <p className='next-video__side-video-title'>{title}</p>
                    <p className='next-video__side-video-account'>{channel}</p>
                </div>
            </div>
        )
    }
}

export default SideVideo;