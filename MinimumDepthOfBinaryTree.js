
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root == null) {
        return 0;
    }
    const queue = [];
    queue.push(root);
    var depth = 1;
    while(queue[0]) {
        var node = queue.shift();
        if (!node.left && !node.right) {
            return depth;
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right)
        }
        depth++;
    }
}