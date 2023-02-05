/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    for(let i in nums){
        if(!(nums[i].toString().length & 1)) count++;
    }
    return count;
};