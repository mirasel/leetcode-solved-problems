/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const maxNum = Math.max(...nums);
    const maxIndex = nums.indexOf(maxNum);
    
    for(let i=0;i<nums.length; i++){
        if(nums[i]!=maxNum&&2*nums[i]>maxNum){
            return -1;
        }
    }
    return maxIndex;
};