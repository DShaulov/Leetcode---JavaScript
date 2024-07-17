/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const previousSquares = new Set();
    while(true) {
        const numAsString = n + "" ;
        let squareSum = 0;
        for (let i = 0; i < numAsString.length; i++) {
            const num = parseInt(numAsString[i]);
            squareSum += (num*num);
        };
        if (squareSum === 1) {
            return true;
        };
        if (previousSquares.has(squareSum)) {
            break;
        }
        previousSquares.add(squareSum);
        n = squareSum;
    };
    return false;
};

isHappy(19);