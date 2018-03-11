/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null) return 0;
    var count = 0;
    return Depth(root, count);
};

var Depth = function(node, count) {
    if(node !== null && node.left === null && node.right === null ) {
        return count+1;
    }
    var left = (node.left !== null) ? Depth(node.left, count) : count;
    var right =(node.right !== null) ? Depth(node.right, count) : count;
    return Math.max(left, right) +1; 
};
