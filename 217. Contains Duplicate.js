/*
Given an array of integers, find if the array contains any duplicates. 
Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var map = {};
    for(var i=0; i<nums.length; i++) {
        map[nums[i]] = map[nums[i]] ? map[nums[i]]+1 : 1;
    }
    for(var key in map) {
        if(map[key] >=2) {
            return true;
        }
    }
    return false;
};
