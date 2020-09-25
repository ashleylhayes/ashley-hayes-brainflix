import React, { Component } from 'react';
import Header from '../Header/Header';
import './videoUpload.scss'
import uploadThumbnail from '../../assets/Images/Upload-video-preview.jpg';

class VideoUpload extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className='upload-video__divider'></div>
                <div className="upload-video">
                    <h1 className="upload-video__title">Upload Video</h1>
                    <p className="upload-video__thumbnail-title">VIDEO THUMBNAIL</p>
                    <div className="upload-video__thumbnail-container">
                        <img className="upload-video__thumbnail" src={uploadThumbnail} alt="" />
                    </div>
                    <form className="upload-video__form">
                        <p className="upload-video__video-title-label">TITLE YOUR VIDEO</p>
                        <input className="upload-video__video-title-input" placeholder="Add a title to your video"></input>
                        <p className="upload-video__video-description-label">ADD A VIDEO DESCRIPTION</p>
                        <textarea className="upload-video__video-description" placeholder="Add a description of your video"></textarea>
                        <button className="upload-video__publish-button">
                            PUBLISH
                        </button>
                        <button className="upload-video__cancel-button">
                            CANCEL
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default VideoUpload