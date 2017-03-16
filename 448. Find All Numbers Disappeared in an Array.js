/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.
Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
Example: [4,3,2,7,8,2,3,1]
Output: [5,6]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 * The basic idea is that we iterate through the input array and mark elements as negative using nums[nums[i] -1] = -nums[nums[i]-1]. In this way all the numbers that we have seen will be marked as negative. In the second iteration, if a value is not marked as negative, it implies we have never seen that index before, so just add it to the return list.
 * e.g: [4,3,2,7,8,2,3,1]
 * val =4-1, num[3]= nums[3]*-1 = -7 [4,3,2,-7,8,2,3,1]
 * val =3-1, num[2]= nums[2]*-1 = -2 [4,3,-2,-7,8,2,3,1]
 * val =2-1, num[1]= nums[1]*-1 = -3 [4,-3,-2,-7,8,2,3,1]
 * val =7-1, num[6]= nums[6]*-1 = -3 [4,-3,-2,-7,8,2,-3,1]
 * val =8-1, num[7]= nums[7]*-1 = -1 [4,-3,-2,-7,8,2,-3,-1]
 * val =2-1, since num[2] < 0, do nothing
 * val =3-1, since num[3] < 0, do nothing
 * val =1-1, num[0]= nums[0]*-1 = -4 [-4,-3,-2,-7,8,2,-3,-1]
 * trarse the array, find the num[i]>0, res.push(i+1)
 */
var findDisappearedNumbers = function(nums) {
    let i=0, res=[], index;
    for(;i<nums.length;i++) {
        index =Math.abs(nums[i])-1; //abs is the key, otherwise, we may get the neg value
        if(nums[index] > 0) {
            nums[index] =nums[index]* (-1);
        }
    }
    for(i=0;i<nums.length;i++) {
        if(nums[i]>0) {
            res.push(i+1);
        }
    }
    return res;
};
