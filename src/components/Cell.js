import React, {Component} from 'react';
import {connect} from 'react-redux';
//css
import '../css/cell.css';

//actions
import * as actions from './../actions/actions'


class Cell extends Component {

  onClick(cell){
    let {currentPositions,boardSize} = this.props;
    let offset = this.props.boardSize
    let max = boardSize*boardSize;
//console.log("cell",cell);
    let topPosition = ((cell- offset)>= max)?max-(cell- offset): cell- offset ;
    let bottomPosition = ((cell+ offset)>= max)?max-(cell+ offset): cell+ offset ;
    let nextPosition = cell+1;
    let previousPosition = cell-1;

    var {dispatch} = this.props;


    //console.log(topPosition,nextPosition,bottomPosition,previousPosition);
//console.log(currentPositions[bottomPosition]);
    if(currentPositions[topPosition] !== undefined  && currentPositions[topPosition].text === '-1'){
      // console.log("move to",topPosition);
      dispatch(actions.moveCell(cell,topPosition))
    } else if(currentPositions[bottomPosition] !== undefined  && currentPositions[bottomPosition].text === '-1'){
      // console.log("move to",bottomPosition);
      dispatch(actions.moveCell(cell,bottomPosition))
    } else if(currentPositions[nextPosition] !== undefined  && currentPositions[nextPosition].text === '-1'){
      // console.log("move to",nextPosition);
      dispatch(actions.moveCell(cell,nextPosition))
    } else if(currentPositions[previousPosition] !== undefined && currentPositions[previousPosition].text === '-1'){
      dispatch(actions.moveCell(cell,previousPosition))
      // console.log("move to",previousPosition);

      currentPositions[previousPosition].currentPosition = previousPosition
    }
  }
  render(){

    if(this.props.text!=='-1'){
      return(
        <div data={this.props.text} className="cell"  onClick={()=>this.onClick(this.props.currentPosition)}>
          {this.props.text}
        </div>
      );
    }else {
      return (<div data={this.props.text} style={{"background":"white"}} className="cell"  >

      </div>)
    }
  }
}

export default connect((state)=>{
  return {
    boardSize:state.boardSize,
    currentPositions:state.currentPositions
  }
})(Cell);
