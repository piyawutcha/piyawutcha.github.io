import React, { Component } from 'react';
import './App.css';
import Profile from './containers/Profile/Profile';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(fab)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile/>
      </div>
    );
  }
}

export default App;
