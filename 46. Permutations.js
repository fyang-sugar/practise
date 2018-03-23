/*
Given a collection of distinct numbers, return all possible permutations.
For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var res = [];
    dfs(nums, res, [], []);
    return res;
};

var dfs = function(nums, res, cur, used) {
    if(cur.length === nums.length) {
        res.push(cur.slice(0));
        return;
    }
    
    for(var i=0; i<nums.length; i++) {
        if(!used[nums[i]]) {
            used[nums[i]] = true;
            cur.push(nums[i]);
            dfs(nums, res, cur, used);
            used[nums[i]] = false;
            cur.pop();
        }
    }
}
