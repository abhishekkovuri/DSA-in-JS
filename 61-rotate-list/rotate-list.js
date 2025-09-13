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
    if(!head || !head.next) return head

    let s = head
    let f = head
    let lastHead = head
    let length = 0
    
    while(head) {
        head = head.next
        length++;
    }



    for(let i = 0; i < k % length; i++) {
        f = f.next
    }

    while(f.next) {
        s = s.next
        f = f.next
    }
    f.next = lastHead
    let newHead = s.next
    s.next = null;

    return newHead;
};