export var moveCell = (currentPosition, nextPosition)=>{
  return {
    type: 'MOVE_CELL',
    currentPosition,
    nextPosition
  }
}

export var checkWin = (newPositions)=>{
  return {
    type:'CHECK_WIN',
    newPositions
  }
}
