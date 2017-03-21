/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
Note: You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * 
0, 1, 0, 3, 12
x, y point to 0
y always point to the first 0 element, in xy range there is always 0
0, 1, 0, 3, 12
x
y
0, 1, 0, 3, 12
   x
y
1, 0, 0, 3, 12
   x
   y
1, 0, 0, 3, 12
         x
   y   
1, 3, 0, 0, 12
         x
      y
1, 3, 0, 0, 12
             x
      y  
1, 3, 12, 0, 0
             x
          y      
*/

var moveZeroes = function(nums) {
    var x =0 , y=0;
    while(x<nums.length) {
        if(nums[x] !== 0) {
            // swap x, y,
             tmp = nums[x];
             nums[x] = nums[y];
             nums[y] = tmp;
             y++;
        }
        x++;
    }
    return;
    
};
