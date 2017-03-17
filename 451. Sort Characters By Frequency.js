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
    let res=[], i, map= new Map(), count, tmp=[];
    let arr = s.split("").sort();
    // Use a map to record freq with char
    for(i=0;i<arr.length;i++) {
        if(!map.has(arr[i])) {
            map.set(arr[i], 1);
        }
        else {
            map.set(arr[i], map.get(arr[i])+1);
        }
    }
    // Convert map into array and sort
    map.forEach(function(key, val){
         tmp.push([key, val]);
    });
    tmp.sort(function(a, b){
        return b[0]-a[0];
    });
  
    tmp.forEach(function(pair){
        count = pair[0];
         while(count>0) {
            count--;
            res.push(pair[1]);
        }
    });
   
    return res.join('');
};
