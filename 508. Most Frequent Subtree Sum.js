/*
Given the root of a tree, you are asked to find the most frequent subtree sum. 
The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). 
So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.
Examples 1  Input:
  5
 /  \
2   -3
return [2, -3, 4], since all the values happen only once, return all of them in any order.
Examples 2  Input:
  5
 /  \
2   -5
return [2], since 2 happens twice, however -5 only occur once.
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


var findFrequentTreeSum = function(root) {
    let map = new Map(), res=[], max_V = 0;
    if(!root || root.length === 0) return [];
    getNodeSum(root);
    //store sum for each node in map with its occurances
     map.forEach((val, key)=>{
         if(val > max_V) {
             max_V = val;
         }
      });
     
      map.forEach((val, key)=>{
         if(val === max_V) {
            res.push(key);
        }
      });
      
    return res;
    
    function getNodeSum(node) {
        if(!node) return 0;
        let sum = node.val;
        sum += getNodeSum(node.left);
        sum += getNodeSum(node.right);
        if(map.has(sum)) {
            map.set(sum, map.get(sum)+1);
        }
        else {
            map.set(sum, 1);
        }
        return sum;
    
    }
};
