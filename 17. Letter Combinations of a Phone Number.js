/*
Given a digit string, return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below.
Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

var res;
var letterCombinations = function(digits) {
    if(digits.length === 0)  return [];
    var phones= [[], [], ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];
    res = [];
    dfs(0, digits.length, '', digits, phones);
    return res;
};

var dfs = function(level, l, str, digits, phones) {
    if( level === l) {
        // Reach to the end
        res.push(str);
        return;
    }
    var ind = digits[level];  // get number first to get related phone array
    for (var chr of phones[ind]) {
         dfs(level + 1, l, str + chr, digits, phones);
    }
};
