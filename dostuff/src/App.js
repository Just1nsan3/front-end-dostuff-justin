import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Login from './Login';
import EventContainer from './EventContainer';
import {Route, Switch} from 'react-router-dom';


const My404 = () => {
  return (
    <div>
      You dun goofed
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/events" component={EventContainer}/>
        <Route component={My404}/>
      </Switch>
    </main>
  )
}

export default App;
