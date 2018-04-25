/*
Given a string, find the length of the longest substring T that contains at most k distinct characters.
For example, Given s = “eceba” and k = 2,
T is "ece" which its length is 3.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if(s.length === 0)  return 0;
    var start= 0, maxLen = 0, count=0, map = {};
    for(var i=0; i<s.length; i++) {
        if(!map[s[i]]) {
            map[s[i]] = 1;
            count++;
            if(count > k) {
                maxLen = Math.max(maxLen, i-start);
                while(count > k) {
                    map[s[start]]--;
                    if(map[s[start]] === 0)  count--;
                    start++;
                }
            }
        } else {
            map[s[i]] ++;
        }
    }
    maxLen = Math.max(maxLen, i-start);  // Don't forget the last one
    return maxLen;
};
