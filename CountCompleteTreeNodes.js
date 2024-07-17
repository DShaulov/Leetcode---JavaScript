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
    let maxDepth = 0;
    let exploreMax = root;
    while(exploreMax) {
        maxDepth += 1;
        exploreMax = exploreMax.left;
    };
    let exploreSubRight = root.left;
    let leftSubtreeMaxDepth = 1;
    while(exploreSubRight) {
        leftSubtreeMaxDepth += 1;
        exploreSubRight = exploreSubRight.right;
    };
    let counter = 0;
    if (leftSubtreeMaxDepth === maxDepth) {
        counter = Math.pow(2, maxDepth);
    } else {

    }
    return counter;

};