/*
You are asked to cut off trees in a forest for a golf event. The forest is represented as a non-negative 2D map, in this map:
0 represents the obstacle can't be reached.
1 represents the ground can be walked through.
The place with number bigger than 1 represents a tree can be walked through, and this positive number represents the tree's height.
You are asked to cut off all the trees in this forest in the order of tree's height - always cut off the tree with lowest height first. 
And after cutting, the original place has the tree will become a grass (value 1).
You will start from the point (0, 0) and you should output the minimum steps you need to walk to cut off all the trees. 
If you can't cut off all the trees, output -1 in that situation.
You are guaranteed that no two trees have the same height and there is at least one tree needs to be cut off.
Example 1:
Input: 
[ [1,2,3],
 [0,0,4],
 [7,6,5]]
Output: 6
Example 2:
Input: 
[ [1,2,3],
 [0,0,0],
 [7,6,5]]
Output: -1
Example 3:
Input: 
[ [2,3,4],
 [0,0,5],
 [8,7,6]]
Output: 6
Explanation: You started from the point (0,0) and you can cut off the tree in (0,0) directly without walking.
*/

/**
 * @param {number[][]} forest
 * @return {number}
 
 to find all trees from start (0, 0)
 1. sort all trees in height order and store in the array
 2. in the array, we need to find the shortest path(0, 0) => arr[0](tree 1) => arr[1](tree 1) => arr[2](tree 2) => arr[n](tree n) 
 3. use a bfs to find the minimum path between to points: (sx, sy) => (tx, ty)
 O(mn * mn)
 */
var cutOffTree = function(forest) {
    var arr = [], sum=0, visited = [];
    var sx = 0, sy = 0, i;
    for(i=0; i<forest.length; i++) {
        visited[i] = [];
        for(var j=0; j<forest[0].length; j++) {
            if(forest[i][j] > 0) {
                arr.push([forest[i][j], i, j]);
            }
        }
    }
    arr.sort((a, b) => a[0] - b[0]);

    for(i=0; i<arr.length; i++) {
        var path = _BFSShorestedPath(sx, sy, arr[i][1], arr[i][2], forest, visited);
        _clearVisited(visited, forest);
        if(path === undefined)  return -1;
        sum+= path;
        sx = arr[i][1];
        sy = arr[i][2];
    }
    return sum;
};

var _clearVisited = function(visited, forest) {
    for(var i=0; i<forest.length; i++) {
        visited[i] = [];
    }
};

var _BFSShorestedPath = function(sx, sy, tx, ty, forest, visited) {
    var dir = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    var queue = [], x, y, cur, len;
    var step = 0;
    visited[sx][sy] = 1;
    queue.push([sx, sy]);
    while(queue.length > 0) {
        len = queue.length;
        while(len > 0) {
            cur = queue.shift();
            if(cur[0] === tx && cur[1] === ty)  return step;
            for(var i=0; i<4; i++) {
                x = cur[0] + dir[i][0];
                y = cur[1] + dir[i][1];
                if(x <0 || y<0 || x>= forest.length || y>=forest[0].length || !forest[x][y] || visited[x][y])  continue;
                visited[x][y] = 1;
                queue.push([x, y]);
            }
            len --;
        }
        step ++;
    }
    return undefined;
};
