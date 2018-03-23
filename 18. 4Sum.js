/*
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
Note: The solution set must not contain duplicate quadruplets.
For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.
A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var i, j, a, b, sum, res = {};
    
    nums = nums.sort((a,b) =>  a-b);
    for(i=0; i<nums.length; i++) {
        a = nums[i];
        for(j=i+1; j<nums.length; j++) {
            b = nums[j];
            if(j+1 < nums.length) {
                var start = j+1;
                var end = nums.length-1;
                while(start < end) {
                     sum = a+b+nums[start] + nums[end];
                    if( sum === target) {
                        res[[a,b, nums[start], nums[end]]]= 1;
                        start = start+1;
                        end = end -1;
                    } else if(sum > target) {
                        end--;
                    } else {
                        start ++;
                    }
                }
            }
        }
    }
    var result = [];
    Object.keys(res).forEach(str => {
        result.push(str.split(',').map(v => +v));
    });
    return result;
};
