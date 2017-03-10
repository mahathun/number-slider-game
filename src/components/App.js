import React, { Component } from 'react';
import {connect} from 'react-redux'

// import logo from './../logo.svg';
import './../css/App.css';

//actions
import * as actions from './../actions/actions'

//components
import Board from './Board'
import Splash from './Splash'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


class App extends Component {
  render() {
    var {gameStatus} = this.props
    // console.log(gameStatus);
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Number Slider</h2>
        </div> */}
        <AppBar
         title="Number Slider"
         onLeftIconButtonTouchTap={()=>{
           var {gameStatus} = this.props;
           switch (gameStatus) {
            case 'started':
              this.props.dispatch(actions.changeGameStatus('paused'));
              break;
            case 'paused':
              this.props.dispatch(actions.changeGameStatus('started'));
              break;
             default:
              break;
           }
           if(gameStatus==='started'){
           }
         }}
         iconElementRight={<FlatButton onClick={()=>{
             this.props.dispatch(actions.changeBoardSize(this.props.boardSize))
         }} label="Re-shuffle" />}
       />
        <div className="app-container">
            {
              (gameStatus !== 'started')?<Splash />:<Board/>
            }
        </div>
      </div>
    );
  }
}

export default connect((state)=>{
  return {
    gameStatus:state.gameStatus,
    boardSize:state.boardSize
  }
})(App);
