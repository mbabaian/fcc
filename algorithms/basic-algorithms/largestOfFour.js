/*
Return an array consisting of the largest number from each 
provided sub-array. For simplicity, the provided array will 
contain exactly 4 sub-arrays.
*/

function largestOfFour(arr) {
    var results = [];

    // iterate through main array
    for (var i = 0; i < arr.length; i++) {
        var largestNum = 0;
        // iterate through individual arrays
        for (var j = 0; j < arr[i].length; j++) {
            // compare current number to previous largest number
            if (arr[i][j] > largestNum) {
                largestNum = arr[i][j];
            }
        }
        results[i] = largestNum;      
    }
    return results;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [ 5, 27, 39, 1001 ]
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [27,5,39,1001]
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])); // [9, 35, 97, 1000000]