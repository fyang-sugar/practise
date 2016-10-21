/*
Given a string S, find the longest palindromic substring in S. 
You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
*/

/**
 * @param {string} s
 * @return {string}
 */
 
 var getPalindrome =function(str, index, start, end){
     var result = ''+str[index];
     while(start >=0 && end<str.length) {
         if(str[start] === str[end]) {
             result = str.slice(start, end+1);
             start--;
             end ++;
         }
         else {
             break;
         }
     }
     return result;
 };
 
 var longestPalindrome = function(s) {
    var longest = '';
    
    for(var i=0; i<s.length; i++) {
        // s[i] as center
        var p1 = getPalindrome(s, i, i-1, i+1);
        if(longest.length < p1.length) {
            longest=p1;
        }
        
        // s[i] & s[i+1] as center
        var p2 = getPalindrome(s, i, i, i+1);
        if(longest.length < p2.length) {
            longest=p2;
        }
    }
    return longest;
};
