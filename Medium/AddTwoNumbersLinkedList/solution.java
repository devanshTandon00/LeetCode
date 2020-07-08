// /**
//  * Definition for singly-linked list.
//  * public class ListNode {
//  *     int val;
//  *     ListNode next;
//  *     ListNode() {}
//  *     ListNode(int val) { this.val = val; }
//  *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
//  * }
//  */

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode head = new ListNode(0);
        ListNode dummy = head;
        int sum = 0;
        int carry = 0;

        while(l1 != null || l2 != null){
            // check if either is not null
            // used to handle cases where one input linkedlist might be empty or shorter than other
            // if condition is true, x = l1.val else x = 0
            int x = (l1 != null) ? l1.val : 0;
            int y = (l2 != null) ? l2.val : 0;

            sum = carry + x + y;
            dummy.next = new ListNode(sum % 10);
            // found carry = (sum >= 10) ? 1 : 0; works better than Carry = sum/10;
            // carry = sum/10;

            carry = (sum >= 10) ? 1 : 0;

            if(l1 != null){
                l1 = l1.next;
            }

            if(l2 != null){
                l2 = l2.next;
            }

            dummy = dummy.next;
        }

        if(carry == 1){
            dummy.next = new ListNode(carry);
        }

        return head.next;
    }
}
