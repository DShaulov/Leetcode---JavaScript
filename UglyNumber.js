/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n === 1 || n === 2 || n === 3 || n === 5) {
        return true;
    }
    while(true) {
        if (Number.isInteger(n / 2)) {
            n = n / 2;
            continue;
        }
        else if (Number.isInteger(n / 3)) {
            n = n / 3;
            continue;
        }
        else if (Number.isInteger(n / 5)) {
            n = n / 5;
            continue;
        }
        else {
            if (n === 1) {
                return true;
            }
            else {
                return false;
            }
        }
    }
};

isUgly(14);