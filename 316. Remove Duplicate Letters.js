/*
Given a string which contains only lowercase letters, remove duplicate letters so that every letter appear once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.
Example:
Given "bcabc"
Return "abc"
Given "cbacdcbc"
Return "acdb"
*/

/**
 * @param {string} s
 * @return {string}
 cbacdcbc
 hashmap = {c: 4, b: 2, a: 1, d: 1}
 st push c visited[c] =1 since st is empty st = [c]
 since b < st.peek() and c count > 1, means c would occur in later again, so we kick out c now, and set visited[c] = 0. st = [b], count[c] --;
 since a < st.peek() and b count > 1, means b would occur in later again, so we kick out b now, and set visited[b] = 0. st = [a],
 count[b] --;
 since c > st.peek() and visited[c] == 0, push c, visited[c] = 1, count[c]--, st= [a, c]
 since d > st.peek() and visited[d] == 0, push c, visited[d] = 1, count[d]--, st= [a, c, d]
 though c < st.peek() and d count < 1, visited[c] =1 do nothing
 since  count[b] ==1 visited[b] === 0 push b
 
 so when !visited[newElement]
  if newElement > st.peek()  -  st.push(newElement)  visited[newElement] = 1, map[newElement] --
  if newElement < st.peek() && map[st.peek()] > 1  val = st.pop(), map[val] --, visited[val] = 0, visited[newElement] = 1, map[newElement] -- st.push(newElement)
 */
var removeDuplicateLetters = function(s) {
    var st = [], visited= [], map = {}, i=0, newStr = '';
    while(i<s.length) {
        while(s[i] === s[i+1]) i++;
        newStr += s[i];
        i++;
    }
    
    for(i=0; i<newStr.length; i++) {
        map[newStr[i]] = map[newStr[i]] ? map[newStr[i]] +1 : 1;
        visited[newStr[i]] = 0;
    }
    
    for(i=0; i<newStr.length; i++) {
        map[newStr[i]] --;
        
        if(st.length === 0) {
            st.push(newStr[i]);
            visited[newStr[i]] = 1;
        }else {
            if(!visited[newStr[i]]) {
                visited[newStr[i]] = 1;
                
                if(st[st.length -1] < newStr[i]) {
                    st.push(newStr[i]);
                } else {
                    while(st[st.length -1] > newStr[i] && map[st[st.length -1]] > 0) {
                        // kick out top
                        visited[st.pop()] = 0;
                    }
                    st.push(newStr[i]);
                }
            } 
        }
    }
    return st.join('');
};
