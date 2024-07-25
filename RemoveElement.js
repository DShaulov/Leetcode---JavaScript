/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length < 3) {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                count++;
            }
        }
        return nums.length - count;
    }
    let end = nums.length - 1;
    let start = 0;
    let found = 0;
    while (true) {
        if (start === end) {
            return nums.length - found;
        }
        if (nums[start] === val) {
            while (nums[end] === val) {
                end--;
                found++;
                if (end == start) {
                    return nums.length - found;
                }
            }
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            end--;
            found++;
        }
        start++;
    }
};


console.log(removeElement([3,3], 3));