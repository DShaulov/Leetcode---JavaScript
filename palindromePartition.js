/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        // The single char substring is always a palindrome
        answer.push([s[i]]);
        let j = 1;
        while (true) {
            if (i - j == -1 || i + j == s.length + 1) {
                break;
            };
            if (s[i - j] == s[i + j]) {
                answer.push([s.substring(i - j, i + j + 1)]);
                j++;
            }
            else {
                break;
            }
        };
        
    };
    return answer;
};