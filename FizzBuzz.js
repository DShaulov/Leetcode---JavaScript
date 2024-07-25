/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const output = [];
    for (let i = 1; i <= n; i++) {
        let string = "";
        if (i % 3 === 0) {string = string + "Fizz"};
        if (i % 5 === 0) {string = string + "Buzz"};
        if (string.length === 0) {
            output.push(i + "");
        } else {
            output.push(string);
        }
    }
    return output;
};


console.log(fizzBuzz(15));