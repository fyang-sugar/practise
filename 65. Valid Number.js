/*
Validate if a given string is numeric.
Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
*/

/**
 * @param {string} s
 * @return {boolean}
 number is represented as:
   (+/-)(float)(e)(+/-)(Int), check each part rigoriously
 */
var isNumber = function(s) {
    s = s.trim();
    var point = 0, digit=0, dot=0;
    if(s[0] === '+' || s[0] === '-') point ++;
    while((isNumber(s[point]) || s[point] === '.') && point < s.length) {
        if(isNumber(s[point])) digit++;
        if(s[point] === '.') dot++;
        point++;
    }
    if(digit <=0 || dot > 1) {
        return false;
    }
    //check e part
    if(s[point] === 'e') {
        point ++;
        if(s[point] === '+' || s[point] === '-'){
            point ++;
        }
        if(point === s.length) return false;
        while(isNumber(s[point])) {
            if(isNumber(s[point])) {
                point++;
            }
            else {
                return false;
            }
        }
    }
    return point === s.length;
};

var isNumber = function(c) {
    if(!isNaN(c) && c!==' ') {
        return true;
    }
    return false;
}
