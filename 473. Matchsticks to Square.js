/*
Remember the story of Little Match Girl? By now, you know exactly what matchsticks the little match girl has, 
please find out a way you can make one square by using up all those matchsticks. You should not break any stick, 
but you can link them up, and each matchstick must be used exactly one time.
Your input will be several matchsticks the girl has, represented with their stick length. 
Your output will either be true or false, to represent whether you could make one square using all the matchsticks 
the little match girl has.
Example 1:  Input: [1,1,2,2,2]   Output: true
Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
Example 2:   Input: [3,3,3,3,4]   Output: false
Explanation: You cannot find a way to form a square with all the matchsticks.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 
                                        []
          /                   |                      |                      \
       a[0] ...            .a[0]..                 ..a[0].                   ...a[0]
  /    |   |     \       /    |   |     \      /    |   |     \          /    |   |     \
a[0]   .   .      .   a[1]   a[0]  .      .   .   a[1]  a[0]     .      .     .  a[1]  a[0]     
+a[1]
...

once we have sum1, sum2, sum3, sum4 === len, we find one, if there is any sum1-4 > len, stop search from this oppssibility
 */
var makesquare = function(nums) {
    if(nums.length ===0 ) return false;
    var sum = nums.reduce((total, item) => {
        return total + item;
    }, 0);
    nums.sort((a, b) => {
        if(a > b) return -1;
        if(a < b) return 1;
        return 0;
    });
    if(sum % 4 !== 0)  return false;
     var len = sum / 4;
    return dfs(0, 0, 0, 0, 0, nums, len);
};

var dfs = function(sum1, sum2, sum3, sum4, index, nums, len) {
    if(sum1 > len || sum2 > len || sum3 > len || sum4 > len)  return false;
    if(index === nums.length) {
        if(sum1 === len || sum2 === len || sum4 === len || sum4 === len)  return true;
    }
    return dfs(sum1+nums[index], sum2, sum3, sum4, index+1, nums, len) ||
           dfs(sum1, sum2+nums[index], sum3, sum4, index+1, nums, len) ||
           dfs(sum1, sum2, sum3+nums[index], sum4, index+1, nums, len) ||
           dfs(sum1, sum2, sum3, sum4+nums[index], index+1, nums, len);
};
