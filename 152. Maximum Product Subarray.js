/*
Find the contiguous subarray within an array (containing at least one number) which has the largest product.
For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.
*/
/**
 * @param {number[]} nums
 * @return {number}
 * use minVal, mnVal to record the min, max product in current step
 * since min can be max in next step, so we need to record both.
 * e.g: [2,3,-2,4,-2]
 * i=0: min= min(2, 2, 2), max= (2,2,2)
 * i=1: min= min(3, 2*3, 2*3)=3, max= (3,2*3, 2*3) =6
 * i=2: min= min(-2, 3*-2, 6*-2)=-12, max= (-2,3*-2, 6*-2) =-2
 * i=3: min= min(4, -12*4, -2*4)=-48, max= (4,-12*4, -2*4) =4
 * i=4: min= min(-2, -48*-2, 4*-2)=-8, max= (-2, -48*-2, 4*-2) =96
 */
var maxProduct = function(nums) {
    var minVal = nums[0], maxVal = nums[0], max = nums[0], prevminVal, prevmaxVal, i;
    for(i=1; i<nums.length; i++) {
        prevminVal =minVal;  // The key
        prevmaxVal =maxVal;
        minVal = Math.min(Math.min(minVal*nums[i], nums[i]), prevmaxVal*nums[i]);
        maxVal = Math.max(Math.max(prevminVal*nums[i], nums[i]), maxVal*nums[i]);
        if(maxVal > max) {
            max = maxVal;
        }
    }
    return max;
};
