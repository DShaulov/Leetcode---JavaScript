/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let reverseString = "";
    for (let i = s.length - 1; 0 <= i; i--) {
        reverseString = reverseString + s[i];
    };
    return reverseString === s;
};