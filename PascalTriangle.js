/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows == 1) {
        return [[1]];
    }
    let answer = [[1], [1, 1]];
    for (let i = 2; i < numRows; i++) {
        let newRow = [1];
        for (let j = 1; j <= answer[i - 1].length - 1; j++) {
            newRow[j] = answer[i - 1][j - 1] + answer[i - 1][j];
        }
        newRow.push(1);
        answer.push(newRow);
    }
    return answer;
};