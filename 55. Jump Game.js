/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.
For example:
A = [2,3,1,1,4], return true.
A = [3,2,1,0,4], return false.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length ===1) return true;
    if(nums[0] === 0)  return false;
    var max = nums[0];
    var i=1;
    for(; i<nums.length-1; i++) {
        max = Math.max(max, (nums[i] + i));
        // for example, [1,0,1,0]  state[1] = max(1, 0+1), can not cross
        if(max <= i && i<nums.length-1) {
            return false;
        }
    }
    return true;
   
    
};
