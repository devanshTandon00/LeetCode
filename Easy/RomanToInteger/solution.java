class Solution {
public int romanToInt(String s) {

        //use a map to keep track of value of different symbols
        Map<Character, Integer> map = new HashMap<>();
        int value = 0;

        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        for(int i = 0; i < s.length(); i++) {
                if((i+1) != s.length() && map.get(s.charAt(i)) < map.get(s.charAt(i + 1))) {
                        value += (map.get(s.charAt(i + 1)) - map.get(s.charAt(i)));
                        i++;
                }
                else{
                        value +=  map.get(s.charAt(i));
                }
        }
}

return value;
}
