'use strict';
//compute average
function average(array){
  let sum = 0;
  array.forEach(num => {
    sum+=num;
  });
  return sum/array.length;
}
console.log(average([1,2,3,4]));