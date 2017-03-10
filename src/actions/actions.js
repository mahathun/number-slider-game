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

export var changeBoardSize = (value)=>{
  return {
    type: 'CHANGE_BOARD_SIZE',
    value
  }
}

export var changeGameStatus = (newStatus)=>{
  return {
    type: 'CHANGE_GAME_STATUS',
    newStatus
  }
}
