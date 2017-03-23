/*
Given a binary tree, return the postorder traversal of its nodes' values.
For example: Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [3,2,1].
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
var postorderTraversal = function(root) {
    var res= [];
    if(!root) return res;
    helper(root);
    return res;
    
    function helper(node) {
        if(!node) return;
        helper(node.left);
        helper(node.right);
        res.push(node.val);
    }
};
