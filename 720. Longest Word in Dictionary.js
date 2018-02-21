/*
Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.
If there is no answer, return the empty string.
Example 1:
Input: 
words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation: 
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Example 2:
Input: 
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"
Explanation: 
Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply"
*/

var longestWord = function(words) {
    var set = new Set();
    var res = [];  // store the words in dict.
    words = words.sort(function(a,b){
        return a.length - b.length;
    });
    var max = words[0];
    for(word of words) {
        if(word.length === 1 || set.has(word.substring(0, word.length-1))) {
            set.add(word);
            if(max.length < word.length) {
                max = word;
            }
            res.push(word);
        }
    }
    return res.sort().filter(item =>  item.length === max.length).shift();
};
