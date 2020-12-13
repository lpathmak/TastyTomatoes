import React from 'react';
import './Header.css';

// components
import Title from './header/Title'
import UploadButton from './header/UploadButton'
import SearchBar from './header/SearchBar'

function Header() {
  return (
    <div className="header">
      <div className="pure-g">
        <div className="pure-u-3-8"><Title /></div>
        <div className="pure-u-1-4"></div>
        <div className="pure-u-1-8"><SearchBar /></div>
        <div className="pure-u-1-8"></div>
        <div className="pure-u-1-8"><UploadButton /></div>
      </div>
    </div>
  );
}

export default Header;
