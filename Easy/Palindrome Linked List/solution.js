/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
        let done = true;
        let addToStack = head;
        const stack = [];

        while(addToStack != null){
            stack.push(addToStack.val);
            addToStack = addToStack.next;
        }

        while(head != null){
            if(head.val != stack.pop()){
                return false;
            }
            head = head.next;
        }
        return done;
};
