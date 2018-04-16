/*
Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.
The distance between two adjacent cells is 1.
Example 1: 
Input:
0 0 0
0 1 0
0 0 0
Output:
0 0 0
0 1 0
0 0 0
Example 2: 
Input:
0 0 0
0 1 0
1 1 1
Output:
0 0 0
0 1 0
1 2 1
Note:
The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 
 change all element which equal 1 but no 0 surrounded to be max_value
 0 0 0 
 0 1 0
 1 max 1
 then we traverse from each 1, if current val > 1, assign the value to matrix
 but if the current value is already assigned, let's say 2, then we need to exclude it from checking again
 */
var updateMatrix = function(matrix) {
    for(var i=0; i<matrix.length; i++) {
        for(var j=0; j<matrix[0].length; j++) {
            if(matrix[i][j] === 1 && !_hasZero(i, j, matrix)) {
                matrix[i][j] = Number.MAX_VALUE;
            }
        }
    }
    for(var i=0; i<matrix.length; i++) {
        for(var j=0; j<matrix[0].length; j++) {
            if(matrix[i][j] === 1) {
                dfs(i, j, matrix, 0);
            }
        }
    }
    return matrix;
};

var dfs = function(i, j, matrix, val) {
    if(i<0 || j<0 || i >=matrix.length || j >= matrix[0].length || matrix[i][j] <=val)  return;
    if(val > 1)  matrix[i][j] = val;
    dfs(i+1, j, matrix, matrix[i][j] + 1);
    dfs(i-1, j, matrix, matrix[i][j] + 1);
    dfs(i, j+1, matrix, matrix[i][j] + 1);
    dfs(i, j-1, matrix, matrix[i][j] + 1);
};

var _hasZero = function(i, j, matrix) {
    if(i+1 < matrix.length && matrix[i+1][j] === 0)  return true;
    if(j+1 < matrix[0].length && matrix[i][j+1] === 0)  return true;
    if(i-1 >=0 && matrix[i-1][j] === 0)  return true;
    if(j-1 >=0 && matrix[i][j-1] === 0)  return true;
    return false;
};
