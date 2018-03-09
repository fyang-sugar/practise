/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.
*/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return (nums[0] >= s) ? 1 : 0;
    // Use pointers.
    var pointA = 0, pointB = 0, sum = nums[0], minLen = nums.length +1;
    var count = 1;
    while(pointB < nums.length) {
        if(sum >= s) {
            if(count <minLen) {
                minLen = count;
            }
            sum -= nums[pointA];
            count--;
            pointA ++;
        } else {
            pointB ++;
            if(pointB === nums.length) break;
            sum += nums[pointB];
            count++;
        }
    }
    return minLen === nums.length +1 ? 0 : minLen;
};
