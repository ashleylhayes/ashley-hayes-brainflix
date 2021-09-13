import React from 'react';
import Header from '../Header/Header';
import './videoUpload.scss'
import uploadThumbnail from '../../assets/Images/Upload-video-preview.jpg';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

const URL = "https://fast-plains-50193.herokuapp.com/videos/";

class VideoUpload extends React.Component {

    addVideo = (event) => {
        event.preventDefault()
        const uploadedVideo = {
            id: uuidv4(),
            title: event.target.title.value,
            channel: "Mohan Muruge",
            image: uploadThumbnail,
            description: event.target.description.value,
            views: "1,377",
            likes: "99",
            duration: "3:33",
            video: "https://project-2-api.herokuapp.com/stream",
            timestamp: Date.now(),
            comments: [
                {
                    "name": "Micheal Lyons",
                    "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                    "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                    "likes": 0,
                    "timestamp": 1545162149000
                },
                {
                    "name": "Gary Wong",
                    "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                    "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                    "likes": 0,
                    "timestamp": 1544595784046
                },
                {
                    "name": "Theodore Duncan",
                    "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                    "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                    "likes": 0,
                    "timestamp": 1542262984046
                }
            ]
        }
        
        console.log(uploadedVideo)

        axios.post(URL, uploadedVideo)
        .then (response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

        window.location.replace(URL)
    }



    render(){
        return (
            <>
                <div>
                    <Header />
                </div>
                <div className='upload-video__divider'></div>
                <div className="upload-video">
                    <h1 className="upload-video__title">Upload Video</h1>
                    <form onSubmit={this.addVideo} className="upload-video__form">
                        <div className="upload-video__upload-container">
                            <div>
                                <p className="upload-video__thumbnail-title">VIDEO THUMBNAIL</p>
                                <div className="upload-video__thumbnail-container">
                                    <img className="upload-video__thumbnail" src={uploadThumbnail} alt="add your upload" />
                                </div>
                            </div>
                            <div>
                                <p className="upload-video__video-title-label">TITLE YOUR VIDEO</p>
                                <input type="text" name="title" className="upload-video__video-title-input" placeholder="Add a title to your video"></input>
                                <p className="upload-video__video-description-label">ADD A VIDEO DESCRIPTION</p>
                                <textarea type="text" name="description" className="upload-video__video-description" placeholder="Add a description of your video"></textarea>
                            </div>
                        </div>
                        <div className="upload-video__button-container">
                            <button className="upload-video__publish-button">
                                PUBLISH
                            </button>
                            <button className="upload-video__cancel-button">
                                CANCEL
                            </button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default VideoUpload