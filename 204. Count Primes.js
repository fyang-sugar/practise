/*
Description:
Count the number of prime numbers less than a non-negative number, n.
*/

var countPrimes = function(n) {
    if(n<=2) return 0;
    var count = 0, i;
    for(i=2; i<n; i++) {
        if(isPrime(i)) {
            count++;
        }
    }
    return count;
};

var isPrime = function(num) {
    for(var i=2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
};
