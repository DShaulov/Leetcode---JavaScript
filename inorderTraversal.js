import TreeNode from './treeNode';

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let answer = [];
    let dfs = function(root) {
        if (root == null) {
            return;
        }
        answer.push(root.val);
        dfs(root.left);
        dfs(root.right);
    };
    dfs(root);
    return answer;
}