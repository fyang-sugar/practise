/*
Given a picture consisting of black and white pixels, find the number of black lonely pixels.
The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels respectively.
A black lonely pixel is character 'B' that located at a specific position where the same row and same column don't have any other black pixels.
Example:
Input: 
[['W', 'W', 'B'],
 ['W', 'B', 'W'],
 ['B', 'W', 'W']]
Output: 3
Explanation: All the three 'B's are black lonely pixels.
*/

/**
 * @param {character[][]} picture
 * @return {number}
 we can use bfs
 */
var findLonelyPixel = function(picture) {
    var count = 0, rowCount = [], colCount = [];
     for(var i=0; i<picture.length; i++) {
        for(var j=0; j<picture[0].length; j++) {
            if(picture[i][j] === 'B') {
                rowCount[i] = rowCount[i] ? rowCount[i]+1 : 1;
                colCount[j] = colCount[j] ? colCount[j]+1 : 1;
            }
        }
    }
    for(var i=0; i<picture.length; i++) {
        for(var j=0; j<picture[0].length; j++) {
            if(picture[i][j] === 'B' && rowCount[i] === 1 && colCount[j] === 1) {
                count++;
            }
        }
    }
    return count;
};
