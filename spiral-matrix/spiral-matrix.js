/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    const [m,n] = [matrix.length, matrix[0].length];
    let frow = 0, lrow = m-1, fcol = 0, lcol = n-1;
    let row = 0, col = 0, d=1;
    for(let i=0; i<m*n; i++){
        result.push(matrix[row][col]);
        switch(d){
            case 1: col++;
                break;
            case -1: col--;
                break;
            case 2: row++;
                break;
            case -2: row--;
                break;
            default: break;
        }
        
        if(col>lcol){
            col = lcol;
            d = 2;
            row++;
            frow++;
        }else if(row>lrow){
            row = lrow;
            d = -1;
            col--;
            lcol--;
        }else if(col<fcol){
            col = fcol;
            d = -2;
            row--;
            lrow --;
        }else if(row<frow){
            row = frow;
            d = 1;
            col++;
            fcol++;
        }
    }
    return result;
};