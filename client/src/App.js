import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// redux
import { Provider } from 'react-redux';
import store from './store'
import './App.css';
// pages
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header/>
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/restaurant/:id" render={(props) => <Restaurant {...props}/>}>
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
