import React from 'react';

// components
import Title from './header/Title'
import UploadButton from './header/UploadButton'
import SearchBar from './header/SearchBar'

function Header() {
  return (
    <div className="header">
      <div className="pure-g">
        <div className="pure-u-1-5"><Title /></div>
        <div className="pure-u-2-5"></div>
        <div className="pure-u-1-5"><SearchBar /></div>
        <div className="pure-u-1-5"><UploadButton /></div>
      </div>
    </div>
  );
}

export default Header;
