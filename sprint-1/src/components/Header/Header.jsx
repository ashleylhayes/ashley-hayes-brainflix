import React from 'react';
import './header.scss';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import searchIcon from '../../assets/Icons/SVG/Icon-search.svg';
import uploadIcon from '../../assets/Icons/SVG/Icon-upload.svg';
import AvatarImage from '../AvatarImage/AvatarImage';

function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='logo with blue square with a white arrow inside, representing a play button. The word BrainFlix is written in black to the right of that.' />
            <input type="search" src={searchIcon} name="search" placeholder="Search" className='header__searchbar'/>
            <button className='header__upload-button'>
                <img className='header__upload-icon' src={uploadIcon} alt='plus sign icon'/>
                <p className='header__upload-text'>UPLOAD</p>
            </button>
            <AvatarImage />
        </header>
    )
}

export default Header;