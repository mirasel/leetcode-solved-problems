/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b)=>b-a);
    
    let i=0, j=1;
    let sum = 0;
    while(i<nums.length && j<nums.length){
        sum+=Math.min(nums[i],nums[j]);
        i+=2;
        j+=2;
    }
    return sum;
};