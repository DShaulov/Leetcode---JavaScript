/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const subArraySums = [];
    for (let i = 0; i < nums.length; i++) {
        subArraySums.push([]);
    };
    let maxSum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        subArraySums[i][i] = nums[i];
        if (nums[i] > maxSum) {
            maxSum = nums[i];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const previousSum = subArraySums[i][j-1];
            const newElement = nums[j];
            const newSum = previousSum + newElement;
            subArraySums[i][j] = newSum;
            if (newSum > maxSum) {
                maxSum = newSum;
            }
        }
    }
    return maxSum;
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);