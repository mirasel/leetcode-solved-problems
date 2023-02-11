/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0, j=1;
    
    while(nums[j]!==undefined){
        if(nums[i]===nums[j]){
            nums.splice(j,1);
            nums.push(undefined);
        }else{
            i++;
            j++;
        }
    }
    return i+1;
};