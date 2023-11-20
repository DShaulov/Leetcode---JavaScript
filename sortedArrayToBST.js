import TreeNode from './treeNode';

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length == 0) {
        return null;
    }
    if (nums.length == 1) {
        return new TreeNode(nums[0]);
    }
    let middleIndex = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[middleIndex])
    root.left = sortedArrayToBST(nums.slice(0, middleIndex));
    root.right = sortedArrayToBST(nums.slice(middleIndex + 1, nums.length))
    return root;
};