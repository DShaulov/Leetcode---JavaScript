/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let numString = "";
    while(head) {
        numString = numString + head.val;
        head = head.next;
    };
    let reverseString = "";
    for (let i = numString.length - 1; 0 <= i; i--) {
        reverseString = reverseString + numString[i];
    }
    return numString === reverseString;
};