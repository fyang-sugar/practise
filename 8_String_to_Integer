// Implement atoi to convert a string to an integer.

/**
 * @param {string} str
 * @return {number}
 * Integer max = 2147483647, min = -2147483648;
 */
var myAtoi = function(str) {
   var Int_Max = 2147483647, Int_Min = -2147483648;
   var res= parseInt(str);
   if(res > Int_Max) {
       return Int_Max;
   }
   else if(res < Int_Min) {
       return Int_Min;
   }
   else {
       return isNaN(res) ? 0 : res;
   }
};
