var _ = require('lodash');
var shuffle = require('shuffle-array')

export var countInversions = (array)=>{
  // Note: this uses a variant of merge sort

  //input handlers
  if (array === undefined) throw new Error("Array must be defined to count inversions");
  if (array.length === 0 || array.length === 1) return 0;

  var tally = 0; // count for inversions
  sort(array); // merge sort the array and increment tally when there are crossovers
  return tally;


  function sort(arr) {
    if (arr.length === 1) return arr;
    var right = arr.splice(Math.floor(arr.length/2), arr.length - 1);
    return merge(sort(arr), sort(right));
  }
  function merge(left, right){
    var merged = [];
    var l = 0, r = 0;
    var multiplier = 0;
    while (l < left.length || r < right.length){
      if (l === left.length){
        merged.push(right[r]);
        r++;
      } else if (r === right.length){
        merged.push(left[l]);
        l++;
        tally += multiplier;
      } else if (left[l] < right[r]) {
        merged.push(left[l]);
        tally += multiplier;
        l++;
      } else {
        merged.push(right[r]);
        r++;
        multiplier++;
      }
    }
    return merged;
  }
}


export var solvablePuzzle = (array, gridWidth) =>{
  var inversions = countInversions(array);
  //console.log(inversions);
  var gridWidthEven = (gridWidth%2===0) ? true:false;
  var inversionsEven = (inversions%2===0) ? true:false;

  //console.log((!gridWidthEven && inversionsEven) || (gridWidthEven && inversionsEven));
  return (!gridWidthEven && inversionsEven) || (gridWidthEven && inversionsEven)
  //( (grid width odd) && (#inversions even) )  ||  ( (grid width even) && ((blank on odd row from bottom) == (#inversions even)) )
}


export var getPositionObject = (boardSize)=>{

  var positions = [];

  for(var i=1; i<boardSize*boardSize; i++){
    positions.push(i);

  }
//  var positions = [1,2,3,4,5,6,7,8];


  shuffle(positions);
  var copyOfPositions = _.clone(positions);

  //console.log(solvablePuzzle(copyOfPositions));
  while(!solvablePuzzle(copyOfPositions,boardSize)){
    shuffle(positions);
    copyOfPositions = _.clone(positions);
  }
  var obj = positions.map((p,i)=>{
    return {
      currentPosition:i,
      text:(p).toString()
    }
  });
  obj.push({currentPosition:(boardSize*boardSize-1),
            text:'-1'})

  return obj;
}
