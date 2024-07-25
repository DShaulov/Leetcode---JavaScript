/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const ranges = [];
    if (nums.length === 0) {
        return ranges;
    }
    if (nums.length === 1) {
        ranges.push(nums[0] + "");
        return ranges;
    }
    let start = 0;
    let end = 1;
    let lastHandled = false;
    while (end < nums.length) {
        if (nums[end - 1] !== nums[end] - 1) {
            if (start === end - 1) {
                ranges.push(nums[start] + "");
                if (start === nums.length - 1) {
                    lastHandled = true;
                }
                start = end;
                
            } else {
                ranges.push(nums[start] + "->" + nums[end - 1]);
                start = end;
                if (end - 1 === nums.length) {
                    lastHandled = true;
                }
            }
        }
        // Case where it is a continous range from start to end and end is the last index
        if (end === nums.length - 1 && !(start === end)) {
            ranges.push(nums[start] + "->" + nums[end]);
            lastHandled = true;
        }
        end++;
    }
    if (!lastHandled) {
        ranges.push(nums[nums.length - 1] + "");
    }
    return ranges;
};


summaryRanges([1,3]);