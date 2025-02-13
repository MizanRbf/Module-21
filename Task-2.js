// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function evenOrOdd(number){
if(number % 2 === 1){
  let multipleIt = number * 2;
  return multipleIt;
}
else if(number % 2 === 0){
  let devideIt = number / 2;
  return devideIt;
}
}

let result = evenOrOdd(7);
console.log('result',result);