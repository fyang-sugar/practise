/*
Given a non-empty array of integers, return the k most frequent elements.
For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].
Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = {}, arr= [];
    for(let num of nums) {
        map[num] = map[num]? map[num]+1 : 1;
    }
    for(let key in map) {
        arr.push([key, map[key]]);
    }
    
    arr.sort((a, b) => {
       if(a[1] === b[1]) {// freq equal 
           if(a[0] > b[0]) return 1;
           if(a[0]< b[0]) return -1;
           return 0;
           
       } else {
           return b[1] - a[1];
       }
    });
    return arr.slice(0, k).map(item => +item[0]);
};
