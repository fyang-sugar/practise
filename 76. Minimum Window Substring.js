/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
Example:
Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:
If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 
        1 0 0 1 0 1 0 0 0 1 1 0 1
        A D O B E C O D E B A N C
start=0,
end=0, map[A]>0, map[A]--, total--; 
end=1, map[D]--
end=2, map[O]--
end=3, map[B]>0, map[B]--, total--;
end=4, map[E]--
end=5, map[C]>0, map[C]--, total--;  total =0, now we need to move start
        0 -1 -1 0 -1 0 -1 -1 -1 0 0 0 0
        A  D  O B  E C  O  D  E B A N C
    start            end
map[start]++; since map[A] >0 total ++, continue to move end
        1 -2 -2 -1 -2 0 -2 -2 -2 -1 1 0 0
        A  D  O  B  E C  O  D  E  B A N C
          start                    end
when end point to second A, since map[A] > 0, total --; total now =0, start mvoe start
        1 -1 -1  0 -1 1 -1 -1 -1  0 1 0 1
        A  D  O  B  E C  O  D  E  B A N C
                    start          end
since map[start] > 0 total++; break, continue to move end
        0 -1 -1  0 -1 0 -1 -1 -1  0 0 -1 0
        A  D  O  B  E C  O  D  E  B A  N  C
                    start              end
 */
var minWindow = function(s, t) {
    if(t.length > s.length)  return '';
    var map = {}, minLen = s.length+1, minStr = '', total = t.length, start = 0;
    for(var i=0; i<t.length; i++) {
        map[t[i]] = map[t[i]]? map[t[i]]+1 :1;
    }
    
    for(var i=0; i<s.length; i++) {
        if(map[s[i]] !== undefined) {
            if(map[s[i]] > 0)  total--; // we find one in T, reduce one.
            map[s[i]] --;
            
            while(total === 0) {
                if(i-start+1 < minLen) {   // record length
                    minLen = i-start+1;
                    minStr = s.substring(start, i+1);
                }
                if(map[s[start]] !== undefined) {
                    map[s[start]]++;   
                    if(map[s[start]] > 0)  total ++; 
                }
                start ++;
            }
        }
    }
    return minStr;
};
