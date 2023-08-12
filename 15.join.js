// Array Join() Method

// The join() method returns a new string by
// concatenating all of the elements in an array,
//  separated by a specified separator.

// Adds all the elements of an array into a string, separated by the specified separator string.

//  A string used to separate one element of the array from the next in the resulting string.
//  If omitted, the array elements are separated with a comma.

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array1.join());

// 1,2,3,4,5,6,7,8,9,10

console.log(arr.join());
// 1,2,3,4,5,6,7,8,9,10

console.log(arr.join(""));
// 12345678910

console.log(arr.join(" | "));
// 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const arr2 = ["Java", "C", "C++"];
console.log(arr2.join(" "));
// Java C C++

console.log(arr.join("+"));
// 1+2+3+4+5+6+7+8+9+10
