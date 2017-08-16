import React, { Component } from 'react';
import './Assets/css/default.min.css';
import Header from './componets/headerComponet/header'
import Homepage from './componets/pages/homePage'
import Travel from './componets/pages/travel'

import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/Travel' component={Travel}/>

      </div>
      </Router>
    );
  }
}

export default App;
