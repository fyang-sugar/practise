/*
Implement a basic calculator to evaluate a simple expression string.
The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . 
The integer division should truncate toward zero.
You may assume that the given expression is always valid.
Some examples:
"3+2*2" = 7
" 3/2 " = 1
" 3+5 / 2 " = 5
*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    // 3+2*2   3|4/2
    var i, k, st= [], str= '', temp, top;
    for(i=0; i<s.length; i++) {
        if(s[i] !== ' ') str += s[i];
    }
    
    i=0;
    while(i < str.length) {
        if(str[i] === '*' || str[i] === '/') {
            top = st.pop();
            if(str[i] === '*') {
                temp = '';
                i++;
                while(str[i] <= '9' && str[i] >= '0' && i < str.length)  temp+= str[i++];
                st.push(top * parseInt(temp));
            } else {
                temp = '';
                i++;
                while(str[i] <= '9' && str[i] >= '0' && i < str.length)  temp+= str[i++];
                st.push(parseInt(top / parseInt(temp)));
            }
        } else if(str[i] === '+' || str[i] === '-') {
            st.push(str[i++]);
        } else if(str[i] <= '9' && str[i] >= '0') {
            temp = '';
            while(str[i] <= '9' && str[i] >= '0')  temp += str[i++];
            st.push(parseInt(temp));
        } else {
            i++;
        }
    }
    var sum = parseInt(st[0]);
    for(i=1; i<st.length; i++) {
        if(st[i] === '+') {
            sum += st[i+1];
            i++;
        }
        if(st[i] === '-') {
            sum -= st[i+1];
            i++;
        }
    }
    return sum;
};
