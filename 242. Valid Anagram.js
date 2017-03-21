/*
Given two strings s and t, write a function to determine if t is an anagram of s.
For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.
Note:  You may assume the string contains only lowercase alphabets.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    var map = new Array(26).fill(0), i=0, chrS, chrT;
    for(; i<s.length; i++) {
        chrS = s.charCodeAt(i) -'a'.charCodeAt(0) +1;
        chrT = t.charCodeAt(i) -'a'.charCodeAt(0) +1;
        map[chrS]++;
        map[chrT]--;
    }
    
    for(i=0; i<26;i++) {
        if(map[i] !== 0) {
            return false;
        }
    }
    return true;
};
