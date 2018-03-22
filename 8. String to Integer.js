// Implement atoi to convert a string to an integer.
/**
 * @param {string} str
 * @return {number}
  Integer max = 2147483647, min = -2147483648;
 */
var myAtoi = function(str) {
    var flag = true;
    str = str.trim();
    if(str.length === 0) return 0;
    var i=0, sum=0;
    if(str[0] === '+' || str[0] === '-')  {
         flag = str[0] === '-' ? false : true;
         i++;
    }
    if(isNaN(str[i]))  
          return 0;
    
    while(str[i] <= '9' && str[i] >= '0' && i< str.length) {
          sum = sum * 10 + parseInt(str[i++]);
    }
       
    if(flag) {
        if(sum > 2147483647)  return 2147483647;
        else return sum;
    } else {
        if(sum > 2147483648)  return -2147483648;
        else return -1*sum;
    } 
};
