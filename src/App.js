import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import Post from './screens/Post';
import Gallery from './screens/Gallery';
import Todo from './screens/Todo';


class App extends Component {

  render() {
    return (
      <Router>
          <Switch>
              <Route exact path="/" component={ Dashboard } />
              <Route exact path="/profile/:id" component={ Profile }/>
              <Route exact path="/posts/:id" component={ Post }/>
              <Route exact path="/gallery/:id" component={ Gallery }/>
              <Route exact path="/todo/:id" component={ Todo }/>
              <Redirect path="/" />
          </Switch>
      </Router>
    );
  }
}

export default App;
