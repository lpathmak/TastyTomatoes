import React from 'react';
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
