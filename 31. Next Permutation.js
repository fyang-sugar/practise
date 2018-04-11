/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * check if all nums[i] > nums[i+1]  if so, resort the array and return the result
   otherwise, find the i where nums[i] > nums[i+1], point  = i, find the min larger number then nums[i] in the array and swap it with the nums[point],
   687321   - 786321  sort 86321, found out already sorted, swap first with last, ....
   
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
