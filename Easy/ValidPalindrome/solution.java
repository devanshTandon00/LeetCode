class Solution {
    public boolean isPalindrome(String s) {

        s = s.toLowerCase();

        StringBuilder A = new StringBuilder();

        for(int i = 0; i < s.length(); i++){
            if(Character.isLetter(s.charAt(i)) || Character.isDigit(s.charAt(i)) ){
                A.append(s.charAt(i));
            }
        }

        int low = 0;
        int high = A.length() - 1;

        while(low < high){
            if(A.charAt(low) != A.charAt(high))
                return false;
            low++;
            high--;
        }
       return true;
    }

}

                        OR


class Solution {
    public boolean isPalindrome(String s) {
        s = s.replaceAll("[^A-Za-z0-9]","").toLowerCase();

        int low = 0, high = s.length() -1 ;

        while(low < high){
            if(s.charAt(low) != s.charAt(high))
                return false;

            low++;
            high--;
        }

        return true;
      }
    }
