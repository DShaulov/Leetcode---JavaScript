/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const ordered = [];
    /**
     * Top - first array
     * Righthand side starting from second from the top - last element of each array
     * Bottom side starting from second from the left - entire last array 
     * Lefthand side starting from second from the bottom - first element of each array
     */
    while (matrix.length > 0) {
        // Top
        for (let i = 0; i < matrix[0].length; i++) {
            ordered.push(matrix[0][i]);
        }
        matrix.shift();
        if (matrix.length == 0) {
            break;
        }
        // Right
        const rowLen = matrix[0].length;
        for (let i = 0; i < matrix.length; i++) {
            ordered.push(matrix[i][rowLen - 1]);
            matrix[i].pop();
        }
        matrix = matrix.filter(row => row.length > 0);
        // Bottom
        if (matrix.length == 0) {
            break;
        }
        for (let i = matrix[0].length - 1; 0 <= i; i--) {
            ordered.push(matrix[matrix.length - 1][i])
        }
        matrix.pop();
        // Left
        if (matrix.length == 0) {
            break;
        }
        for (let i = matrix.length - 1; 0 <= i; i--) {
            ordered.push(matrix[i][0]);
            matrix[i].shift();
        }
        matrix = matrix.filter(row => row.length > 0);
    }
    return ordered;
};


spiralOrder([[7],[9],[6]]);