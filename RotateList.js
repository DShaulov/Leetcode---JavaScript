/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k == 0 || !head.next) {
        return head;
    }
    let last = head;
    let nodeCount = 1;
    while (last.next) {
        last = last.next;
        nodeCount++;
    };
    let modShift = nodeCount % k;
    let newLast = head;
    for (let i = 0; i < modShift; i++) {
        newLast = newLast.next;
    };
    let newHead = newLast.next;
    newLast.next = null;
    last.next = head;
    return newHead;
    
};