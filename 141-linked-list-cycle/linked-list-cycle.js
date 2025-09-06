/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    const hashSet = new Set();
    let curr = head;
    while (curr) {
        if (hashSet.has(curr)) return true;
        hashSet.add(curr)
        curr = curr.next
    }
    return false;
};