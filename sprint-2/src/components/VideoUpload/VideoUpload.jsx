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
                <div className="upload-video">
                    <h1 className="upload-video__title">Upload Video</h1>
                    <p className="upload-video__thumbnail-title">VIDEO THUMBNAIL</p>
                    <div className="upload-video__thumbnail-container">
                        <img className="upload-video__thumbnail" src={uploadThumbnail} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoUpload