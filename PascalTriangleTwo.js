/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex == 0) {
        return [[1]];
    }
    let answer = [[1], [1, 1]];
    for (let i = 2; i <= rowIndex; i++) {
        let newRow = [1];
        for (let j = 1; j <= answer[i - 1].length - 1; j++) {
            newRow[j] = answer[i - 1][j - 1] + answer[i - 1][j];
        }
        newRow.push(1);
        answer.push(newRow);
    }
    return answer[answer.length - 1];
};