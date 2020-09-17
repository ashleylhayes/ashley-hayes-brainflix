import React from 'react';
import searchIcon from '../../assets/Icons/SVG/Icon-search.svg';

function SearchBar() {
    return (
        <input type="search" src={searchIcon} name="search" placeholder="Search" className='header__searchbar'/>
    )
}

export default SearchBar;