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


//min-max function

function max(numbers) {
  let i = 0;

  if (numbers.length === 0) {
    return undefined;
  }

  let placeholder = numbers[0];

  while (i < numbers.length) {
    if (numbers[i] > placeholder) {
      placeholder = numbers[i];
    }

    i++;
  }

  return placeholder;
}

console.log(max([8,16,12,4,5,24,3,27]));

function min(numbers) {
  let i = 0;

  if (numbers.length === 0) {
    return undefined;
  }

  let placeholder = numbers[0];

  while (i < numbers.length) {
    if (numbers[i] < placeholder) {
      placeholder = numbers[i];
    }

    i++;
  }

  return placeholder;
}

console.log(min([3,2,4,1,15,8,6,32,9]));