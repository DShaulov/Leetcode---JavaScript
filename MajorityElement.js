/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const numsObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (!numsObj[nums[i]]) {
            numsObj[nums[i]] = 1;
        } else {
            numsObj[nums[i]] += 1;
        }
    }
    const half = nums.length / 2;
    for (const key in numsObj) {
        if (numsObj[key] > half) {
            return key;
        }
    }
};

majorityElement([3,2,3]);