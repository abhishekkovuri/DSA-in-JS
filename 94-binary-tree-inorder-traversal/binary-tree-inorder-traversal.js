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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const result = [];
    const stack = [];
    let current = root;

    while (current || stack.length) {
        // Go left as far as possible
        while (current) {
            stack.push(current);
            current = current.left;
        }

        // Process the node
        current = stack.pop();
        result.push(current.val);

        // Go right
        current = current.right;
    }

    return result;
};