/*
Given two words (beginWord and endWord), and a dictionary's word list, 
find the length of shortest transformation sequence from beginWord to endWord, such that:
Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
For example,
Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Note:
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
*/


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
using BFS:
start =hit
dict: "hot","dot","dog","lot","log", "cog"

Q: hit: 1             
pop hit, find hit neighboor: hot(2), delete hot in dict
dict: "dot","dog","lot","log", "cog"

Q: hot: 2
pop hot(2), find hot neighboor: dot(3), lot(3), delete dot, lot in dict
dict: dog","log", "cog"

Q: dot: 3 | lot: 3
pop lot(3), find lot neighboor: log(4), delete log in dict
dict: dog","cog"

Q: dot: 3 | log: 4
pop log(4), find log neighboor: cog(5), dog(5) delete cog, dog in dict
dict:  
Q: dot: 3 | cog: 5 | dog : 5
pop dog(5), no neighboor
dict: 
Q: dot(3), cog(5)
pop cog(5)  ==target, return 5
 */
var ladderLength = function(beginWord, endWord, wordList) {
    var st = [], wordSet = new Set();
    st.push({word: beginWord, length: 1});
    // put list in set for faster deletion.
    for(var i=0; i<wordList.length; i++) {
        wordSet.add(wordList[i]);
    }
    wordSet.delete(beginWord);
    
    while(st.length > 0) {
        var wordObj = st.shift();
        if(wordObj.word === endWord) {
            return wordObj.length;
        }
        for(var neighbor of _findNeighbors(wordObj.word, wordSet)) {
            st.push({word: neighbor, length: wordObj.length+1});
        }
    }
    
    return 0;
};

var _findNeighbors= function(word, wordSet) {
    var set = new Set();
    var str = 'abcdefghijklmnopqrstuvwxyz';
    for(var i=0; i<word.length; i++) {
        var arr = word.split('');
        for(var chr = 0; chr < str.length; chr++) {
            if(str[chr] !== arr[i])  {
                arr[i] = str[chr];
                var newWord =  arr.join('');
                if(wordSet.has(newWord)) {
                    set.add(newWord);
                    // remove this word from wordSet.
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return set;
};
