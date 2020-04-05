import React from 'react';
import {
  Link
} from "react-router-dom";

function Title() {
  return (
    <div className="Home">
      <Link to="/"><h1 class="title-logo">Tasty Tomatoes</h1></Link>
    </div>
  );
}

export default Title;
