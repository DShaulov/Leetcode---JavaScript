/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (triangle.length == 1) {
        return triangle[0][0];
    }
    let answer = [];
    for (let i = 0; i < triangle.length; i++) {
        answer.push([]);
    };
    answer[0][0] = triangle[0][0];
    answer[1][0] = answer[0][0] + triangle[1][0];
    answer[1][1] = answer[0][0] + triangle[1][1];
    for (let i = 2; i < answer.length; i++) {
        answer[i][0] = answer[i-1][0] + triangle[i][0];
        answer[i][i] = answer[i-1][i-1] + triangle[i][i];
    }
    for (let i = 2; i < triangle.length; i++) {
        for (let j = 1; j < triangle[i].length - 1; j++) {
            answer[i][j] = Math.min(answer[i-1][j], answer[i-1][j-1]) + triangle[i][j];
        }
    };
    let min = Math.min(answer[answer.length - 1]);
    return Math.min(...answer[answer.length - 1]);
};

minimumTotal([[2], [3,4], [6, 5, 7], [4, 1, 8, 3]]);