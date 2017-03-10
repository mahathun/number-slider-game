import React, {Component} from 'react';
import {connect} from 'react-redux';
var _ = require('lodash');

//css
import '../css/board.css';
//components
import CellRow from './CellRow';
// import Cell from './Cell';


class Board extends Component {

  render(){
    //console.log('winningStatus: ',this.props.winningStatus);
    let {currentPositions, boardSize} = this.props;
    //console.log(boardSize);
    let chunkedArray = _.chunk(currentPositions,boardSize);
    //console.log("chunked",chunkedArray);
    return(
    <div className="board-container">
      <div className="space">

      </div>
      <div className="board">
        <div className="top-bottom-spacer">

        </div>
        {
          chunkedArray.map((pos,i) => {
            return <CellRow positions={pos} key={i}/>
          })
        }
        <div className="top-bottom-spacer">

        </div>
      </div>
      <div className="space">
      </div>

    </div>
    );
  }
}

export default connect((state)=>{
  return {
    boardSize:state.boardSize,
    currentPositions:state.currentPositions
  }
})(Board);
