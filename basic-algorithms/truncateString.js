/*
Truncate a string (first argument) if it is longer than the given maximum 
string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, 
then the addition of the three dots does not add to the string length in 
determining the truncated string.
*/

// MY ORIGINAL SOLUTION
function truncateString(str, num) {
    if (str.length > num && num > 3) {
      return str.slice(0, (num - 3)) + '...';
    }
    else if (str.length > num && num <= 3) {
      return str.slice(0, num) + '...';
    }
    else {
    return str;
    }
  }


// MY UPDATED SOLUTION ONE YEAR LATER
function truncateString(str, num) {
    
    // if num is less than or equal to 3, return string and add "..."
    if (num <= 3) {
        return str.slice(0, num) + "...";
    }
    
    // if length of string is longer than num less three chars and add "..." 
    else if (str.length > num) {
        return str.slice(0, num-3) + "...";
    }

    // otherwise return the string and add "..."
    else {
        return str;
    }  
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11)); // "A-tisket..."
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14)); // "Peter Piper..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // "A-tisket a-tasket A green and yellow basket"
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); // "A-tisket a-tasket A green and yellow basket"
console.log(truncateString("A-", 1));  // "A..."
console.log(truncateString("Absolutely Longer", 2));  // "Ab..."