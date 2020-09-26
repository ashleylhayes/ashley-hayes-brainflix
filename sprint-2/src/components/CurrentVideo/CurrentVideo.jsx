import React from 'react';
import './currentVideo.scss';
import Header from '../Header/Header';
import CommentsForm from '../CommentsForm/CommentsForm'
import Comment from '../Comment/Comment'
import NextVideo from '../NextVideo/NextVideo';
import playIcon from '../../assets/Icons/SVG/Icon-play.svg';
import expandIcon from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volumeIcon from '../../assets/Icons/SVG/Icon-volume.svg';
import viewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../assets/Icons/SVG/Icon-likes.svg';
import axios from 'axios';

const API_KEY = "?api_key=6b0f89c7-4033-408f-b97d-1440f9c4b0c4";
const VIDEOS_URL = "https://project-2-api.herokuapp.com/videos/1af0jruup5gu";

class CurrentVideo extends React.Component {
    state = {
        currentVideoContent: []
    };

    componentDidMount() {
        axios.get(VIDEOS_URL + API_KEY).then(({ data }) => {
            console.log(data);
            this.setState({
                currentVideoContent: data
            })
            console.log(this.state.currentVideoContent.comments);
        })
    }

    render() {
        return (
            <div>
                <Header />
            <section className='current-video'>
                <video className='current-video__video' poster={this.state.currentVideoContent.image}></video>
                <div className='current-video__controls-container'>
                    <div className='current-video__play'>
                    <img className='current-video__play-icon' src={playIcon} alt='play arrow icon' />
                    </div>
                    <div className='current-video__scrubber'>
                        <div className='current-video__scrubber-line'></div>
                        <p className='current-video__scrubber-time'>0:00 / {this.state.currentVideoContent.duration}</p>
                    </div>
                    <div className='current-video__expand-volume'>
                        <img className='current-video__expand' src={expandIcon} alt='expand video icon' />
                        <img className='current-video__volume' src={volumeIcon} alt='volume icon' />
                    </div>
                </div>
                <main className='current-video__all'>
                    <div className='current-video__all-info'>
                        <div className='current-video__details'>
                            <h1 className= 'current-video__title'>{this.state.currentVideoContent.title}</h1>
                            <p className='current-video__uploader'>By {this.state.currentVideoContent.channel}</p>
                            <p className='current-video__date'>{this.state.currentVideoContent.timestamp}</p>
                            <div className='current-video__tally-container'>
                                <img className='current-video__tally-icon' src={viewsIcon} alt="" />
                                <p className='current-video__tally-text'>{this.state.currentVideoContent.views}</p>
                            </div>
                            <div className='current-video__tally-container'>
                                <img className='current-video__tally-icon' src={likesIcon} alt="" />
                                <p className='current-video__tally-text'>{this.state.currentVideoContent.likes}</p>
                            </div>
                        </div>
                        <div className='current-video__description-container'>
                            <p className='current-video__description'>{this.state.currentVideoContent.description}</p>
                        </div>
                        <div className='current-video__comments-container'>
                            <p className='current-video__comments-number'>3 Comments</p>
                            <CommentsForm />
                            {/* {this.state.currentVideoContent.comments.map((content) => <Comment key={content.id} name={content.name} date={content.timestamp} comment={content.comment} />)} */}
                        </div>
                    </div>
                    <div>
                        <NextVideo />
                    </div>
                </main>
            </section>
            </div>
        );
    }
}

export default CurrentVideo;