/* Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. 
Return the sum of the three integers. You may assume that each input would have exactly one solution.
For example, given array S = {-1 2 1 -4}, and target = 1.
  The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
  */
  
  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 
 function sorting(a, b) {
        if(a>b) {
            return 1;
        }
        else if(a<b) {
            return -1;
        }
        else {
            return 0;
        }
    }
    
var threeSumClosest = function(nums, target) {
    var i, j, k, currentVal, minOffset, result;
    // Sorting nums.
    nums = nums.sort(sorting);
    
    result = nums[0] + nums[1] + nums[2];
    minOffset = Math.abs(nums[0] + nums[1] + nums[2] - target);
    
    for(i=0; i<nums.length-2; i++) {
        j=i+1;
        k=nums.length-1;
        
        while(j<k) {
            currentVal = nums[i] + nums[j] + nums[k];
            if(currentVal === target) {
                return currentVal;
            }
            else if(currentVal < target) {
                j++;
            }
            else {
                k--;
            }
            // Compare currentVal-target with minOffset.
            if(Math.abs(currentVal - target) < minOffset) {
                minOffset = Math.abs(currentVal - target);
                result = currentVal;
            }
        }
        
    }
    
    return result;
};
