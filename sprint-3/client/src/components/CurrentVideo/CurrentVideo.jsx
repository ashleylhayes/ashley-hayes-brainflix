import React from 'react';
import { Link } from 'react-router-dom';
import './currentVideo.scss';
import Header from '../Header/Header';
import CommentsForm from '../CommentsForm/CommentsForm';
import Comment from '../Comment/Comment';
import SideVideo from '../SideVideo/SideVideo';
import playIcon from '../../assets/Icons/SVG/Icon-play.svg';
import expandIcon from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volumeIcon from '../../assets/Icons/SVG/Icon-volume.svg';
import viewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../assets/Icons/SVG/Icon-likes.svg';
import loadingGif from '../../assets/Images/loading.gif';
import axios from 'axios';

const URL = "https://fast-plains-50193.herokuapp.com/videos/";

class CurrentVideo extends React.Component {
    state = {
        currentVideoContent: [],
        commentsContent: [],
        sideVideoContent: []
    };

    componentDidMount() {
        const ID = '1af0jruup5gu';
        axios.get(URL + ID)
        .then(({ data }) => {
            this.setState({
                currentVideoContent: data,
                commentsContent: data.comments
            });
        })
        .catch(error => console.log(error));

        axios.get(URL)
        .then(({ data }) => {
            this.setState({
                sideVideoContent: data
            });
        })
        .catch(error => console.log(error));
    };

    componentDidUpdate(prevProps, prevState) {
        const { match } = this.props;
        const ID = match.params.id ? match.params.id : '1af0jruup5gu';
        if (match.params.id !== this.state.currentVideoContent.id) {
            axios.get(URL + ID)
            .then(({ data }) => {
                this.setState({
                    currentVideoContent: data,
                    commentsContent: data.comments
                });
            })
            .catch(error => console.log(error));
        };
    };

    render() {
        if(this.state.sideVideoContent.length > 0) {
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
                            <p className='current-video__date'>{new Date(this.state.currentVideoContent.timestamp).toLocaleDateString("en-US")}</p>
                            <div className='current-video__tally-container'>
                                <img className='current-video__tally-icon' src={viewsIcon} alt='eye icon for views' />
                                <p className='current-video__tally-text'>{this.state.currentVideoContent.views}</p>
                            </div>
                            <div className='current-video__tally-container'>
                                <img className='current-video__tally-icon' src={likesIcon} alt='heart icon for likes' />
                                <p className='current-video__tally-text'>{this.state.currentVideoContent.likes}</p>
                            </div>
                        </div>
                        <div className='current-video__description-container'>
                            <p className='current-video__description'>{this.state.currentVideoContent.description}</p>
                        </div>
                        <div className='current-video__comments-container'>
                            <p className='current-video__comments-number'>{this.state.commentsContent.length} Comments</p>
                            <CommentsForm />
                            {this.state.commentsContent.map((content) => 
                                <Comment 
                                    key={content.id} 
                                    name={content.name} 
                                    date={new Date(content.timestamp).toLocaleDateString("en-US")} 
                                    comment={content.comment} 
                                />
                            )}
                        </div>
                    </div>
                    <div>
                        <section className='next-video__container'>
                            <p className='next-video__title'>NEXT VIDEO</p>
                            <div>
                                {this.state.sideVideoContent.filter((content) => {
                                    return content.id !== this.state.currentVideoContent.id;
                                }).map((content) => 
                                <Link className="next-video__link" key={content.id} to={`/${content.id}`}>
                                    <SideVideo 
                                        key={content.id} 
                                        image={content.image} 
                                        title={content.title} 
                                        channel={content.channel} 
                                    />
                                </Link>)}
                            </div>
                        </section>
                    </div>
                </main>
            </section>
            </div>
        );
        } else {
            return (
                <div className='loading'>
                    <img className='loading__image' src={loadingGif} alt='Rotating grey loading gif' />
                    <h3>Loading Videos...</h3>
                </div>
            )
        }
    };
};

export default CurrentVideo;