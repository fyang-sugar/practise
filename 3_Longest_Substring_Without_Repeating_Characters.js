/*
Given a string, find the length of the longest substring without repeating characters.
Examples:
Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var resStr = [], maxLen = 0, start=0;
    s.split('').forEach(function(c){
       // Calculate resStr length first, remove 0- original dup, push dup
        if(resStr.indexOf(c) >=0) {
            maxLen = ((resStr.length) > maxLen) ? (resStr.length) : maxLen;
            resStr = resStr.slice(resStr.indexOf(c)+1);
        }
         resStr.push(c);
    });
    
    maxLen = ((resStr.length) > maxLen) ? (resStr.length) : maxLen;
    
    return maxLen;
};
