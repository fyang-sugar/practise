/*
Find the sum of all left leaves in a given binary tree.
Example:
    3
   / \
  9  20
    /  \
   15   7
There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *in-order traverse, mark left branch as true;
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(!root) return 0;
    var sum =0;
    helper(root, false);
    return sum;
     
    function helper(node, isleft) {
        if(!node) return;
        helper(node.left, true);
        if(node && !node.left && !node.right) {
            sum += isleft ? node.val : 0;
        }
        helper(node.right, false);
    }
};
