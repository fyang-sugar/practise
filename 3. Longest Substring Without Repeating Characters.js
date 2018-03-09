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
    var pointA= 0, pointB = 0, map = {}, res= 0;
    if(s.length === 0 || s.length === 1)  return s.length;
    while(pointB < s.length) {
        if(map[s[pointB]]) {
            // keep remove pointA value from map
            if(pointB - pointA > res) {
                res = pointB - pointA ;
            }
            map[s[pointA]] --;
            pointA ++;
            
        } else {
            map[s[pointB]] = 1;
            pointB ++;
        }
    }
    if(pointB - pointA > res) {
        res = pointB - pointA;
    }
    return res;
};
