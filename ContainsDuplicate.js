/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (numObj[nums[i]]) {
            return true;
        }
        else {
            numObj[nums[i]] = 1
        }
    }
    return false;
};