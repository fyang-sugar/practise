/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
For example:Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return[ [5,4,11,2],[5,8,4,5]]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(!root) return [];
    var pathes =[], path = [];
    _pathSum(root, sum, 0, pathes, path);
    return pathes;
};

var _pathSum = function(node, sum, curSum, pathes, path) {
    path.push(node.val);
    curSum += node.val;
    if(!node.left && !node.right) {
        if(curSum === sum) {
            pathes.push(path.slice());
        }
        path.pop();
        curSum =  curSum - node.val;
        return;
    }
    
    if(node.left) _pathSum(node.left, sum, curSum, pathes, path);
    if(node.right) _pathSum(node.right, sum, curSum, pathes, path);
    path.pop();
    curSum = curSum - node.val;
};

