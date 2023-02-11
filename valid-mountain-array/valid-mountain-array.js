/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let a=0;
    let i=0, j=1;
    if(arr.length<3) return false;
    while(j<arr.length){
        if(arr[i]===arr[j]) return false;
        if(a===0){
            if(arr[i]>arr[j]){
                if(i===0) return false;
                a++;
            }
            i++;
            j++;
        }else{
            if(arr[i]<arr[j]){
                return false;
            }
            i++;
            j++;
        }
    }
    return a>0?true:false;
};