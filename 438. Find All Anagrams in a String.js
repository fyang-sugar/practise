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
*/

var findAnagrams = function(s, p) {
    let map1 = {}, map2 = {};
    var i=0, res=[];
    if(p.length > s.length || (p.length === s.length && p !== s)) return [];
    if(p.length === s.length && p === s) return [0];
    for(i=0; i<p.length; i++) {
        map1[p.charAt(i)] = map1[p.charAt(i)] ?  map1[p.charAt(i)]+1 :1;
        map2[s.charAt(i)] = map2[s.charAt(i)] ?  map2[s.charAt(i)]+1 :1;
    }
     if(isEqual(map1, map2)) {
            res.push(0);
     }
    
    for(i=p.length; i<s.length; i++) {
        // the left one should be forgotten
        map2[s.charAt(i- p.length)] --; 
        
        //increase map2 by one step further
        map2[s.charAt(i)] = map2[s.charAt(i)] ?  map2[s.charAt(i)]+1 :1;
        
        //Compare map1 and map2, if equal, add i-p.length
        if(isEqual(map1, map2)) {
            res.push(i - p.length +1);
        }
    }
    return res;
};

var isEqual = function(map1, map2) {
    var key;
   for( key in map1) {
       if(map2[key] !== map1[key]) {
           return false;
       }
   }
    return true;
};
