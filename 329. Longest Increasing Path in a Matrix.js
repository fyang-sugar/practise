/*
Given an integer matrix, find the length of the longest increasing path.
From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).
Example 1:
nums = [
  [9,9,4],
  [6,6,8],
  [2,1,1]
]
Return 4
The longest increasing path is [1, 2, 6, 9].
Example 2:
nums = [
  [3,4,5],
  [3,2,6],
  [2,2,1]
]
Return 4
The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
*/

var longestIncreasingPath = function(matrix) {
    if(matrix.length === 0) return 0;
    var col = matrix[0].length;
    var row = matrix.length;
    var count = [], i, j;
    for(i=0;i <row; i++) {
        count[i] = [];
        for(j=0; j <col; j++) {
            count[i].push(0);
        }
    }
    var max = 0;
    for(i=0;i <row; i++) {
        for(j=0; j <col; j++) {
             dfs(matrix, i, j, count, row, col);
             max = count[i][j] < max ? max : count[i][j];
        }
    }
    return max;
};

var dfs = function(matrix, i, j, count, row, col) {
   var max =1;
   if(count[i][j] !== 0) {
       return count[i][j];
   }
   if(i+1 < row) { 
        let val1 = matrix[i][j] < matrix[i+1][j] ? 1+  dfs(matrix, i+1, j, count, row, col) : 1;  
        max = val1 > max ? val1 : max;
   }
   if(i-1 >= 0) {
       let val2 = matrix[i][j] < matrix[i-1][j] ? 1+  dfs(matrix, i-1, j, count, row, col) : 1;
       max = val2 > max ? val2 : max;
   }
    if(j+1 < col) {
        let val3 = matrix[i][j] < matrix[i][j+1] ? 1+ dfs(matrix, i, j+1, count, row, col) : 1;
        max = val3 > max ? val3 : max;
   }
    if(j-1 >= 0) {
        let val4 = matrix[i][j] < matrix[i][j-1] ? 1+ dfs(matrix, i, j-1, count, row, col) : 1;
        max = val4 > max ? val4 : max;
   }
    count[i][j] = max;
    return max;
   
}
