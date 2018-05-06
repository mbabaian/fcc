/*
Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.
*/

function slasher(arr, howMany) {
    // var result = arr.splice(howMany);
    // return result;  
    return arr.splice(howMany);
}

console.log(slasher([1, 2, 3], 2)); // [3]
console.log(slasher([1, 2, 3], 0));  // [1, 2, 3]
console.log(slasher([1, 2, 3], 9));  // []
console.log(slasher([1, 2, 3], 4));  // []
console.log(slasher(["burgers", "fries", "shake"], 1));  // ["fries", "shake"]
console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));  // ["cheese", 4]


