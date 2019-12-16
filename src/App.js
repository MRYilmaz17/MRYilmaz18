import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Components/Header/Header'

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './Containers/Homepage/Homepage'

function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>

      </ Router>
    </div>
  );
}

export default App;
