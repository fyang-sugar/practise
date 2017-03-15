/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. 
Grid cells are connected horizontally/vertically (not diagonally). 
The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). 
The island doesn't have "lakes" (water inside that isn't connected to the water around the island). 
One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. 
Determine the perimeter of the island.
Example:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]
Answer: 16
*/

/**
 * @param {number[][]} grid
 * @return {number}
 * Count left, right, top, down 4 directions for each element, when there is E or 0, count ++;
 */
var islandPerimeter = function(grid) {
    let i, j, count = 0;
    for(i=0; i<grid.length; i++) {
        for(j=0; j<grid[0].length; j++) {
            if(grid[i][j] == 1) {
                // Check top
                if(i-1<0 || grid[i-1][j] === 0) count ++;
                // Check down
                if(i==grid.length-1 || grid[i+1][j] === 0) count ++;
                // Check left
                if(j-1<0 || grid[i][j-1] === 0) count ++;
                // Check right
                if(j==grid[0].length-1 || grid[i][j+1] === 0) count ++;
            }
        }
    }
    return count;
};
