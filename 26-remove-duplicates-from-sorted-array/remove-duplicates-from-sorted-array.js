/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let x=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i+1]>nums[i]){
            x=x+1;
            nums[x]=nums[i+1]
        }
    }
    return x+1;
};