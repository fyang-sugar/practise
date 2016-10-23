/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var flag = 1, divider = 1;
    if(x<0) {
       return false;
    }
    
    //find out how many digit it has
    while(parseInt(x/divider) >= 10) {
        divider *= 10;
    }
    
    // Get the highest and lowest digit and compare
    while(divider > 1) { // Only when digit > 10 we need to check.
        var right  = parseInt(x / divider);
        var left  = x % 10;

        if(right !== left) {
            return false;
        }
        x = parseInt((x % divider) / 10);
        divider = parseInt(divider / 100);
    }
    return true;
};
