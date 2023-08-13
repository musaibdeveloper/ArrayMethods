// The map method returns a new array by applying 
// the callback function on each element of an array

let numbers = [1,2,3,4,5,6]

const result = numbers.map((numbers) => {
    return numbers * numbers * numbers + numbers
});

console.log(result);

// Map function takes the call function and execute every single element of array.