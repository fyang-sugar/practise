/*
Given a list of non-negative numbers and a target integer k, write a function to check if the array has
a continuous subarray of size at least 2 that sums up to the multiple of k, that is, sums up to n*k where n is also an integer.
Example 1:  Input: [23, 2, 4, 6, 7],  k=6  Output: True
Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.
Example 2:   Input: [23, 2, 6, 4, 7],  k=6   Output: True
Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
   for(var i=0; i<nums.length; i++) {
        if(dfs(i+1, nums, nums[i], k)) return true;
    }
    return false;
};

var dfs = function(index, nums, sum, k) {
    if(index === nums.length)  return false;
    if(sum + nums[index] === k || (sum + nums[index] ) % k === 0)  return true;
    if(dfs(index+1, nums, sum + nums[index], k))  return true;
    return false;
};
