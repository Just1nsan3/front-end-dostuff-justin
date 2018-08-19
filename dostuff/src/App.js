import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
