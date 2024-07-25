/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineLetters = {};
    for (let i = 0; i < magazine.length; i++) {
        if (!magazineLetters[magazine[i]]) {
            magazineLetters[magazine[i]] = 1;
        } else {
            magazineLetters[magazine[i]] += 1;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (!magazineLetters[ransomNote[i]] || magazineLetters[ransomNote[i]] === 0) {
            return false;
        } else {
            magazineLetters[ransomNote[i]] -= 1;
        }
    }
    return true;
};