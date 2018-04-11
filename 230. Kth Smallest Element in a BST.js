/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
Note: You may assume k is always valid, 1 ≤ k ≤ BST's total elements.
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
 * @param {number} k
 * @return {number}
 * use in-order traverse, count all nodes till count  == k ,return res;
 */
var kthSmallest = function(root, k) {
    if(!root)  return null;
    var count = [0], res=[];
    inorder(root, k, count, false, res);
    return res[0];
};

var inorder = function(root, k, count, stop, res) {
    if(!root || stop)  return;
    inorder(root.left, k, count, stop, res);
    count[0]++;
    if(count[0] === k) {
        stop = true;
        res[0] = root.val;
        return;
    }
    inorder(root.right, k, count, stop, res);
};
