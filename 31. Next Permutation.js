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
   687321  find 6 is the place where nums[i+1] > nums[i], mark it as point
   from right to left, find the first larger number then 6, which is 7
   swap 6 with 7, changed to 786321 
   then from point to end reverse 86321
   
 */
var nextPermutation = function(nums) {
    var point, st= [], tobeSwapped, swap, temp;
    for(var i=nums.length-1; i>=1; i--) {
        if(nums[i] > nums[i-1]) {
            point = i-1;    // find 6
            break;
        }
    }
    if(point === undefined) {
        nums.sort((a, b) => a-b);
        return;
    }
    
    swap = nums[point];
    for(var i=nums.length-1; i>=0; i--) {
        if(nums[i] > swap) {
            tobeSwapped = i;    // find 7
            break;
        }
    }
    temp = nums[point];    // swap 6 with 7
    nums[point] = nums[tobeSwapped];
    nums[tobeSwapped] = temp;
    
    var start = point+1;
    var end = nums.length-1;
    while(start < end) {
        temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start ++;
        end --;
    }
    return;
};
