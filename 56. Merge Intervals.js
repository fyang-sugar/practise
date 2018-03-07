/*
Given a collection of intervals, merge all overlapping intervals.
For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].
*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(intervals.length < 2) return intervals;
    
    //sort intervals
    intervals.sort((a,b) => {
        if(a.start > b.start) return 1;
        if(a.start < b.start) return -1;
        if(a.start === b.start) return 0;
    });
    
    var pointA = 0, pointB = 1, res=[];
    while(pointB < intervals.length) {
        var arr = helper(intervals[pointA].start, intervals[pointA].end, intervals[pointB].start, intervals[pointB].end);
        if(arr) {
            intervals[pointA] = undefined;
            intervals[pointB] = arr;
        }
        pointA ++;
        pointB ++;
    }
    intervals = intervals.filter(item => item !== undefined);
    return intervals;
};

var helper = function(s1, e1, s2, e2) {
    if(s1 > s2) {
        if(e1 < e2) {
            return new Interval(s2, e2);
        } else {
            if(s1 <=e2) {
                return new Interval(s2, e1);
            } else {
                return false;
            }
        }
    } else {
         if(e1 < e2) {
             if(s2 <= e1) {
                 return new Interval(s1, e2);
             } else {
                 return false;
             }
         } else {
             return new Interval(s1, e1);
         }
    }
};
