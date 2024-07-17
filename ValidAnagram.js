/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    const sObj = {};
    const tObj = {};
    for (let i = 0; i < s.length; i++) {
        if (!sObj[s[i]]) {
            sObj[s[i]] = 1;
        } else {
            sObj[s[i]] += 1;
        }
        if (!tObj[t[i]]) {
            tObj[t[i]] = 1;
        } else {
            tObj[t[i]] += 1;
        }
    };
    for (const letter in sObj) {
        if (!tObj[letter] || !(tObj[letter] === sObj[letter])) {
            return false;
        }
    }
    return true;
};

isAnagram("aacc", "ccac");