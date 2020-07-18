/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-07-18 01:23:54
 * @LastEditTime: 2020-07-18 01:25:11
 */ 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 一分为二(变为有序数组知道不能分为止 1 1 => 2/ 2 2 => 4 )  + 合并2个链表
var sortList = function(head) {
    if( !head || !head.next) return head
    let slow = head, fast = head.next
    while ( fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let rightList = slow.next  
    slow.next = null
    let leftList = head
    return mergeList(sortList(leftList), sortList(rightList))
};
var mergeList = function ( l1, l2) {
    var p = new ListNode(-1), head = p
    while( l1 && l2) {
        if (l1.val < l2.val) {
            p.next = new ListNode(l1.val)
            l1 = l1.next
        }else {
            p.next = new ListNode(l2.val) 
            l2 = l2.next
        }
        p = p.next
    }
    p.next = l1 == null ? l2 : l1
    return head.next
}