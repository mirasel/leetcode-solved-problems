/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxConsOnes=0, count = 0;
    for(i in nums){
        if(nums[i]===0){
            maxConsOnes = Math.max(maxConsOnes, count);
            count = 0;
        }else{
            count++;
        }
    }
    return Math.max(maxConsOnes, count);
    
};