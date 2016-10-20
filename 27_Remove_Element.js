 // Swap the nums[i]=val to the end part
var removeElement = function(nums, val) {
    var i =0, j= nums.length -1;
    while(i<=j) {  // The key.
        if(nums[i] == val) {
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j--;
        }
        else {
            i++;
        }
    }
    return i;
};
