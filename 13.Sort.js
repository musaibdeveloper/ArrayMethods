// Sort method 
// Sorts the elements of an array in specific order.


let arr = ["ball", "cat", "fish", "dog", "anything"]

let sorted = arr.sort()

console.log(sorted);

// Here the abobe the elements are sorted in alphabetical order. 


let numberss =[10, 21, 13, 14, 51, 61, 71, 18, 19, 100];


// It added all 1 numbers first.



console.log(numberss.sort((a, b) => a - b));

console.log(numberss.sort((a, b) => b - a));