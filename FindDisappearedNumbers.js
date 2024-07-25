/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let maxVal = 0;
    const numSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        numSet.add(nums[i]);
        if (nums[i] > maxVal) {
            maxVal = nums[i];
        }
    }
    const answer = [];
    for (let i = 1; i <= maxVal; i++) {
        if (!numSet.has(i)) {
            answer.push(i);
        }
    }
    return answer;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1])