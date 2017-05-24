/*
You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.
Example 1:
coins = [1, 2, 5], amount = 11
return 3 (11 = 5 + 5 + 1)

Example 2:
coins = [2], amount = 3
return -1.
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 
 * s[1] = 1
 * s[2] = 1
 * s[5] = 1
 * s[n] = min(s[n-coins[0]]+1, s[n-coins[1]]+1,... s[n-coins[n-1]]+1)
 */
var coinChange = function(coins, amount) {
    var arr, i, minVal;
    var remain;
    if(amount === 0) return 0;
    const minimum = Math.min(...coins);
    if(amount < minimum) {
        return -1;
    }
   
    arr = new Array(amount+1).fill(-1);
    for(remain=1;remain <=amount; remain++) {
        if(coins.indexOf(remain) >= 0) {
            arr[remain] = 1;
        }
        else {
            minVal = Number.MAX_SAFE_INTEGER;
            for(i=0; i<coins.length; i++) {
                if(remain >= coins[i]) {
                    var tmp = arr[remain - coins[i]];
                    if(tmp>0) {
                        minVal = Math.min(tmp +1, minVal);
                    }
                }
            }
            if(minVal !== Number.MAX_SAFE_INTEGER) {
                arr[remain] = minVal;  
            }
        }
    }
    return arr[amount];
    
};
