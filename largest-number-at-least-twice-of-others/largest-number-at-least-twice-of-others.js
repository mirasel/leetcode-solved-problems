/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxNum=-Infinity, maxIndex=0, secondMax = -Infinity;
    
    for(let i=0;i<nums.length; i++){
        if(nums[i]>maxNum){
            secondMax = maxNum;
            maxNum = nums[i];
            maxIndex = i;
        }else if(nums[i]>secondMax){
            secondMax = nums[i]
        }
    }
    return maxNum<2*secondMax? -1: maxIndex;
    // for(let i=0;i<nums.length; i++){
    //     if(nums[i]!=maxNum&&2*nums[i]>maxNum){
    //         return -1;
    //     }
    // }
    // return maxIndex;
};