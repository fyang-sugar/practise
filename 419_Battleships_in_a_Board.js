/*
Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
You receive a valid board, made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
Example:
X..X
...X
...X
In the above board there are 2 battleships.
*/

/**
 * @param {character[][]} board
 * @return {number}
 * 
 * if current is a X, check it's left and upper one, if there is an X, change current X to be .
 * rescan the whole array again, count how many X is the result
 */
var countBattleships = function(board) {
    let count = 0;
    for(let i=0; i< board.length; i++) {
        for(let j=0; j<board[0].length; j++) {
    
            if(board[i][j] === 'X') {
                if((i === 0 || board[i-1][j] !== 'X') && ( j ===0 || board[i][j-1] !== 'X')) {
                    count ++;
                }
            }
        }
    }
     
    return count;
};
