import React, { Component } from 'react';
import {connect} from 'react-redux'

// import logo from './../logo.svg';
import './../css/App.css';

//actions
import * as actions from './../actions/actions'

//components
import Board from './Board'
import Splash from './Splash'

//material-ui
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';


class App extends Component {
  render() {
    var {gameStatus} = this.props
    const actionButtons = [
                      <FlatButton
                        label="Sweet"
                        primary={true}
                        keyboardFocused={true}
                        onTouchTap={()=>{
                          this.props.dispatch(actions.reset())
                          this.props.dispatch(actions.changeGameStatus(false))

                        }}
                      />,
                    ];

    // console.log(gameStatus);
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Number Slider</h2>
        </div> */}
        {
          (this.props.gameStatus)?<Dialog
          title="Congratulations !!! "
          actions={actionButtons}
          modal={true}
          open={this.props.winningStatus}
        >
          Weldone, you have won this game. Play another one.( Try increasing the board size if it's too easy for ya')
        </Dialog>:""
        }
        {(this.props.gameStatus !== false)? <AppBar
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
         }}
         iconElementRight={(this.props.gameStatus==='started')? <FlatButton onClick={()=>{
             this.props.dispatch(actions.changeBoardSize(this.props.boardSize))
         }} label="Re-shuffle" />:null}
       />: null}
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
    boardSize:state.boardSize,
    winningStatus:state.winningStatus,
  }
})(App);
