import React from 'react';
import uploadIcon from '../../assets/Icons/SVG/Icon-upload.svg';

function UploadButton() {
    return (
        <button className='header__upload-button'>
            <img className='header__upload-icon' src={uploadIcon} alt='plus sign icon'/>
            <p className='header__upload-text'>UPLOAD</p>
        </button>
    )
}

export default UploadButton;