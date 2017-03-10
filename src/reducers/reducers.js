var _ = require('lodash')
import {getPositionObject} from './../api/api'

let defaultCurrentPositionState = [
  {
    currentPosition:1,
    text:'1'
  },
  {
    currentPosition:2,
    text:'2'
  },
  {
    currentPosition:3,
    text:'3'
  },
  {
    currentPosition:4,
    text:'4'
  },
  {
    currentPosition:5,
    text:'5'
  },
  {
    currentPosition:6,
    text:'6'
  },
  {
    currentPosition:7,
    text:'7'
  },
  {
    currentPosition:8,
    text:'8'
  },
  {
    currentPosition:9,
    text:'-1'
  },

];
export var currentPositionsReducer = (state = defaultCurrentPositionState, action)=>{
  switch (action.type) {
    case 'MOVE_CELL':
    //console.log("move", action.currentPosition, "to", action.nextPosition);
      var obj = [...state]
      obj[action.nextPosition].text = obj[action.currentPosition].text
      obj[action.currentPosition].text = "-1"
      return obj;
    case 'CHANGE_BOARD_SIZE':
      var obj = getPositionObject(action.value)

      return obj;

    default:
      return state;

  }
}

export var boardSizeReducer = (state=3, action)=>{
  switch (action.type) {
    case 'CHANGE_BOARD_SIZE':
      return action.value;
    default:
      return state;
  }
}

export var winningStatusReducer = (state=false, action)=>{
  switch (action.type) {
    case 'CHECK_WIN':
      var newPos = action.newPositions.map((p)=>{
        return parseInt(p.text,10)
      });
      //console.log("new: ", newPos);
      //console.log(state);
      var won = false;
      if(newPos[(newPos.length-1)]!== undefined && newPos[(newPos.length-1)]===-1){
        //console.log("first pass");
        won = _.every(newPos, function(value,index,array){
          ////console.log("index:", index, ", value:", value,", array[index+1]:", array[index+1], ",array.length:", array.length);
          return ( index >= (array.length-2) ) || array[index+1]>value
        });
        console.log("winning", won);

      }
      return won
    default:
      return state

  }
}

export var gameStatusReducer = (state=false, action)=>{
  switch (action.type) {
    case 'CHANGE_GAME_STATUS':
      return action.newStatus
    default:
      return state;
  }
}
