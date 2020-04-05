import React from 'react';
import {
  Link
} from "react-router-dom";
// components
import Header from '../components/Header'
import { ContainerTestHeader } from './home/TestHeader'
import { ContainerIncrementButton, ContainerDecrementButton} from './home/TestButton1'
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Header />
      <header className="Home-header">
        <ContainerTestHeader />
        <ContainerIncrementButton name="Increment"/>
        <ContainerDecrementButton name="Decrement"/>
        <p>
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <Link to="/restaurant?name=testRestaurant">Test link</Link>
      </header>
    </div>
  );
}

export default Home;
