/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let small = new ListNode(0)
    let big = new ListNode(0)

    let curr = head
    let smallHead = small
    let bigHead = big

    while(curr) {
        if(curr.val < x) {
            smallHead.next = curr
            smallHead = smallHead.next
        } else {
            bigHead.next = curr
            bigHead = bigHead.next
        }
        curr = curr.next
    }

    bigHead.next = null
    smallHead.next = big.next

    return small.next

};