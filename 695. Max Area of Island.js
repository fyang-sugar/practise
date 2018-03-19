/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)
Example 1:
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:
[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var maxArea = 0, area = [], i, j;
    var visited = [];
    var row = grid.length;
    var col = grid[0].length;
    for(i=0; i<row; i++) {
        visited.push([]);
         for(j=0; j<col; j++) {
             visited[i][j] = false;
         }
    }
    for(i=0; i<row; i++) {
         for(j=0; j<col; j++) {
             if(!visited[i][j] && grid[i][j] === 1) {
                 area[0] = 1;
                 dfs(grid, visited, i, j, row, col, area);
                 maxArea = Math.max(maxArea, area[0]);
             }
         }
    }
    return maxArea;
};

var dfs = function(grid, visited, x, y, row, col, area) {
    visited[x][y] = true;
    if(x+1 < row && !visited[x+1][y] && grid[x+1][y] === 1) {
         area[0] ++;
         dfs(grid, visited, x+1, y, row, col, area);
    }
    if(x-1 >= 0 && !visited[x-1][y] && grid[x-1][y] === 1) {
        area[0] ++;
         dfs(grid, visited, x-1, y, row, col, area);
    }
    if(y+1 < col && !visited[x][y+1] && grid[x][y+1] === 1) {
        area[0] ++;
         dfs(grid, visited, x, y+1, row, col, area);
    }
    if(y-1 >= 0 && !visited[x][y-1] && grid[x][y-1] === 1) {
        area[0] ++;
         dfs(grid, visited, x, y-1, row, col, area);
    }
    return;
}
