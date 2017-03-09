/**
 * @param {string[]} strs
 * @return {string}
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * ['abcd','abccc','abdec'] --> common prefix is 'ab'
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    var same =  strs[0];
    var i, j, str;
    for (i=1; i<strs.length; i++) {
        str = strs[i];
        // Compare str with same, if equal. process, otherwise, break.
        for (j=0;j<same.length;j++) {
            if(str.charAt(j) !== same[j]) {
                break;
            }
        }
        //Slice same to make new slice
        same = same.slice(0, j);
    }
    return same;
};
