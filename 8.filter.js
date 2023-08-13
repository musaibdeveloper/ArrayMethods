// This method creates a new array with
// all elements that pass the test implemented by
// the provided function.

// it returns the array, with the element which is passed by the function.


const languages = [
  "JavaScript",
  "Python",
  "Ruby",
  "C",
  "C++",
  "Swift",
  "PHP",
  "Java",
  "Cojj",
  "C"
];

 let store = languages.filter((x)=>{

     return x == "Java"

})

console.log(store);

