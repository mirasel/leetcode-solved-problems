/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const result = [];
    const [m,n] = [mat.length, mat[0].length];
    let row = 0, col=0, d=1;
    for(let i=0; i<m*n; i++){
        result.push(mat[row][col]);
        row -=d;
        col +=d;
        
        if(row>=m){
            row = m-1;
            col +=2;
            d = -d;
        }else if(col>=n){
            col = n-1;
            row +=2;
            d = -d;
        }else if(row<0){
            row =0;
            d=-d;
        }else if(col<0){
            col = 0;
            d = -d
        }
    }
    return result;
};