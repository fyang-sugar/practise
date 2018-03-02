/*
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
A region is captured by flipping all 'O's into 'X's in that surrounded region.
For example,
X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:
X X X X
X X X X
X X X X
X O X X
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(board.length === 0)  return;
    var i, j, visited = [], col = board[0].length, row=board.length;
    for(i=0; i<board.length; i++) {
        visited[i] = [];
        for(j=0; j<board.length; j++) {
            visited[i][j] = false;
        }
    }
    for(i=0; i<board.length; i++) {
        for(j=0; j<board[0].length; j++) {
            var flip = dfs(visited, i, j, [], board, row, col);
            if(flip) {
                fillColor(board, flip);
            }
        }
    }
   return;
};

var fillColor = function(board, flip) {
    var flag = flip.every(function(item){
        return item[0] !==0 && item[0] !== board.length-1 && item[1] !==0 && item[1] !== board[0].length-1;
    });
    if(flag) {
        flip.forEach(item => {
            board[item[0]][item[1]] = 'X';
        });
    }
    return;
};

var dfs = function(visited, i, j, flip, board, row, col) {
    if(!visited[i][j] && board[i][j] === 'O') {
        visited[i][j] = true;
        flip.push([i, j]);
        if(i+1 < row) dfs(visited, i+1, j, flip, board, row, col);
        if(i-1 >=0) dfs(visited, i-1, j, flip, board, row, col);
        if(j+1 < col) dfs(visited, i, j+1, flip, board, row, col);
        if(j-1 >=0) dfs(visited, i, j-1, flip, board, row, col);
        return flip;
    }
}
