let arr = [2,4,6,8,10,13]
let check = arr.every((x) => {


    return x%2 === 0;


})

// console.log(check);
//  Here in code x is the parameter. 
// every methods returns the output value in Boolean Values. 

let fruits = ["Apple", "Mango", "Grapes", "Water", "Kiwi"]

let store = fruits.every((x)=>{
    x=== "kiwi"
})

console.log(store);
