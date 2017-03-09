/**
 * 
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *For example, given array S = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

@param {number[]} nums
 * @return {number[][]}
 * 
 * 
sort(S);
 for i=0 to n-3 do
    a = S[i];
    k = i+1;
    l = n-1;
    while (k<l) do
       b = S[k];
       c = S[l];
       if (a+b+c == 0) then
          output a, b, c;
          // Continue search for all triplet combinations summing to zero.
           k = k + 1
           l = l - 1
       else if (a+b+c > 0) then
          l = l - 1;
       else
          k = k + 1;
       end   
    end
 end
*/
 
var threeSum = function(nums) {
    var i, j, k, result=[];
    nums = nums.sort(sorting);  // The Key
    //If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode point order. 
    //For example, "Banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order.
    
    for( i=0;i<nums.length-2; i++) {
        j= i+1;
        k= nums.length-1;
        while(j<k) {
            if(nums[i]+nums[j]+nums[k] === 0) {
                // Push numbers into result
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while(j<k && nums[j] === nums[j-1]) j++;  // The Key, eliminate dups
                while(j<k && nums[k] === nums[k+1]) k--;  // The Key, eliminate dups
            }
            else if(nums[i]+nums[j]+nums[k] < 0) {
                j++;
            }
            else {
                k--;
            }
        }
        
        // for each nums[i], at the end, jump i, if nums[i] === nums[i+1]
        while(i<nums.length-2 && nums[i] === nums[i+1]) i++;
        
    }
    return result;
    
    
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
};
