// This method creates a new array with
// all elements that pass the test implemented by
// the provided function.


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

