/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */

public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode a = head;
        ListNode b = head;

        int flag = 0;
        //Check for b.next handles the case where length 1
        while(b != null && b.next != null){
            a = a.next;
            b = b.next.next;
            if (a == b){
                flag = 1;
                break;
            }
        }

        if(flag == 1){
            return true;
        }

        return false;
    }
}
