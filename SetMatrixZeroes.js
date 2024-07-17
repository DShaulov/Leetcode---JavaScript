/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if (matrix.length === 0) {
        return;
    }
    const rowToZero = [];
    const columnToZero = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                rowToZero.push(i);
                columnToZero.push(j);
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (rowToZero.includes(i) || columnToZero.includes(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};