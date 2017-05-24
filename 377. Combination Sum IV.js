/*
Given an integer array with all positive numbers and no duplicates, 
find the number of possible combinations that add up to a positive integer target.
Example:
nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.
Therefore the output is 7.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * s[0] =1
 * s[1] = 1 
 * s[2] = s[1] + 1 =2
 * s[3] = s[2] + s[1] + 1 =4
 * s[4] = s[3] + s[2] + s[1] = 4+2+1=7
 */
var combinationSum4 = function(nums, target) {
    var dp = new Array(target+1).fill(0);
    dp[0] =1;
    var remain = 1;
    for(;remain <=target; remain++) {
        nums.forEach(function(num){
            if(remain >= num) {
                dp[remain] += dp[remain-num];
            }
        });
    }
    return dp[target];
};
