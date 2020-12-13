import React from 'react';
import {
  Link
} from "react-router-dom";
// components

import PopularFoodsList from './home/PopularFoodsList'
import './Home.css';

function Home() {
  return (
    <div className="home">
      <PopularFoodsList />
    </div>
  );
}

export default Home;
