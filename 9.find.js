// Find array method is used to find or serach the value in the array.
// Any value which found, is return by the array, IF NOT found then output its undefined.

// Java script is case sensitive. 


let arr = ["musaib" , "saboor", "shoail", "sakina"]


let store = arr.find((x)=>{
   return x === "musaib"

})

console.log(store);
