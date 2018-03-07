/*
A mirror number is a number that looks the same when rotated 180 degrees (looked at upside down).
Write a function to determine if a number is mirror. The number is represented as a string.
For example, the numbers "69", "88", and "818" are all mirror numbers.
Given num = "69" return true
Given num = "68" return false
*/

// mirror pairs: 1 - 1 | 6 -9 | 9 - 6 | 8 - 8 | 0 - 0
public class Solution {
    /**
     * @param num: a string
     * @return: true if a number is strobogrammatic or false
     */
    public boolean isStrobogrammatic(String num) {
        // write your code here
        int start = 0;
        int end = num.length()-1;
        while(start < end) {
            if ((num.charAt(start) == '1' && num.charAt(end) == '1') ||
                (num.charAt(start) == '0' && num.charAt(end) == '0') ||
                (num.charAt(start) == '8' && num.charAt(end) == '8') ||
                (num.charAt(start) == '6' && num.charAt(end) == '9') ||
                (num.charAt(start) == '9' && num.charAt(end) == '6')) {
                start++;
                end --;
            }
            else {
                return false;
            }
        }
        if(start == end && num.charAt(start) != '1' && num.charAt(start) != '8' && num.charAt(start) != '0') {
            return false;
        }
        return true;
    }
}
