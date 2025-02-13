// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers){
  let sum = 0;
  for(let num of numbers){
    sum += num;
  }
  return sum / numbers.length;
}
let intNum = [10, 20, 30, 40, 50];
let result = make_avg(intNum);
console.log('the avg is:',result);