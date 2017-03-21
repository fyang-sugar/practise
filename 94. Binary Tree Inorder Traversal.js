/*
Given a binary tree, return the inorder traversal of its nodes' values.
For example: Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,3,2].
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var res = [];
    helper(root);
    return res;
    
    function helper(node) {
        if(node) {
            helper(node.left);
            res.push(node.val);
            helper(node.right);
        }
    }
};
