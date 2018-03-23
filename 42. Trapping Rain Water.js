/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
*/

/**
 * @param {number[]} height
 * @return {number}
 
 [0,1,0,2,1,0,1,3,2,1,2,1]  
 go from left to right: largest left: [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3]
 go from right to left:largest right: [3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1]
 sum = min(left[i], right[i]) - A[i];
 */
var trap = function(height) {
    var left = [], right = [], sum=0;
    var leftMax = -1, rightMax = -1;
    for(var i=0; i<height.length; i++) {
        if(leftMax < height[i]) {
            leftMax = height[i];
        } 
        left.push(leftMax);
    }
    
    for(var i=height.length-1; i>=0; i--) {
        if(rightMax < height[i]) {
            rightMax = height[i];
        } 
        right.push(rightMax);
    }
    right = right.reverse();
    
    for(var i=0; i<height.length; i++) {
        sum+= Math.min(left[i], right[i]) - height[i];
    }
    return sum;
};
