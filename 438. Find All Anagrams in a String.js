/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
The order of output does not matter.
Example 1:
Input:
s: "cbaebabacd" p: "abc"
Output:
[0, 6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:
Input:
s: "abab" p: "ab"
Output:
[0, 1, 2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

how to check if two arrays are the same, do a delta array and get the sum of each abs(element), if sum=0. the arrays are the same
*/

var findAnagrams = function(s, p) {
    var delta = {}, res = [], i;
    for( i=0; i<p.length; i++) {
        delta[p[i]] = delta[p[i]] ? delta[p[i]]-1 : -1;
        delta[s[i]] = delta[s[i]] ? delta[s[i]]+1 : 1;
    }
    if(isAnagram(delta))  res.push(0);
    for( i=p.length; i<s.length; i++) {
        delta[s[i]] = delta[s[i]] ? delta[s[i]]+1 : 1;
         delta[s[i-p.length]] =  delta[s[i-p.length]]-1;
          if(isAnagram(delta)) {
              res.push(i- p.length +1); 
          }
    }
    return res;
};

var isAnagram = function(delta) {
    var sum = 0;
    for(var key in delta) {
        sum+= Math.abs(delta[key]);
    }
    return sum === 0;
};
