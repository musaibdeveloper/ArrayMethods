// : This method fills all the elements of an
// array from a start index to an end index with a
// static value. It can take up to three arguments:
// the value to fill with, the start index, and the
// end index.


let fruits = ["Apple", "mango", "water","grapes", "kiwi","anything"]
                // 0      1        2       3         4       5
let result = fruits.fill("banana",        2,      4);
// parameters           (Required value    Start   end)

console.log(result);

// The end index is not filled because it always end-1.
// The above code is for filling the array with the required or mentioned string the function parameter.



