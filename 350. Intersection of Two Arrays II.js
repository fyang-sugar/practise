/*
Given two arrays, write a function to compute their intersection.
Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if(nums1.length === 0 || nums2.length === 0) return [];
    var map1 = {}, map2 = {}, res = [], i, count;
    nums1.forEach(function(item){
        map1[item] = !map1[item] ? 1 : ++map1[item];
    }, this);
    
     nums2.forEach(function(item){
        map2[item] = !map2[item] ? 1 : ++map2[item];
    }, this);
    
    for(var item in map1) {
        if(map2[item]) {
            i = 0;
            count = Math.min(map2[item], map1[item]);
            while(i<count) {
                i++;
                res.push(+item);
            }
        }
    }
    return res;
};
