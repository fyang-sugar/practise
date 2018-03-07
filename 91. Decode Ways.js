/*
A message containing letters from A-Z is being encoded to numbers using the following mapping:
'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message containing digits, determine the total number of ways to decode it.
For example,
Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
The number of ways decoding "12" is 2.
*/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s.length === 0) return 0;
    
    prev0 = s[0] === '0' ? 0 : 1;
    if(s.length === 1) return prev0;
    prev1 = 0;
    if((s[0] === '1') || (s[0] ==='2' && s[1] <= '6')) prev1+=1;
    if(s[0]!=='0' && s[1]!=='0')       prev1++;
    
    for(var i=2; i<s.length; i++) {
        var temp = 0;
        if(s[i] !== '0') {
            temp += prev1;
        } 
        if((s[i-1] === '1')  || (s[i-1] ==='2' && s[i] <= '6')) {
            temp += prev0;
        }
        prev0 = prev1;
        prev1 = temp;
        
    }
    return prev1;
};
