/*
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
Your algorithm should run in O(n) complexity.
*/

/**
 * @param {number[]} nums
 * @return {number}
 for each element, we check it's bigger one, bigger one ... till not exist in set
 we check it's smaller one, smaller one... till not exist in set
 the length = bigger - smaller -1, update maxLen accordingly
 to save time, we can remove the element once it get visited.
 */
var longestConsecutive = function(nums) {
    var set = new Set();
    var smaller, bigger, maxLen = 0;
    nums.forEach(item => {
        set.add(item);
    });
    
    nums.forEach(item => {
        if(set.has(item)) {
            var bigger = item +1;
            var smaller = item - 1;
            set.delete(item);
            while(set.has(bigger)) {
                set.delete(bigger);
                bigger ++;
            }
            while(set.has(smaller)) {
                set.delete(smaller);
                smaller --;
            }
            maxLen = Math.max(maxLen, bigger - smaller -1);
        }
    });
    return maxLen;
};
