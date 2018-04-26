/*
Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.
If there is no such window in S that covers all characters in T, return the empty string "". 
If there are multiple such minimum-length windows, return the one with the left-most starting index.
Example 1:
Input:   S = "abcdebdde", T = "bde"
Output: "bcde"
Explanation: 
"bcde" is the answer because it occurs before "bdde" which has the same length.
"deb" is not a smaller window because the elements of T in the window must occur in order.
Note:
All the strings in the input will only contain lowercase letters.
The length of S will be in the range [1, 20000].
The length of T will be in the range [1, 100].
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindow = function(S, T) {
     var i = 0, j = 0, minStr = S + '-1';
        for(var i=0; i<S.length; i++) {
            if (S[i] == T[j]) {
                j++;
                if (j == T.length) {  // reach to the end of T, find one potential subsequence, start backtracking
                    var end = i + 1;
                    j--;  // j now point to the end of the T
                    while(j >= 0) {  // move j to the -1, and i to the prev postion of which next one match the first in T
                        if(S[i] === T[j]) {
                            i--;
                            j--;
                        } else {
                            i--;
                        }
                    }
                    ++i;   // i back tracking to point to the element match the first in T
                    ++j;  // j point to 0
                    if (end - i < minStr.length) {
                        minStr = S.substring(i, end);
                    }
                }
            }
        }
        return minStr === S+'-1' ? '' : minStr;
};
