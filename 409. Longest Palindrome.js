/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
This is case sensitive, for example "Aa" is not considered a palindrome here.
Note:
Assume the length of given string will not exceed 1,010.
Example:
Input:
"abccccdd"
Output:
7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // find the biggest odd number and all the even numbers, sum is the answer
    var map = new Map(), count = 0, odd = false;
    for(var i =0; i<s.length; i++) {
        map.set(s[i], (map.get(s[i])+1 || 1));
    }
   for (var [key, value] of map) {
        if(value % 2 === 0) {
            count += value;
        }
        else {
            count += value -1;
            odd = true;
        }
    }
    return odd ? count+1 : count;
};
