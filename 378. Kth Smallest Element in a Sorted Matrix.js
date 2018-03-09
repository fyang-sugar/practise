/*
Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.
Note that it is the kth smallest element in the sorted order, not the kth distinct element.
Example:
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,
return 13.
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    var visited = [], col =matrix[0].length, row= matrix.length, obj,  count=0, x=0, y=0, curMin;
    for(var i=0; i<row; i++) {
        visited[i] = [];
    }
    
    var verify = [{x:0, y:0, val: matrix[0][0]}];
    visited[0][0] =true;
  
    while(verify && count < k) {
        curMin = Math.min(... verify.map(item => item.val));
        obj = removedMin(verify, curMin);
        count++;
        if(count === k) {
            return obj.val;
        }
        if(obj.x+1 < row && !visited[obj.x+1][obj.y]) {
            visited[obj.x+1][obj.y] =true;
            verify.push({x: obj.x+1, y: obj.y, val: matrix[obj.x+1][obj.y]});
        }
        if(obj.y+1 < col && !visited[obj.x][obj.y + 1]) {
            visited[obj.x][obj.y + 1] =true;
            verify.push({x: obj.x, y: obj.y+1, val: matrix[obj.x][obj.y+1]});
        }
    }
    return -1;
};


var removedMin = function(arr, minVal) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i].val === minVal) {
            minObj = arr[i];
            arr.splice(i, 1);
            break;
        }
    }
    return minObj;
}

