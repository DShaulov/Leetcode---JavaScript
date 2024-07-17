/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const letterMapping = {};
    for (let i = 0; i < t.length; i++) {
        if (!letterMapping[s[i]]) {
            for (const letter in letterMapping) {
                if (letterMapping[letter] === t[i]) {
                    return false;
                }
            }
            letterMapping[s[i]] = t[i];
        } else {
            if (letterMapping[s[i]] != t[i]) {
                return false;
            }
        }
    }
    return true;
};

isIsomorphic("baba", "badc");