import React, { Component } from 'react';
import {Provider} from 'react-redux'
import logo from './../logo.svg';
import './../css/App.css';
var shuffle = require('shuffle-array')
import watch from 'redux-watch'
var _ = require('lodash');

//components
import Board from './Board'

//store
import * as store from './../store/configStore'

//actions
import * as actions from './../actions/actions'

//api and game resourcces
import {solvablePuzzle} from './../api/api'

var positions = [1,2,3,4,5,6,7,8];

shuffle(positions);
var copyOfPositions = _.clone(positions);

//console.log(solvablePuzzle(copyOfPositions));
while(!solvablePuzzle(copyOfPositions)){
  shuffle(positions);
  copyOfPositions = _.clone(positions);
}
var obj = positions.map((p,i)=>{
  return {
    currentPosition:i,
    text:(p).toString()
  }
});
obj.push({currentPosition:8,
          text:'-1'})

// console.log(positions);
// console.log(obj);

let numberSliderStore = store.config({boardSize:3, currentPositions:obj});
//watching for board changes
var w = watch(numberSliderStore.getState, 'currentPositions');
//check for a winning combination
numberSliderStore.subscribe(w((newVal, oldVal, objectPath) => {
  numberSliderStore.dispatch(actions.checkWin(newVal));
}))

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Number Slider</h2>
        </div>
        <Provider store={numberSliderStore}>
          <Board/>
        </Provider>

      </div>
    );
  }
}

export default App;
