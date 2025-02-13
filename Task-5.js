// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(integer){
if(integer % 2 === 0){
  return 'Even';
}
else if(integer % 2 === 1){
  return 'Odd';
}
}
let result = odd_even(44);
console.log(result);
 
