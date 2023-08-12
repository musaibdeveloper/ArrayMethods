// The flatMap() method first maps each element of an array using a mapping function, 
// then flattens it into a new array.

let number = [1,2,3,4,5,6]

//  console.log(number.flatMap((x)=> x**2));

//  Here the above code the every element of array 
// is executed and given in the new array. 


// Example of nested array. 

let numbers = [4,5,5,62,8,[59,81,9741,88]];

console.log(numbers.flat(2).flatMap((x)=> x*x));

// [ 16, 25, 25, 3844, 64, 3481, 6561, 94887081, 7744 ]