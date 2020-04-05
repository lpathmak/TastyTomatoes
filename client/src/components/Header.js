import React from 'react';
import Title from './header/Title'

function Header() {
  return (
    <div className="Header">
      <div class="pure-g">
        <div class="pure-u-1-5"><Title /></div>
        <div class="pure-u-2-5"></div>
        <div class="pure-u-1-5"><p>Search Bar</p></div>
        <div class="pure-u-1-5"><p>Upload</p></div>
      </div>
    </div>
  );
}

export default Header;
