/*
Given a pattern and a string str, find if str follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.
Examples:
pattern = "abab", str = "redblueredblue" should return true.
pattern = "aaaa", str = "asdasdasdasd" should return true.
pattern = "aabb", str = "xyzabcxzyabc" should return false.
Notes: You may assume both pattern and str contains only lowercase letters.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

var wordPatternMatch = function (pattern, str) {
  var map = new Map(); // A map of key-value pairs where key -> pattern letter and value -> corresponding string chunk from str.
  var set = new Set();   // Set containing unique string chunks which are being matched with the pattern letters
  return isMatch(str, 0, pattern, 0, map, set);
};

var isMatch = function (str, sInd, pattern, pInd, map, set) {
    if (sInd === str.length && pInd === pattern.length)   return true;  // both str and pattern have checked completely and match
    // When one of either str or pattern has been checked completely, but the other isn't.
    if (sInd === str.length || pInd === pattern.length)   return false;
  
    var chr = pattern[pInd]; // Get the current pattern character
    if (map.has(chr)) {  // if the pattern character exists in map
        var mapStr = map.get(chr);
        if (!str.startsWith(mapStr, sInd))   return false;  // then check if we can use it to match str[sInd... sInd+s.length]
        return isMatch(str, sInd + mapStr.length, pattern, pInd + 1, map, set);  // If it can match, continue to match the rest.
    } else { // pattern character does not exist in the map
        for (var i = sInd; i < str.length; i++) {
            var subStr = str.substring(sInd, i + 1);
            if (set.has(subStr))   continue;
            map.set(chr, subStr);  // Create or update it.
            set.add(subStr);
            if (isMatch(str, i + 1, pattern, pInd + 1, map, set)) {  // Continue to match the rest
                return true;
            }
            map.delete(chr);   // backtracking
            set.delete(subStr);
        }   
    }
    return false;
};
