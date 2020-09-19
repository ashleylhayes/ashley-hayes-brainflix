import React from 'react';
import './currentVideo.scss';
import videoList0 from '../../assets/Images/video-list-0.jpg';
import playIcon from '../../assets/Icons/SVG/Icon-play.svg';
import expandIcon from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volumeIcon from '../../assets/Icons/SVG/Icon-volume.svg';

function CurrentVideo() {
    return (
        <section className='current-video'>
        <video className='current-video__video' poster={videoList0}></video>
            <div className='current-video__controls-container'>
                <div className='current-video__play'>
                    <img className='current-video__play-icon' src={playIcon} alt='play arrow icon' />
                </div>
                <div className='current-video__scrubber'>
                    <div className='current-video__scrubber-line'></div>
                    <p className='current-video__scrubber-time'>0:00/0:42</p>
                </div>
                <div className='current-video__expand-volume'>
                    <img className='current-video__expand' src={expandIcon} alt='expand video icon' />
                    <img className='current-video__volume' src={volumeIcon} alt='volume icon' />
                </div>
            </div>
        </section>
    )
}

export default CurrentVideo;