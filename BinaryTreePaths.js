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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = [];
    if (!root) {
        return paths;
    }
    const explore = (root, path) => {
        path = path + "->" + root.val;
        if (!root.left && !root.right) {
            paths.push(path);
            return;
        }
        if (root.left) {
            explore(root.left, path);
        }
        if (root.right) {
            explore(root.right, path);
        }

    };
    const path = "" + root.val;
    if (!root.left && !root.right) {
        paths.push(path);
    }
    if (root.left) {
        explore(root.left, path);
    }
    if (root.right) {
        explore(root.right, path);
    }
    return paths;
};