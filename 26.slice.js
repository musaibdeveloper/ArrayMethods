// Array slice method :

// Slice cuts the array and give a new array. 
// It take few parametes to operate 

// Start parameters is from 0
// End parameter is from 1.

const numbers=[1,2,3,4,5,10];

console.log(numbers.slice(2 , 5 )) // [3,4,5]


let languages = ["JavaScript", "Python", "C", "C++", "Java"];
        //            1           2       3     4      5 
console.log(languages.slice(0, 2));


// Negative value .

// To remove only the last value. 

console.log(languages.slice(0,-3));

//  The index of the last element is -1, 
// the index of the second last element is -2, and so on.

// BY giving the negative values you can remove the elements from left to right. 