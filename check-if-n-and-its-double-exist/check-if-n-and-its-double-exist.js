/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const hash = {}
    
    for(let i in arr){
        if(hash[arr[i]*2]||hash[arr[i]/2]){
            return true;
        }
        hash[arr[i]]=true;
    }
    return false;
};