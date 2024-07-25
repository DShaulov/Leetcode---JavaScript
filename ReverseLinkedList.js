/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }
    let firstNode = head;
    let secondNode = head.next;
    head.next = null;
    while (secondNode.next) {
        let tempNode = secondNode.next;
        secondNode.next = firstNode;
        firstNode = secondNode;
        secondNode = tempNode;
    }
    return secondNode;
};