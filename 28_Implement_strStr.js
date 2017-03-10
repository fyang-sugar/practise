/*
Implement strStr().
Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 * record the first element in a vector first from left to right, note the order
   compare with each position between needle and haystack
 */
var strStr = function(haystack, needle) {
    if(needle === '') return 0;
    
    var st = [], i;
    
    for(i=0; i<haystack.length; i++) {
        if(haystack[i] === needle[0]) st.push(i);
    }
    if(st.length === 0) return -1;
    
    for(i=0; i<st.length; i++) {
        if(haystack.substring(st[i], st[i] + needle.length) === needle) {
            return st[i];
        }
    }
    return -1;
};
