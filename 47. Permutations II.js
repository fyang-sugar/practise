/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.
For example,
[1,1,2] have the following unique permutations:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var res = [];
    nums.sort((a, b) => a-b);  // remmeber to sort
    dfs(nums, res, [], [], null);
    return res;
};

var dfs = function(nums, res, cur, used, prevNum) {
    if(cur.length === nums.length) {
        res.push(cur.slice(0));
        return;
    }
    
    for(var i=0; i<nums.length; i++) {
        if(!used[i]) {
            if(nums[i] === prevNum) continue;
            prevNum = nums[i];
            used[i] = true;
            cur.push(nums[i]);
            dfs(nums, res, cur, used);
            used[i] = false;
            cur.pop();
            
        }
    }
};
