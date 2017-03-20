/*
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.
Input:
   1
    \
     3
    /
   2
Output:1
Explanation:The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * inorder traverse.
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let minDiff = Number.MAX_VALUE, prev;
    getDiff(root);
    return minDiff;
    
    function getDiff(node) {
        if(node) {
            getDiff(node.left);
            if(prev) {
                minDiff = Math.min(minDiff, (node.val - prev.val));
            }
            prev= node;
            getDiff(node.right);
            
        }
    }
};
