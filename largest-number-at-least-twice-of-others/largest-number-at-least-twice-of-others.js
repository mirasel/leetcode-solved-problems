/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxNum=-1, maxIndex=0;
    
    for(let i=0;i<nums.length; i++){
        if(nums[i]>maxNum){
            maxNum = nums[i];
            maxIndex = i;
        }
    }
    
    for(let i=0;i<nums.length; i++){
        if(nums[i]!=maxNum&&2*nums[i]>maxNum){
            return -1;
        }
    }
    return maxIndex;
};