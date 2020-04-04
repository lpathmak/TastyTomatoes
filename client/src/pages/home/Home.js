import React from 'react';
import {
  Link
} from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <p>
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <Link to="/restaurant?name=testRestaurant">Test link</Link>
      </header>
    </div>
  );
}

export default Home;
