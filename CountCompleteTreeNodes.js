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
var countNodes = function(root) {
    if (root === null) {
        return 0;
    }
    let totalCount = 0;
    // Get max depth of left
    let iter = root.left;
    let leftDepth = 0;
    while(iter) {
        leftDepth++;
        iter = iter.left;
    }
    // Add nodes of levels before the leaf level to the count
    for (let i = 0; i < leftDepth; i++) {
        totalCount += Math.pow(2, i);
    }
    console.log(totalCount);
    // Get max depth of right
    let rightDepth = 0;
    iter = root.right;
    while(iter) {
        rightDepth++;
        iter = iter.left;
    };
    const visit = (root) => {
        if (!root) {
            return;
        }
        if (root.left === null && root.right === null) {
            totalCount++;
            return;
        }
        visit(root.left);
        visit(root.right);
    }
    // If equal, count leaves on right subtree
    if (leftDepth === rightDepth) {
        visit(root.right);
        // Add the leaves of the left subtree (2^h) / 2
        totalCount += Math.pow(2, leftDepth - 1)
    }
    // If not equal, count leaves on left subtree
    else {
        visit(root.left);
    }
    return totalCount;
};