// Array method. Reduce()

// Reducce method is used to merge the array elements and give in a single output.

// It might be string or numbers.

let txt = ["Javascript", " is " ,"fun"]

function result (accumalator , currentvalue){
    return accumalator + currentvalue;
}

let joinedText = txt.reduce(result);

console.log(joinedText)

// The above code is the example of reduce.

// One var is declare, function is created. 

// Accumulator is the value return from the pervious iteration of the function.
// Current Value is current elelment being processed in the array. 

const numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = numbers.reduce(sum_reducer);
console.log(sum); // 21

// using arrow function
let summation = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation); // 21