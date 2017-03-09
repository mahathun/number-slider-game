import React,{Component} from 'react'

//components
import Cell from './Cell';

//css
import '../css/cellRow.css';

class CellRow extends Component {
  render() {
    var {positions} = this.props;
  //  console.log(positions);


    return(
      <div className="cellRow">
        {
          positions.map((pos,i)=>{
             return <Cell key={i} text={pos.text} currentPosition={pos.currentPosition} />
           })
        }
      </div>
    );

  }
}

export default CellRow;
