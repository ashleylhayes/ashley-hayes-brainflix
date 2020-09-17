import React from 'react';
import './header.scss';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import SearchBar from './SearchBar';
import UploadButton from './UploadButton';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt='logo with blue square with a white arrow inside, representing a play button. The word BrainFlix is written in black to the right of that.' />
            <SearchBar />
            <UploadButton />
            <div className='header__avatar-container'></div>
        </div>
    )
}

export default Header;