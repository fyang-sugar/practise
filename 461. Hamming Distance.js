/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.
Note:0 ≤ x, y < 2^31.
Example:Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
*/
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var dis = 0;
    var num = x ^ y;
    while(num >0) {
        if((num % 2) === 1) {
             dis ++;
        }
        num = num >> 1;
    }
    return dis;
};
