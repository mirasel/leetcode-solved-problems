/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let sstr = strs[0];
    
    for(let i=1;i<strs.length;i++){
        if(strs[i].length<sstr.length){
            sstr = strs[i]
        }
    }
    
    let prefix = "";
    for(let i=0;i<sstr.length;i++){
        prefix+=sstr[i];
        if(!strs.every(str=>str.startsWith(prefix))){
            prefix = prefix.slice(0,-1);
            break;
        }
    }
    
    return prefix;
};