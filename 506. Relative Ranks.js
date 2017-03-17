/*
Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".
 e.g: input: [10,3,8,9,4]
 output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
For the left two athletes, you just need to output their relative ranks according to their scores.
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 * Sort and put in map, then output based on map
 */
var findRelativeRanks = function(nums) {
    let val, res = [], newNums, map= new Map();
    newNums = nums.slice(0).sort((a , b)=>{
      return b - a;
  });
    
    for(i=0;i<newNums.length;i++) {
        map.set(newNums[i], i+1);
    }
    
    for(i=0;i<nums.length;i++) {
        val = map.get(nums[i]);
        if(val<4) {
            if(val ==1) {
                res.push('Gold Medal');
            }
            if(val ==2) {
                res.push('Silver Medal');
            }
            if(val ==3) {
                res.push('Bronze Medal');
            }
        }
        else {
            res.push(val.toString());
        }
        
    }
    return res;
};
