/*
Write a function that splits an array (first argument) into 
groups the length of size (second argument) and returns them 
as a two-dimensional array.

HINTS: Array.prototype.push() / Array.prototype.slice()
*/

// MY ORIGINAL SOLUTION USED A WHILE LOOP
function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newArray = [];
    var i = 0;
    
    while (i < arr.length) {
      newArray.push(arr.slice(i, i+size));
      i += size;
    }
    return newArray;
  }


// MY UPDATED SOLUTION USES A FOR LOOP
// This tutorial helped when I was stuck on how to get the second and subsequent slices:
// https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-chunky-monkey/16005 
// (I chose the algorithm that matched my attempt the closest)
 
function chunkArrayInGroups(arr, size) {
    var result = [];
    for (var i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i+size));
    }
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]   
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // [[0, 1], [2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); // [[0, 1, 2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // [[0, 1, 2], [3, 4, 5], [6]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[0, 1], [2, 3], [4, 5], [6, 7], [8]]