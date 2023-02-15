/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums.sort((a,b)=>(a-b));
    let i=1,arrLen = nums.length;
    while(nums[i]!==undefined){
        if(nums[i-1]===nums[i]){
            nums.splice(i,1)
        }else{
            i++;
        }
    }
    i=0;
    while(i<arrLen){
        if(nums[i]===i+1){
            nums[i] = 0;
        }else{
            nums.splice(i,0,i+1)
        }
        i++;
    }
    i=0
    while(nums[i]!==undefined){
        if(nums[i]===0){
            nums.splice(i,1)
        }else{
            i++;
        }
    }
    return nums;
};