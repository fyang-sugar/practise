/*
Given two arrays, write a function to compute their intersection.
Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
Note:
Each element in the result must be unique.
The result can be in any order.
*/

var intersection = function(nums1, nums2) {
    if(nums1.length === 0 || nums2.length === 0) return [];
    var map1 = {},
        map2 = {},
        res = {};
    nums1.forEach(function(item){
        map1[item] = 1;
    }, this);
    
    nums2.forEach(function(item){
        map2[item] = 1;
    }, this);
    
    var len = map1.length > map2.length ? map2.length : map1.length;
    for(var item in map1) {
        if(map2[item]) {
            res[item] = +item;  // add a plus to make sure it's number
        }
    }
   
    return Object.values(res);
};
