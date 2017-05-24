/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
Example:Given nums = [-2, 0, 3, -5, 2, -1]
sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.
*/

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i>j) return 0;
    if(i==j)  return this.nums[i];
    var k=i+1, sum=this.nums[i];
    for(; k<=j; k++) {
        sum += this.nums[k];
    }
    return sum;
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
