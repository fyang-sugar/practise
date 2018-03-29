/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
Example 1:
nums1 = [1, 3]
nums2 = [2]
The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 
 for example: [1,3,5,6,7]  [23,44,45,58]  len = 9 A needs 5, B need 4
 startA = 0, endA = 5, midA = 2 partitions:    A [1, 3]   | [5, 6, 7]  left should always small than right
                                               B [23, 44] | [45, 58]  since 3<45(ok) 44 > 5 not ok, move to right, make A larger
 startA = 2+1=3, endA = 5, midA = 4 partitions: A [1, 3, 5, 6] | [7]       
                                               B [23]         | [44, 45, 58]  since 6<44(ok) 23 > 7 not ok, move to right
 startA = 4+1=5, endA = 5, midA = 5 partitions: A [1, 3, 5, 6, 7] | []  
                                               B []              | [23, 44, 45, 58]  since 7<23, ok
 find 7
 if it is an even number, (max(A left max, B left max) + min(A right min, B right min))/2 =  answer
 
 the core:  [... Aleft] | [Aright ...]  if(Aleft < Bright && Bleft < Aright)  ideal, break
            [... Bleft] | [Bright ...]  if(Aleft > Bright && Bleft < Aright)  shouldn't include Aleft, move to left
                                        if(Aleft < Bright && Bleft > Aright)  shouldn't include Bleft, move to right
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // to make to code less complicated
    nums1.unshift(Number.MIN_SAFE_INTEGER);
    nums1.push(Number.MAX_SAFE_INTEGER);
    nums2.unshift(Number.MIN_SAFE_INTEGER);
    nums2.push(Number.MAX_SAFE_INTEGER);
    
    var totalLen = nums1.length + nums2.length;
    var half = parseInt(totalLen +1)/2; 
    if(nums1.length > nums2.length) {
        // swap nums1, nums2 to make nums1 to be the smallest length
        var temp = nums1.slice(0);
        nums1 = nums2;
        nums2 = temp;
    }
    var startA = 0, endA = nums1.length -1, startB = 0, endB = nums2.length -1, midA, leftA, leftB, rightA, rightB;
    while(startA <= endA) {
        midA = parseInt(startA + (endA - startA)/2);
        leftA = nums1.slice(0, midA+1);
        rightA = nums1.slice(midA+1, nums1.length);
        var midB = half - leftA.length;
        leftB = nums2.slice(0, midB);
        rightB = nums2.slice(midB, nums2.length);
        if(leftA[leftA.length-1] <= rightB[0] &&  leftB[leftB.length-1] <= rightA[0]) {
            break;
        }
        else if(leftA[leftA.length-1] > rightB[0] && leftB[leftB.length-1] < rightA[0]) {
            endA = midA -1;
        } else{
            startA = midA +1;
        }
    }
    if(totalLen % 2 === 0) {
        return (Math.max(leftA[leftA.length-1], leftB[leftB.length-1]) + Math.min(rightA[0], rightB[0]))/2;
    }
    return Math.max(leftA[leftA.length-1], leftB[leftB.length-1]);
};
