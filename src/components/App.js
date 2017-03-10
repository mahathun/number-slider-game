import React, { Component } from 'react';
import {connect} from 'react-redux'

import logo from './../logo.svg';
import './../css/App.css';


//components
import Board from './Board'
import Splash from './Splash'



class App extends Component {
  render() {
    var {gameStatus} = this.props
    console.log(gameStatus);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Number Slider</h2>
        </div>
        <div className="app-container">
            {
              (gameStatus === false)?<Splash />:<Board/>
            }
        </div>
      </div>
    );
  }
}

export default connect((state)=>{
  return {
    gameStatus:state.gameStatus
  }
})(App);
