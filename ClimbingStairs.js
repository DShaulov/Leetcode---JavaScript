/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const ways = [];
    ways[0] = 1;
    ways[1] = 2;
    for (let i = 2; i < n; i++) {
        ways[i] = ways[i-2] + ways[i-1];
    }
    return ways[n];
};

/**
 * ways to current = ways to previous 2 + (1 + 1) + (2)
 */