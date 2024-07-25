/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let count = 0;
    const traverse = (root, isLeftLeaf) => {
        if (!root) {
            return;
        }
        if (!root.left && !root.right && isLeftLeaf) {
            count += root.val;
            return;
        }
        traverse(root.left, true);
        traverse(root.right, false);
    }
    traverse(root, false);
    return count;
};