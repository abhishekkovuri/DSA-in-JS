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
    // HashMap Approach
    // let hashSet = new Set()
    // let first = headA
    // let second = headB

    // while(first) {
    //     hashSet.add(first)
    //     first = first.next
    // }

    // while (second) {
    //     if (hashSet.has(second)) return second
    //     second = second.next
    // }
    // return null;

    // 2 pointer
    let m = 0
    let pA = headA
    while(pA) {
        m++;
        pA = pA.next
    }

    let n = 0
    let pB = headB
    while(pB) {
        n++;
        pB = pB.next
    }

    let diff = Math.abs(m - n)

    // I want first list as small and second as largest
    if(m > n) {
        let temp = headA
        headA = headB
        headB = temp
    }

    for(let i = 0; i < diff; i++) {
        headB = headB.next
    }

    pA = headA
    pB = headB

    while(pA != pB) {
        pA = pA.next
        pB = pB.next
    }

    return pA;
};