import React from 'react';
import SideVideo from '../SideVideo/SideVideo';
import './nextVideo.scss';
import axios from 'axios';

const API_KEY = "?api_key=6b0f89c7-4033-408f-b97d-1440f9c4b0c4";
const VIDEOS_URL = "https://project-2-api.herokuapp.com/videos";

class NextVideo extends React.Component {
    state = {
        sideVideoContent: []
    };

    componentDidMount() {
        axios.get(VIDEOS_URL + API_KEY).then(({ data }) => {
            this.setState({
                sideVideoContent: data
            })
        })
    }

    render() {
        return (
            <section className='next-video__container'>
                <p className='next-video__title'>NEXT VIDEO</p>
                <div>
                    {this.state.sideVideoContent.map((content) => <SideVideo key={content.id} image={content.image} title={content.title} channel={content.channel} />)}
                </div>
            </section>
        );
    }
}

export default NextVideo;