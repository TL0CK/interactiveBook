import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomePage from './pages/HomePage';
import Universe from './pages/Universe';
import StoryLength from './pages/StoryLength';
import Story from './pages/Story';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <Route path ="/" exact component={HomePage}/>
          <Route path ="/universe" exact component={Universe}/>
          <Route path ="/universe/length" exact component={StoryLength}/>
          <Route path ="/universe/length/story" exact component={Story}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
