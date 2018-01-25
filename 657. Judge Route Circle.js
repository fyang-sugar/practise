/*
Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.
The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.
Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false
*/

var judgeCircle = function(moves) {
    var count = 0, i, arr= moves.split('');
    for(i=0; i<arr.length; i++) {
        if(arr[i] === 'U' || arr[i] === 'R') {
            count ++;
        }else {
            count --;
        }
    }
    return count===0 ? true : false;
};
