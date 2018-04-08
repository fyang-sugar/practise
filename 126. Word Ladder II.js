/*
Given two words (beginWord and endWord), and a dictionary's word list, 
find all shortest transformation sequence(s) from beginWord to endWord, such that:
Only one letter can be changed at a time
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
For example,
Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
Return
  [
    ["hit","hot","dot","dog","cog"],
    ["hit","hot","lot","log","cog"]
  ]
Note:
Return an empty list if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 
 based on word ladder I, we need to construct two more thing on Bfs
 1. hashmap to map each string to its neighbors [string: [neigbors]]
 2. hashmap to map each string to distance to beginword [string: length]
 then we use dfs to find out all the shortest pathes.
 */
var findLadders = function(beginWord, endWord, wordList) {
    var st = [], wordSet = new Set(), nMap = {}, distance = {};
    
    distance[beginWord] = 1;
    st.push({word: beginWord, length: 1});
    // put list in set for faster deletion.
    for(var i=0; i<wordList.length; i++) {
        wordSet.add(wordList[i]);
    }
    wordSet.delete(beginWord);
    
    while(st.length > 0) {
        var wordObj = st.shift();
        var neighbors = _findNeighbors(wordObj.word, wordSet, nMap, endWord);
        nMap[wordObj.word] = neighbors;
        for(let neighbor of neighbors) {
            if(!distance[neighbor]) {
                distance[neighbor] = wordObj.length+1;
                 st.push({word: neighbor, length: wordObj.length+1});
            }
        }
    }
    var res = [];
    dfs(beginWord, res, [], nMap, distance, endWord, beginWord);
    return res;
};

var _findNeighbors= function(word, wordSet, nMap, endWord) {
    var set = new Set();
    var str = 'abcdefghijklmnopqrstuvwxyz';
    for(var i=0; i<word.length; i++) {
        var arr = word.split('');
        for(var chr = 0; chr < str.length; chr++) {
            if(str[chr] !== arr[i])  {
                arr[i] = str[chr];
                var newWord =  arr.join('');
                if(wordSet.has(newWord) && newWord !== word) {
                    set.add(newWord);
                }
            }
        }
    }
    return set;
};

var dfs = function(cur, res, arr, nMap, distance, endWord, beginWord) {
    if(cur === endWord) {
        res.push([beginWord].concat(arr.slice(0)));
        return;
    }
    for(var neighbor of nMap[cur]) {
        if(distance[neighbor] === distance[cur] + 1) {
            arr.push(neighbor);
            dfs(neighbor, res, arr, nMap, distance, endWord, beginWord);
            arr.pop();
        }
    }
};
