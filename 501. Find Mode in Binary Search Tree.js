/*
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.
Assume a BST is defined as follows:
The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
For example:  Given BST [1,null,2,2],
   1
    \
     2
    /
   2
return [2].
Note: If a tree has more than one mode, you can return them in any order.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * // inorder traverse and record the max count, use map to store the values.
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    if(!root) return [];
    let map = new Map(), prev, res=[], maxCount =0;
    helper(root, 1);
    map.forEach((key, val)=>{
        if(key === maxCount) {
            res.push(val);
        }
    });
    return res; 
    
    function helper(node) {
        if(!node) return;
        helper(node.left);
        if(prev === node.val) {
            ++count;
        }
        else {
            count=1;
        } 
        maxCount = Math.max(maxCount, count);
        map.set(node.val, count);
            
        prev= node.val;
        helper(node.right);
    }
};
