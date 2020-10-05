/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
var answer = function(head){
  let prev = null;
  let curr = head;

  while(curr != null) {
          let temp = curr.next;
          curr.next = prev;
          prev = curr;
          curr = temp;
  }

  return prev;
}
