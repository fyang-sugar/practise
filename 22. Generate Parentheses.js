/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
For example, given n = 3, a solution set is:
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = [];
    var traverse = function(left, right, str) {
        if(left < right) {
            return;
        }
        if(left ===n && right === n) {
            res.push(str);
            return;
        }
        if(left > right && left === n) {
            traverse(left, right+1, str+')');
            return;
        }
        traverse(left+1, right, str+'(');
        traverse(left, right+1, str+')');
    };
    traverse(0, 0, '');
    return res;
    
};
