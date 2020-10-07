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
  let current = head;

  while(current != null) {
          let temp = current.next;
          current.next = prev;
          prev = current;
          current = temp;
  }

  return prev;
}
