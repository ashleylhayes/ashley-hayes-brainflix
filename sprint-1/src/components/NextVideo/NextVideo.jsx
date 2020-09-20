import React from 'react';
import SideVideo from '../SideVideo/SideVideo';
import './nextVideo.scss';
import videoList1 from '../../assets/Images/video-list-1.jpg';
import videoList2 from '../../assets/Images/video-list-2.jpg';
import videoList3 from '../../assets/Images/video-list-3.jpg';
import videoList4 from '../../assets/Images/video-list-4.jpg';
import videoList5 from '../../assets/Images/video-list-5.jpg';
import videoList6 from '../../assets/Images/video-list-6.jpg';
import videoList7 from '../../assets/Images/video-list-7.jpg';
import videoList8 from '../../assets/Images/video-list-8.jpg';

class NextVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideVideoContent: [
                {
                    image: videoList1,
                    title: 'Become A Travel Pro In One Easy Lesson',
                    channel: 'Scotty Cranmer'
                },
                {
                    image: videoList2,
                    title: 'Les Houches The Hidden Gem Of The Chamonix',
                    channel: 'Scotty Cranmer'
                },
                {
                    image: videoList3,
                    title: 'Travel Health Useful Medical Information For',
                    channel: 'Scotty Cranmer'
                },
                {
                    image: videoList4,
                    title: 'Cheap Airline Tickets Great Ways To Save',
                    channel: 'Emily Harper'
                },
                {
                    image: videoList5,
                    title: 'Take A Romantic Break In A Boutique Hotel',
                    channel: 'Ethan Owen'
                },
                {
                    image: videoList6,
                    title: 'Choose The Perfect Accommodations',
                    channel: 'Lydia Perez'
                },
                {
                    image: videoList7,
                    title: 'Cruising Destination Ideas',
                    channel: 'Timothy Austin'
                },
                {
                    image: videoList8,
                    title: 'Train Travel On Track For Safety',
                    channel: 'Scotty Cranmer'
                }
            ]
        };
    }
    render() {
        return (
            <section className='next-video__container'>
                <p className='next-video__title'>NEXT VIDEO</p>
                <div>
                    {this.state.sideVideoContent.map((content, index) => <SideVideo key={index} image={content.image} title={content.title} channel={content.channel} />)}
                </div>
            </section>
        );
    }
}

export default NextVideo;