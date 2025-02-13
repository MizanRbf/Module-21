// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryString){

  let count = 0;
  for(let char of binaryString){
    if(char === "0"){
      count++;
    }

  }
  return count;
}


let str = "10011010011";
let result = count_zero(str);
console.log(result);