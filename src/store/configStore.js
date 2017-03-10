import * as Redux from 'redux'

import {currentPositionsReducer, boardSizeReducer, winningStatusReducer, gameStatusReducer} from './../reducers/reducers.js'

let defaultState = {
  gameStatus: false,
  winningStatus: false,
  boardSize:3,
  currentPositions:[
    {
      currentPosition:0,
      text:'1'
    },
    {
      currentPosition:1,
      text:'2'
    },
    {
      currentPosition:2,
      text:'3'
    },
    {
      currentPosition:3,
      text:'4'
    },
    {
      currentPosition:4,
      text:'5'
    },
    {
      currentPosition:5,
      text:'6'
    },
    {
      currentPosition:6,
      text:'7'
    },
    {
      currentPosition:7,
      text:'8'
    },
    {
      currentPosition:8,
      text:'-1'
    },

  ]
}

var reducers = Redux.combineReducers({
  gameStatus:gameStatusReducer,
  winningStatus:winningStatusReducer,
  boardSize:boardSizeReducer,
  currentPositions:currentPositionsReducer
})

export var config = (initialState = defaultState)=>{
  return Redux.createStore(reducers, initialState);
}
