/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let hashSet = new Set()
    let first = headA
    let second = headB

    while(first) {
        hashSet.add(first)
        first = first.next
    }

    while (second) {
        if (hashSet.has(second)) return second
        second = second.next
    }
    return null;
};