// Java script find index method.

// findindex method returns the index of the element which is satisfied the provided function.
// if the array doesn't satisfies with function then return as -1. 

let numbers = [2,4,6,8]

console.log(numbers.findIndex((x) => x % 2 == 0)); // 0

// The above condition is satisfied so, it returs the 0 

let numberss = [9,13,17,19]

console.log(numbers.findIndex((x) => x % 2 == 0)); // -1

// The elements doesn't pass the test so it returns -1. 