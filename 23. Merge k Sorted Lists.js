// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return lists;
    var arr = [], head = new ListNode(-1), cur, node = head;
    lists.forEach(function(list){
        while(list) {
            arr.push(list.val);
            list = list.next;
        }  
    }, this);
    arr.sort(function(a, b){
        return a-b;
    });
    if(arr.length === 0) return [];
    arr.forEach(function(item){
        cur = new ListNode(item);
        node.next= cur;
        node = cur;
    }, this);
    return head.next;
};
