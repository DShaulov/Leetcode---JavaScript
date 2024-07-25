/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const answer = [];
    for (let i = 0; i < n; i++) {
        let count = 0;
        let num = i;
        while (0 < num) {
            if (num % 2 === 1) {
                count++;
            };
            num = num >> 1;
        }
        answer.push(count);
    }
    return answer;
};


console.log(countBits(5));