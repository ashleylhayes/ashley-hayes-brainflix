import React from 'react';
import Header from '../Header/Header';
import './videoUpload.scss'
import uploadThumbnail from '../../assets/Images/Upload-video-preview.jpg';

function VideoUpload() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className='upload-video__divider'></div>
            <div className="upload-video">
                <h1 className="upload-video__title">Upload Video</h1>
                <form className="upload-video__form">
                    <div className="upload-video__upload-container">
                        <div>
                            <p className="upload-video__thumbnail-title">VIDEO THUMBNAIL</p>
                            <div className="upload-video__thumbnail-container">
                                <img className="upload-video__thumbnail" src={uploadThumbnail} alt="add your upload" />
                            </div>
                        </div>
                        <div>
                            <p className="upload-video__video-title-label">TITLE YOUR VIDEO</p>
                            <input className="upload-video__video-title-input" placeholder="Add a title to your video"></input>
                            <p className="upload-video__video-description-label">ADD A VIDEO DESCRIPTION</p>
                            <textarea className="upload-video__video-description" placeholder="Add a description of your video"></textarea>
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

export default VideoUpload