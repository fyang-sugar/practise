/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
The replacement must be in-place, do not allocate extra memory.
Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * check if all nums[i] > nums[i+1]  if so, resort the array and return the result
   otherwise, find the i where nums[i] > nums[i+1], point  = i, find the min larger number then nums[i] in the array and swap it with the nums[point],
   687321   - 786321  sort 
 */
var nextPermutation = function(nums) {
    var point, st= [], tobeSwapped, swap, temp, sub;
    for(var i=nums.length-1; i>=1; i--) {
        if(nums[i] > nums[i-1]) {
            point = i-1;
            break;
        }
    }
    if(point === undefined) {
        nums.sort((a, b) => a-b);
        return;
    }
    
    swap = nums[point];
    for(var i=nums.length-1; i>=0; i--) {
        if(nums[i] > swap && !tobeSwapped) {
            tobeSwapped = i;
            break;
        }
    }
    temp = nums[point];
    nums[point] = nums[tobeSwapped];
    nums[tobeSwapped] = temp;
    
    sub = nums.slice(point+1, nums.length).sort((a, b) => a-b);
    var i= nums.length-1;
    while(i > point) {
        nums.pop();
        i--;
    }
    while(sub.length > 0) {
        nums.push(sub.shift());
    }
    return;
};
