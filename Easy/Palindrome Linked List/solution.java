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
class Solution {
    public boolean isPalindrome(ListNode head) {
        boolean done = true;
        ListNode addToStack = head;
        Stack<Integer> stack = new Stack();
        
        while(addToStack != null){
            System.out.println(addToStack);
            stack.push(addToStack.val);
            addToStack = addToStack.next;
        }

        while(head != null){
            System.out.println(stack.peek());
            if(head.val != stack.pop()){
                System.out.println("arrived");
                return false;
            }
            head = head.next;
        }
        return done;
    }
}
