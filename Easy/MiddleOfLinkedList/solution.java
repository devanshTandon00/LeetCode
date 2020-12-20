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
    public ListNode middleNode(ListNode head) {
        ListNode lengthCount =head;
        ListNode finalNode = head;
        int counter = 0;
        int length = 0;

        while(lengthCount!=null){
            counter++;
            lengthCount= lengthCount.next;
        }

        System.out.println(counter);

        if(counter%2==0){
            while(length < counter/2 && head.next!=null){
                head = head.next;
                System.out.println("!" + head);
                length++;
                finalNode = head;
        }
        }


        return finalNode;
    }
}
