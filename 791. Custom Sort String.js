/*
S and T are strings composed of lowercase letters. In S, no letter occurs more than once.
S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. 
More specifically, if x occurs before y in S, then x should occur before y in the returned string.
Return any permutation of T (as a string) that satisfies this property.
Example :
Input: 
S = "cba"
T = "abcd"
Output: "cbad"
Explanation: 
"a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 
 e.g: S = abcabd  T = abcdabcd
 based on T, count= [a:2 b:2, c:2, d:2]
 traver S, put out char in S order: abcabd 
 count= [a:0 b:0, c:1, d:1] left is cd
 */
var customSortString = function(S, T) {
    var count = {}, res= '';
    for(var chr of T) {
        count[chr] = count[chr]? count[chr]+1 : 1;
    }
    for(var chr of S) {
        while(count[chr] >0) {  // it's while instead of if,  !!!THE KEY
            res+= chr;
            count[chr]--;
        }
    }
    
    for(var key in count) {
        while(count[key] > 0) {
            res+= key;
            count[key]--;
        }
    }
    
    return res;
};
