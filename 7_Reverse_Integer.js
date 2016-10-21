/*
Reverse digits of an integer.
Example1: x = 123, return 321
Example2: x = -123, return -321
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isPositive = 1;
    if(x<0) {
        isPositive = -1;
        x = -1 * x;
    }
    
    var val = Number(x.toString().split('').reverse().join(''));
    if(val > 2147483648) {
        return 0;
    }
    else {
        return val * isPositive;
    }
    
};
