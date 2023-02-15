/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b)=>(b-a));
    let i=1;
    while(i!==3&&i<nums.length){
        if(nums[i-1]==nums[i]){
            nums.splice(i,1)
        }else{
            i++;
        }
    }
    return (nums[2]!==undefined&&nums[2]!==null)?nums[2]:nums[0];
};