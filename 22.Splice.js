// Array method "splice."

/*
splice() method changes the contents of an
array by removing or replacing existing
elements and/or adding new elements in place.

//splice method is used to modify (insert,delete) the array from the middle.

The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.
array.splice(index, howmany, item1, ....., itemX)


// 1st Parameter = what to remove index
// 2nd parameter = delete count starts from 1
// 3rd parameter = elements you want to add

*/

let names = ["musaib", "owais", "abrar", "muqeem"]

names.splice        (1,                                        2,                    "naveed");
                    //  The position to add/remove items.     howmany(end)	          New elements(s) to be added.



console.log(names); // ['musaib" , "naveed", "muqeem"]


