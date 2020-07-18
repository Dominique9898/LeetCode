/*
 * @Descripttion: 
 * @version: 
 * @Author: Dominique Wei
 * @Date: 2020-07-18 02:05:46
 * @LastEditTime: 2020-07-18 02:07:56
 */ 
// hash
var detectCycle = function(head) {
    let res = [], p = head
    while(p) {
        if ( res.indexOf(p) >= 0) {
            return p
        }
        res.push(p)
        p = p.next
    }
    return p
};
// 先判断是否有环,(快慢指针相遇). 再找入环口 = 链表入口 与 快/慢指针 相等
var detectCycle = function(head) {
    let slow = head, fast = head, flag = 0
    if( !fast || !fast.next) return null
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) {
            flag = 1
            break;
        }
    }
    if (flag) {
        var q = head
        while (q != slow) {
            q = q.next
            slow = slow.next
        }
        return q
    } else {
        return null
    }
};