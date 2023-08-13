// Array Includes

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr1.includes(10));

// Array Includes value in true or false
// The includes() method returns:

// true if searchValue is found anywhere within the array
// false if searchValue is not found anywhere within the array

// Array Includes check the given element is
// present in the array or not
//
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.includes(11)); // false
console.log(arr.includes(4)); // true
//  11 is not in the array so it gave false
// 4 is in the array so it gave true

// The includes() method is case sensitive. For example:

const words = ["Java", "Python", "C"];
console.log(words.includes("c")); // false
// There is no lowerCase c in the array
console.log(words.includes("C")); // true
// There is UpperCase C in the array
// 

// includes() with two Parameters

let languages = ["JavaScript", "Java", "C", "Python"];

// second argument specifies position to start the search
let check1 = languages.includes("Java", 2);

console.log(check1); // false

// the search starts from third last element 
let check2 = languages.includes("Java", -3);

console.log(check2); // true 


/*

In the above example, we have passed two argument values in the include() method.

languages.includes("Java", 2) returns false since the method doesn't find 'Java' from second index of the array.

In languages.includes("Java", -3), the method starts searching 'Java' from the third last element because of the negative argument -3.


*/
