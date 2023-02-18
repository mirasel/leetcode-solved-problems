/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [[1]];
    
    for(let i=1; i<numRows; i++){
        const rows = [1];
        for(let j=1;j<=i-1;j++){
            rows.push(result[i-1][j-1]+result[i-1][j]);
        }
        rows.push(1);
        result.push(rows);
    }
    return result;
};