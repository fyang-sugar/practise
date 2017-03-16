/*
Given a word, you need to judge whether the usage of capitals in it is right or not.
We define the usage of capitals in a word to be right when one of the following cases holds:
All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Example 1: Input: "USA"  Output: True
Example 2: Input: "FlaG" Output: False
*/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let sub = word.substr(1);
    // If the first one is captial, check the rest
    //if they are all lower case or upper case, return true, else return false
    if(word[0] === word[0].toUpperCase()) {
        if(sub === sub.toUpperCase() || sub === sub.toLowerCase()) {
            return true;
        }
        return false;
    }
    // If the first one is not captial, check the rest, if rest are all lower case, return true
    else {
        if(!sub || sub === sub.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }
};
