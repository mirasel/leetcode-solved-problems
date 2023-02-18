/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const totalSum = nums.reduce((a,b)=>(a+b),0);
    
    for(let i=0;i<nums.length;i++){
        const leftArr = nums.slice(0,i);
        const leftSum = leftArr.reduce((a,b)=>(a+b),0);
        const rightSum = totalSum - leftSum - nums[i];
        if(leftSum === rightSum){
            return i
        }
    }
    return -1;
};