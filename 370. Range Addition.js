/*
Assume you have an array of length n initialized with all 0's and are given k update operations.
Each operation is represented as a triplet: [startIndex, endIndex, inc] 
which increments each element of subarray A[startIndex ... endIndex] (startIndex and endIndex inclusive) with inc.
Return the modified array after all k operations were executed.
Example:
Given:
    length = 5,
    updates = [
        [1,  3,  2],
        [2,  4,  3],
        [0,  2, -2]
    ]
Output:
    [-2, 0, 3, 5, 3]
Explanation:
Initial state:
[ 0, 0, 0, 0, 0 ]
After applying operation [1, 3, 2]:
[ 0, 2, 2, 2, 0 ]
After applying operation [2, 4, 3]:
[ 0, 2, 5, 5, 3 ]
After applying operation [0, 2, -2]:
[-2, 0, 3, 5, 3 ]
*/

/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 
 
 Just store every start index for each value and at end index plus one minus it
 for example it will look like:
 [1 , 3 , 2] , [2, 3, 3] (length = 5)
 res[ 0, 2, ,0, 0 -2 ]
 res[ 0 ,2, 3, 0, -5]
 sum 0, 2, 5, 5, 0
 */
var getModifiedArray = function(length, updates) {
    var nums = new Array(length).fill(0);
    for(var update of updates) {
        var start = update[0];
        var end = update[1];
        var inc = update[2];
        nums[start] += inc;
        if(end+1 < nums.length)  nums[end+1] -= inc;
    }
    
    var curTotal = 0;
    var sum = new Array(length).fill(0);
    for(var i=0; i<nums.length; i++) {
        curTotal += nums[i];
        sum[i] += curTotal;
    }
    return sum;
};
