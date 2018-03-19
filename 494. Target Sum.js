/*
You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
Find out how many ways to assign symbols to make sum of integers equal to target S.
Example 1:
Input: nums is [1, 1, 1, 1, 1], S is 3. 
Output: 5
Explanation: 
-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3
There are 5 ways to assign symbols to make the sum of nums be target 3.
*/

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    var count= [0];
    dfs(-1, 0, nums, S, count);
    return count[0];
};

var dfs = function(level, sum, nums, S, count) {
    if(level === nums.length-1) {
        if(sum === S) count[0]++;
        return;
    }
    dfs(level+1, sum + nums[level+1], nums, S, count);
    dfs(level+1, sum - nums[level+1], nums, S, count);
    return;
}



