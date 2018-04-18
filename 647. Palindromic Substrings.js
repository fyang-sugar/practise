/*
Given a string, your task is to count how many palindromic substrings in this string.
The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
Example 1:
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    var map = {}, count= [0];
    for(var i=0; i<s.length; i++) {
        dfs(s, i, '', count);
    }
    return count[0];
};

var dfs = function(s, index, str, count) {
    if(isParlindrome(str)) count[0] ++;
    if(index === s.length)  
        return;
    dfs(s, index+1, str+s[index], count);
};

var isParlindrome = function(str) {
    if(str.length ===0) return false;
    var start = 0, end = str.length-1;
    while(start < end) {
        if(str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
};
