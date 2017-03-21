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
  var count=0, res= null, flag= false;
  helper(root);
  return res;
  
  function helper(node) {
      if(node && !flag){
        helper(node.left);
        count++;
      if(count === k) {
         flag= true;
         res = node.val;
         return;
      }
      helper(node.right);
      }
     
  }
};
