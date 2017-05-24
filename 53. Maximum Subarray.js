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
    if(!nums)  return 0;
    
    var sum = nums[0], i, maxSum=sum;
    for(i=1; i<nums.length; i++) {
        if(sum + nums[i] < nums[i]) {
            sum = nums[i];
        }
        else {
            sum = sum + nums[i];
        }
        if(maxSum < sum) {
            maxSum = sum;
        }
    }
    return maxSum;
};
