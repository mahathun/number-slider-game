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
    <div className="tic-toc">
      <div className="side-space">

      </div>
      <div className="board">
        {
          // currentPositions.map((pos,i)=>{
          //
          //   return <Cell key={i} text={pos.text} currentPosition={pos.currentPosition} />
          // })
          chunkedArray.map((pos,i) => {
            return <CellRow positions={pos} key={i}/>
          })
        }
      </div>
      <div className="side-space">
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
