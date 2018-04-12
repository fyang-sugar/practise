/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxEndingHere = nums[0];
    var maxsoFar = maxEndingHere;
    for(var i=1; i<nums.length; i++) {
        maxEndingHere = Math.max(maxEndingHere+nums[i], nums[i]);
        maxsoFar = Math.max(maxsoFar, maxEndingHere);
    }
    return maxsoFar;
};
