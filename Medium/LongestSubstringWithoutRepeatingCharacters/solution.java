public class solution{
  public int lengthOfSubstring(String s){
    int n = s.length();
    int ans = 0, i = 0, j = 0;
    Set<Character> set = new HashSet<>();

    // Using sliding windows technique to solve this problem using HashSet
    // difference between i and j will be the length of substring
    while(i < n && j < n){
      if(!set.contains(s.charAt(j))){
        set.add(j++);
        ans = Math.max(ans, j - i);
      }
      else{
        set.remove(s.charAt(i++));
      }
    }
  }
}
