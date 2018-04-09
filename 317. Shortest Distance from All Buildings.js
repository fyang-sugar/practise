/*
You want to build a house on an empty land which reaches all buildings in the shortest amount of distance. 
You can only move up, down, left and right. You are given a 2D grid of values 0, 1 or 2, where:
Each 0 marks an empty land which you can pass by freely.
Each 1 marks a building which you cannot pass through.
Each 2 marks an obstacle which you cannot pass through.
For example, given three buildings at (0,0), (0,4), (2,2), and an obstacle at (0,2):
1 - 0 - 2 - 0 - 1
|   |   |   |   |
0 - 0 - 0 - 0 - 0
|   |   |   |   |
0 - 0 - 1 - 0 - 0
The point (1,2) is an ideal empty land to build a house, as the total travel distance of 3+3+1=7 is minimal. So return 7.
Note:
There will be at least one building. If it is not possible to build such house according to the above rules, return -1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 
 since (0, 0) -> (1, 1) == (1, 1) -> (0, 0)
 we check each point '1', recording '1' to '0' distance in a hashmap
 key: '0' position, value: [{pointA '1', distance: dist}, {pointB '1', distance: dist} ...]
 */
var shortestDistance = function(grid) {
    var dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    var visited = [], arr= [], map = {}, buildingNumber=0, dist, st, node, k, x, y;
    for(var i=0; i<grid.length; i++) {
        visited[i] = [];
        for(var j=0; j<grid[0].length; j++) {
            if(grid[i][j] === 1) {
                arr.push([i, j]);
                buildingNumber ++;
            }
        }
    }

    for(var i=0; i<arr.length; i++) {  // start from each buiding and caculate the distance of all 0 to it and store in hashmap
        st = [];
        dist = 1;
        st.push(arr[i]);
        visited[arr[i][0]][arr[i][1]] = 1;
        while(st.length > 0) {
            var len = st.length;
            while(len > 0) {
                node = st.shift();
                for(k=0; k<4; k++) {
                    x = node[0] + dir[k][0];
                    y = node[1] + dir[k][1];
                    if(x <0 || y<0 || x>=grid.length || y>= grid[0].length || visited[x][y] ||grid[x][y]!==0)  continue;
                    visited[x][y] = 1;
                    st.push([x, y]);
                    if(!map[[x, y]]) {
                        map[[x, y]] = [];
                    }
                    map[[x, y]].push({building: arr[i], dist: dist});
                }
                len --;
            }
            dist ++;
        }
        _clearVisited(grid, visited);
    }

    var minVal = Number.MAX_SAFE_INTEGER;
    for(var key in map) {
        if(map[key].length === buildingNumber) {
            var sum = map[key].reduce((total, item) => {
                return total + item.dist;
            }, 0);
            minVal = Math.min(minVal, sum);
        }
    }
    return minVal === Number.MAX_SAFE_INTEGER ? -1: minVal;
};

var _clearVisited = function(grid, visited) {
    for(var i=0; i<grid.length; i++) {
        visited[i] = [];
    }
};
