class Solution {
    public boolean isValid(String s) {

        if(s.length() % 2 == 1)
            return false;

        Stack<Character> stack = new Stack<>();

        Map<Character, Character> map = new HashMap<>();
        map.put('(', ')');
        map.put('[', ']');
        map.put('{', '}');

        /* Algorithm: If the character at i is a opening brace, push it to stack. Else, compare that value with the value in the map for the element obtained after popping stack.
        If they are not equal, return false. 
        */

        for(int i = 0; i < s.length(); i++){
            if(s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{'){
                stack.push(s.charAt(i));
            }
            else{
                // This handles the case where the first brace might be a closing brace, in which case stack is empty and second if condition wont work
                if(stack.isEmpty())
                    return false;
                if(s.charAt(i) != map.get(stack.pop()))
                    return false;
            }
        }

        return stack.isEmpty();

    }
}
