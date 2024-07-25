/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const sLetterObj = {};
    const tLetterObj = {};
    for (let i = 0; i < s.length; i++) {
        if (!sLetterObj[s[i]]) {
            sLetterObj[s[i]] = 1;
        } else {
            sLetterObj[s[i]] += 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (!tLetterObj[t[i]]) {
            tLetterObj[t[i]] = 1;
        } else {
            tLetterObj[t[i]] += 1;
        }
    }
    
    for (const letter in tLetterObj) {
        if (!sLetterObj[letter] || tLetterObj[letter] !== sLetterObj[letter]) {
            return letter;
        }
    }
};