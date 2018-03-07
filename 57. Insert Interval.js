/*
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
You may assume that the intervals were initially sorted according to their start times.
Example 1:
Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].
Example 2:
Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].
This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].
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
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
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
