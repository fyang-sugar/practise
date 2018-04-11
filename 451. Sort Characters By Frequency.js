/*
Given a string, sort it in decreasing order based on the frequency of characters.
Example 1:
Input: "tree"   Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
*/
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let str='', i, map= {}, count, tmp=[];
    for(i=0;i<s.length;i++) {
        map[s[i]] = map[s[i]]? map[s[i]]+1 : 1;
    }
    // Convert map into array and sort
    for(var key in map){
         tmp.push([key, map[key]]);
    }
    
    tmp.sort((a, b) => {
        if(a[1] !== b[1]) return b[1] - a[1];
        if(a[0]>b[0]) return 1;
        if(a[0]<b[0]) return -1;
        return 0;
        
    });
    for(var item of tmp) {
        count = item[1];
        while(count >0) {
            str += item[0];
            count--;
        }
    }
    return str;
};
