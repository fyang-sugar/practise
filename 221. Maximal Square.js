/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
For example, given the following matrix:
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Return 4.
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 f[x][y] mean the largest length can go from x, y
 up[i][j] = up[i-1][j] +1 (board[i][j] === 1) or 0 (board[i][j] === 0)
 left[i][j] = left[i][j-1] +1 (board[i][j] === 1) or 0 (board[i][j] === 0)
 
 matrix[i][j] ===1
 f[i][j] = min(left[i][j-1], up[i-1][j], f[i-1][j-1]) +1
 matrix[i][j] ===0
 f[i][j] ===0
 
 since f[i-1][j] <= up[i-1][j]
 since f[i][j-1] <= left[i][j-1]
 
 do the dp function can be changed to:
 matrix[i][j] ===1
 f[i][j] = min(f[i][j-1], f[i-1][j], f[i-1][j-1]) +1
 matrix[i][j] ===0
 f[i][j] ===0
 */
var maximalSquare = function(matrix) {
    if(matrix.length === 0 )  return 0;
    var row = matrix.length, col = matrix[0].length, f=[], maxVal = -1;
    for(var i=0; i<row; i++) {
        f[i%2]= [];
        for(var j=0; j<col; j++) {
            if(i===0) {
                f[i%2][j] = +matrix[i][j];
            } else {
                if(matrix[i][j] === '0') f[i%2][j] = 0;
                else {
                    f[i%2][j] = Math.min(...[f[(i-1)%2][j], f[i%2][j-1] || 0, f[(i-1)%2][j-1] || 0])+1;
                }
            }
            maxVal = Math.max(maxVal, f[i%2][j]);
        }
    }
    return maxVal*maxVal;
};
