/*
Given a column title as appear in an Excel sheet, return its corresponding column number.
For example:
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
*/
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var i, sum=0;
    for(i=0;i<s.length;i++) {
        sum = sum*26 + s.charCodeAt(i) - 'A'.charCodeAt(0) +1;
    }
    return sum;
};
