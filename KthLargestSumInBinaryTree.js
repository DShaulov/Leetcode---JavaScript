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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    if (!root) {
        return -1;
    }
    const sums = [];
    const queue = [root];
    while(queue.length > 0) {
        const nodesAtLevel = queue.length;
        let currentSum = 0;
        for (let i = 0; i < nodesAtLevel; i++) {
            const currentNode = queue.shift();
            currentSum += currentNode.val;
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        sums.push(currentSum);
    }
    if (sums.length < k) {
        return -1;
    }
    sums.sort((a,b) => a - b);
    return sums[sums.length - k];
};