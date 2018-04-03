/*
Given a 2D integer matrix M representing the gray scale of an image, 
you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) 
of all the 8 surrounding cells and itself. 
If a cell has less than 8 surrounding cells, then use as many as you can.
Example 1:
Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0
*/

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    var newM = [], i, j;
    var poses= [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    for(i=0; i<M.length; i++) {
        newM[i] = [];
        for(j=0; j<M[0].length; j++) {
            newM[i][j] = _smooth(i, j, M, poses);
        }
    }
    return newM;
};

var _smooth = function(i, j, M, poses) {
    var avg = M[i][j], count=1;
    for(var pos of poses) {
        var indx = i+pos[0];
        var indy = j+pos[1];
        if(indx < 0 || indx >= M.length || indy < 0 || indy >= M[0].length) 
            continue;
        avg += M[indx][indy];
        count++;
    }
    return parseInt(avg/count);
}
