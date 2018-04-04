/*
A string S of lowercase letters is given. 
We want to partition this string into as many parts as possible so that each letter appears in at most one part, 
and return a list of integers representing the size of these parts.
Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
Note:
S will have length in range [1, 500].
S will consist of lowercase letters ('a' to 'z') only.
*/

/**
 * @param {string} S
 * @return {number[]}
 
 for example: abcbcae  => abcbca, e
 template = {a:2, b:2, c:2, e:1}, map = {}
 travse the string, a is new, count++, template[a]--, b is new, count++, template[b]--, c is new, count++, template[c]--;
 b is not new, template[b] -- = 0, count --;
 c is not new, template[c] -- = 0, count --;
 a is not new, template[a] -- = 0, count --; count = 0, found a partition, new partition begin, map = {}
 
 */
var partitionLabels = function(S) {
    var map = {}, template = {}, count= 0, arr = [];
    for(var i=0; i<S.length; i++) {
        template[S[i]] = template[S[i]] ? template[S[i]]+1 : 1;
    }
    for(var i=0; i<S.length; i++) {
        if(map[S[i]]) {
            template[S[i]] --;  // once do --, we check if =0, if =0, count-- then check count
            if(template[S[i]] === 0) {
                count --;
                if(count=== 0) {
                    arr.push(i+1);
                    map = {};  // end this part
                }
            } 
        } else {
            template[S[i]] --;
            map[S[i]] = 1;
            count++;
            if(template[S[i]] === 0) {
                count --;
                if(count=== 0) {
                    arr.push(i+1);
                    map = {};  // end this part
                }
            }
            
        }
    }
    var inds = [arr[0]];
    for(var i=1; i<arr.length; i++) {
        inds.push(arr[i] - arr[i-1]);
    }
    return inds;
};
