/*
Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
Solve it without division and in O(n).
For example, given [1,2,3,4], return [24,12,8,6].
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 *
[a1,a2,a3,a4]

v1= [1, a1, a1*a2, a1*a2*a3]
v2= [a2*a3*a4, a3*a4, a4, 1]
v3=[1*a2*a3*a4, a1* a3*a4, a1*a2*a4, a1*a2*a3*1]
return v3;
*/

var productExceptSelf = function(nums) {
    let v1= [], v2 = [], v3 = [], i, val;
    v1[0] = 1, val =1;
    for(i=0; i<nums.length-1; i++) {
        val = val * nums[i];
        v1.push(val);
    }
    
    v2[0] = 1;
    val =1;
    for(i=nums.length-1; i>=1; i--) {
        val = val * nums[i];
        v2.unshift(val);
    }
    
    for(i=0; i<nums.length; i++) {
        v3.push(v1[i]*v2[i]);
    }
    return v3;
};
