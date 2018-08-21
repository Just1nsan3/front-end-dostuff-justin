import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CategoryEventContainer from './CategoryEventContainer'
import EventContainer from './EventContainer';
import {Route, Switch} from 'react-router-dom';
import Categories from './Categories';


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
        <Route exact path="/events" component={EventContainer} />
        <Route exact path='/categoryEvent' component={CategoryEventContainer} />
        <Route exact path="/" component={Categories} />
        <Route component={My404}/>
      </Switch>
    </main>
  )
}

export default App;
