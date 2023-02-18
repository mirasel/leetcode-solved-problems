/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const totalSum = nums.reduce((a,b)=>(a+b),0);
    const leftSums = []
    
    for(let i=0;i<nums.length;i++){
        if(i==0){
            leftSums.push(0);
        }else{
            leftSums.push(leftSums[i-1]+nums[i-1])
        }
        const rightSum = totalSum - leftSums[i] - nums[i];
        if(leftSums[i]  === rightSum){
            return i
        }
    }
    return -1;
};