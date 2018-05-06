/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, 
a factorial is the product of all positive integers 
less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

function factorialize(num) {
    // return 1 if num = 0
    if (num === 0) {
        return 1;
    }
    
    else {
        var array = [];
        
        // complete array with range from 1 to num
        for (var i = 1; i <= num; i++) {
            array.push(i);        
        }
    
        // use reduce to get factor of num
        var answer = array.reduce(function(a, b) {
            return a * b;
        });
    }
    return answer;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));
