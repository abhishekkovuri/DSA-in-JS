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
    // finding middle element using slow and fast pointer
    let slow = fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    // reverse the second half of the linked list
    let prev = null;
    let curr = slow;

    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // compare first and second linkedlist
    let start = head;
    let end = prev;
    while (end) {
        if(start.val !== end.val) return false
        start = start.next
        end = end.next;
    }
    return true;
};