import React from 'react';
import './currentVideo.scss';
import videoList0 from '../../assets/Images/video-list-0.jpg';
import playIcon from '../../assets/Icons/SVG/Icon-play.svg';
import expandIcon from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volumeIcon from '../../assets/Icons/SVG/Icon-volume.svg';
import viewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../assets/Icons/SVG/Icon-likes.svg';

class CurrentVideo extends React.Component {
    render() {
        return (
            <section className='current-video'>
                <video className='current-video__video' poster={videoList0}></video>
                <div className='current-video__controls-container'>
                    <div className='current-video__play'>
                    <img className='current-video__play-icon' src={playIcon} alt='play arrow icon' />
                    </div>
                    <div className='current-video__scrubber'>
                        <div className='current-video__scrubber-line'></div>
                        <p className='current-video__scrubber-time'>0:00 / 0:42</p>
                    </div>
                    <div className='current-video__expand-volume'>
                        <img className='current-video__expand' src={expandIcon} alt='expand video icon' />
                        <img className='current-video__volume' src={volumeIcon} alt='volume icon' />
                    </div>
                </div>
                <div className='current-video__details'>
                    <h1 className= 'current-video__title'>BMX Rampage: 2018 Highlights</h1>
                    <p className='current-video__uploader'>By Red Cow</p>
                    <p className='current-video__date'>12/18/2018</p>
                    <TallyComponent src={viewsIcon} tally={"1,001,023"} />
                    <TallyComponent src={likesIcon} tally={"110,985"} />
                </div>
                <div className='current-video__description-container'>
                    <p className='current-video__description'>On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
                </div>
            </section>
        );
    }
}

function TallyComponent(props) {
    return (
    <div className='current-video__tally-container'> <img className='current-video__tally-icon' src={props.icon} alt=" " /> <p className='current-video__tally-text'>{props.tally}</p> </div>
    );
}


export default CurrentVideo;