/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    const canWin = [true, true, true];
    for (let i = 3; i < n; i++) {
        canWin[i] = !(canWin[i - 1] && canWin[i - 2] && canWin[i - 3]);
    }
    return canWin[n - 1];
};

console.log(canWinNim(4));