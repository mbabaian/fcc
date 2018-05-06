// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWord(str) {

    // split string into individual words
    var strSplit = str.split(' ');

    // set the counter to zero
    var longestWord = 0;

    // iterate through string, get length of each word
    for (var i = 0; i < strSplit.length; i++) {
        if(strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
       }
     }

    // return length of longest word
    return longestWord;
 } 

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWord("May the force be with you")); // 5
console.log(findLongestWord("Google do a barrel roll")); // 6
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow")); // 8
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology")); // 19 