/*
Invert a binary tree.
     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * in order traverse
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root)  return root;
    let tmp;
    invert(root);
    return root;
    
    function invert(node) {
       // get the left and right from bottom first
        node.left = invertTree(node.left);
        node.right = invertTree(node.right);
        // swap left with right
        tmp = node.left;
        node.left = node.right;
        node.right = tmp;
    }
};
