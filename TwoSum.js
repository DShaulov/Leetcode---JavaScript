/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numObj = {};
    for (let i = 0; i < nums.length; i++) {
        numObj[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        if (numObj[target - nums[i]] && numObj[target - nums[i]] != i) {
            return [i, numObj[target - nums[i]]]
        }
    }
};

console.log(twoSum([1,3,4,2], 6));