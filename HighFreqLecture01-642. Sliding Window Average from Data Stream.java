/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.
Example
MovingAverage m = new MovingAverage(3);
m.next(1) = 1 // return 1.00000
m.next(10) = (1 + 10) / 2 // return 5.50000
m.next(3) = (1 + 10 + 3) / 3 // return 4.66667
m.next(5) = (10 + 3 + 5) / 3 // return 6.00000
*/

public class MovingAverage {
    ArrayList<Double> sum;
    double total;
    int count;
    /*
    * @param size: An integer
    */public MovingAverage(int size) {
        // do intialization if necessary
        count = size;
        total = 0;
        sum = new ArrayList<Double>();
    }
    /*
     * @param val: An integer
     * @return:  
     */
    public double next(int val) {
        // write your code here
        total += val;
        sum.add(total);
        if(sum.size() <= count) {
            return  sum.get(sum.size()-1) / sum.size();
        } else {
            int ind = sum.size() - count -1;
            return  (sum.get(sum.size()-1) - sum.get(ind)) / count;
        }
    }
}
