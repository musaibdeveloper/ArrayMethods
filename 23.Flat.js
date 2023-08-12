// Array flat()
//  Array flat Methods returns a new array by
// converting all multidimensional array into
// single nested array or 1d array
// Example :-
// [1,2,[3,5],[3,7],4] ===> [1,2,3,5,3,7,4]
// The flat() method creates a new array by
// flattening a nested array up to the specified depth.

// array.flat(depth)
// depth	Optional.
// How deep a nested array should be flattened.
// Default is 1.


let numbers = [1,2,[45,5454,545,4487,4854,847], [454,[545,545,545.545,545,5754,],5485445,845487]]


let result = numbers.flat(2);

console.log(result);

//  Flat is also used to remove holes from an array

// Example :- [1,,3,,5] ==> [1,3,5]

const arr2 = [1, , 5, 7, 33, , 5];
console.log(arr2.flat());
// [ 1, 5, 7, 33, 5 ]