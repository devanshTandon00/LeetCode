/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */

// BRUTE force solution
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB){
        ListNode a = headA; ListNode b;

        while(a != null){
            b = headB;
            while(b != null){
                if(a == b){
                    return a;
                }
                 b = b.next;
            }
            a = a.next;
        }

        return null;
    }
}

// HashSet solution
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB){

        Set<ListNode> set = new HashSet<>();
        ListNode a = headA; ListNode b;
        
        while(a != null){
            set.add(a);
            a = a.next;
        }

        b = headB;
        while(b != null){
          if(set.contains(b)){
            return b;
          }
          b = b.next;
        }

        return null;
   }
}
