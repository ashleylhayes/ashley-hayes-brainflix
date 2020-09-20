import React from 'react';
import './currentVideo.scss';
import CommentsForm from '../CommentsForm/CommentsForm'
import Comment from '../Comment/Comment'
import videoList0 from '../../assets/Images/video-list-0.jpg';
import playIcon from '../../assets/Icons/SVG/Icon-play.svg';
import expandIcon from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volumeIcon from '../../assets/Icons/SVG/Icon-volume.svg';
import viewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../assets/Icons/SVG/Icon-likes.svg';

class CurrentVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: videoList0,
            duration: '0:42',
            title: 'BMX Rampage: 2018 Highlights',
            channel: 'Red Cow',
            timestamp: '12/18/2018',
            viewsImage: viewsIcon,
            views: '1,001,023',
            likesImage: likesIcon,
            likes: '110,985',
            description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
            comments: [
                {
                    name: 'Michael Lyons',
                    date: '12/18/2018',
                    comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
                },
                {
                    name: 'Gary Wong',
                    date: '12/18/2018',
                    comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
                },
                {
                    name: 'Theodore Duncan',
                    date: '11/15/2018',
                    comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
                }
            ]
        };
    }
    render() {
        return (
            <section className='current-video'>
                <video className='current-video__video' poster={this.state.video}></video>
                <div className='current-video__controls-container'>
                    <div className='current-video__play'>
                    <img className='current-video__play-icon' src={playIcon} alt='play arrow icon' />
                    </div>
                    <div className='current-video__scrubber'>
                        <div className='current-video__scrubber-line'></div>
                        <p className='current-video__scrubber-time'>0:00 / {this.state.duration}</p>
                    </div>
                    <div className='current-video__expand-volume'>
                        <img className='current-video__expand' src={expandIcon} alt='expand video icon' />
                        <img className='current-video__volume' src={volumeIcon} alt='volume icon' />
                    </div>
                </div>
                <div className='current-video__details'>
                    <h1 className= 'current-video__title'>{this.state.title}</h1>
                    <p className='current-video__uploader'>By {this.state.channel}</p>
                    <p className='current-video__date'>{this.state.timestamp}</p>
                    <div className='current-video__tally-container'>
                        <img className='current-video__tally-icon' src={this.state.viewsImage} alt="" />
                        <p className='current-video__tally-text'>{this.state.views}</p>
                    </div>
                    <div className='current-video__tally-container'>
                        <img className='current-video__tally-icon' src={this.state.likesImage} alt="" />
                        <p className='current-video__tally-text'>{this.state.likes}</p>
                    </div>
                </div>
                <div className='current-video__description-container'>
                    <p className='current-video__description'>{this.state.description}</p>
                </div>
                <div className='current-video__comments-container'>
                    <p className='current-video__comments-number'>3 Comments</p>
                    <CommentsForm />
                    {this.state.comments.map((content, index) => <Comment key={index} name={content.name} date={content.date} comment={content.comment} />)}
                </div>
            </section>
        );
    }
}

export default CurrentVideo;