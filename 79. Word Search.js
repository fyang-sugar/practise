/*
Given a 2D board and a word, find if the word exists in the grid.
The word can be constructed from letters of sequentially adjacent cell, 
where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
For example,
Given board =
[  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // start from each element in the board. use dfs to go down to search, return false if not found then start on next element again.
    var visited = [];
    for(var i=0; i<board.length; i++) {
        visited[i] = [];
    }
    for(var i=0; i<board.length; i++) {
        for(var j=0; j<board[0].length; j++) {
            var flag = dfs(i, j, word, 0, board, visited);
            if(flag === true) return true;
        }
    }
    return false;
};

var dfs = function(i, j, word, index, board, visited) {
    if(index === word.length)  return true;
    if(i<0 || j<0 ||i>= board.length || j>=board[0].length || word[index] !== board[i][j] || visited[i][j])  return false;
    visited[i][j] = true;
    if(dfs(i+1, j, word, index+1, board, visited))   return true;
    if(dfs(i-1, j, word, index+1, board, visited))   return true;
    if(dfs(i, j+1, word, index+1, board, visited))   return true;
    if(dfs(i, j-1, word, index+1, board, visited))   return true;
    visited[i][j] = false;
    return false;
};
