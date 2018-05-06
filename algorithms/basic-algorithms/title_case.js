/*
Return the provided string with the first letter 
of each word capitalized. Make sure the rest of 
the word is in lower case.

For the purpose of this exercise, you should also 
capitalize connecting words like "the" and "of".
*/

// without regex
function titleCase(str) {

    var words = str.split(' ');
    var results = [];

    for (var i = 0; i < words.length; i++) {
        var letter = words[i].charAt(0).toUpperCase();
        results.push(letter + words[i].slice(1));
    }
    return results.join(' ');
}
  
console.log(titleCase("I'm a little tea pot"));


