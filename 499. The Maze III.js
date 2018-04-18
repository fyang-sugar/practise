/*
There is a ball in a maze with empty spaces and walls. 
The ball can go through empty spaces by rolling up (u), down (d), left (l) or right (r), but it won't stop rolling until hitting a wall.
When the ball stops, it could choose the next direction. There is also a hole in this maze. 
The ball will drop into the hole if it rolls on to the hole.
Given the ball position, the hole position and the maze, find out how the ball could drop into the hole by moving the shortest distance.
The distance is defined by the number of empty spaces traveled by the ball from the start position (excluded) to the hole (included). 
Output the moving directions by using 'u', 'd', 'l' and 'r'. Since there could be several different shortest ways, 
you should output the lexicographically smallest way. If the ball cannot reach the hole, output "impossible".
The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. 
You may assume that the borders of the maze are all walls. The ball and the hole coordinates are represented by row and column indexes.
Example 1   Input 1: a maze represented by a 2D array
0 0 0 0 0
1 1 0 0 1
0 0 0 0 0
0 1 0 0 1
0 1 0 0 0
Input 2: ball coordinate (rowBall, colBall) = (4, 3)
Input 3: hole coordinate (rowHole, colHole) = (0, 1)
Output: "lul"
Explanation: There are two shortest ways for the ball to drop into the hole.
The first way is left -> up -> left, represented by "lul".
The second way is up -> left, represented by 'ul'.
Both ways have shortest distance 6, but the first way is lexicographically smaller because 'l' < 'u'. So the output is "lul".

Example 2   Input 1: a maze represented by a 2D array
0 0 0 0 0
1 1 0 0 1
0 0 0 0 0
0 1 0 0 1
0 1 0 0 0
Input 2: ball coordinate (rowBall, colBall) = (4, 3)
Input 3: hole coordinate (rowHole, colHole) = (3, 0)
Output: "impossible"
Explanation: The ball cannot reach the hole.
*/

/**
 * @param {number[][]} maze
 * @param {number[]} ball
 * @param {number[]} hole
 * @return {string}
 */
var findShortestWay = function(maze, ball, hole) {
    var res = [], visited = [], path = [], st = [], dir = [[0, 1], [0, -1], [1, 0], [-1, 0]], pathDir = ['r', 'l', 'd', 'u'], shortestPath = Number.MAX_VALUE;
    for(var i=0; i<maze.length; i++) {
        visited[i] = [];
        path[i] = [];
        for(var j=0; j<maze[0].length; j++) {
            visited[i][j] = Number.MAX_VALUE;
            path[i][j] = '';
        }
    }
    
    visited[ball[0]][ball[1]] = 0;
    st.push(ball);
    while(st.length > 0) {
        var cur = st.shift();
        for(var i=0; i<4; i++) {
            var x = cur[0];
            var y = cur[1];
            
            while(x + dir[i][0] >= 0 && y + dir[i][1] >= 0 && x + dir[i][0] < maze.length && y + dir[i][1] < maze[0].length && maze[x + dir[i][0]][y + dir[i][1]] === 0) {
                if(x === hole[0] && y=== hole[1])  break;
                x += dir[i][0];
                y += dir[i][1];
                
            }
            var steps = Math.abs(cur[0] - x) + Math.abs(cur[1] - y);
         
            if(steps === 0)  continue;  // THE KEY !!!!
            
            // x, y either sit on a position next to a wall or a hole
            if(visited[x][y] >= steps + visited[cur[0]][cur[1]]) {
                visited[x][y] = steps + visited[cur[0]][cur[1]];
                path[x][y] = path[cur[0]][cur[1]] + pathDir[i];
                
                if(x === hole[0] && y=== hole[1]) {
                    shortestPath = Math.min(shortestPath, steps + visited[cur[0]][cur[1]]);
                    res.push([steps + visited[cur[0]][cur[1]], path[x][y]]);
                } else {
                    st.push([x, y]);
                } 
            } 
        }
    }
    
    res = res.filter(item => item[0] === shortestPath).map(item => item[1]).sort((a, b) => {
        if(a > b)  return 1;
        if(a < b)  return -1;
        return 0;
    });
    return res[0] ? res[0] : "impossible";
};
