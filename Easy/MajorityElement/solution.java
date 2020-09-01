class Solution {
public int majorityElement(int[] nums) {
        int majorityCount = nums.length/2;
        int val = 0;
        Map<Integer, Integer> map = new HashMap<>();

        for(int i = 0; i < nums.length; i++) {
                if(!map.containsKey(nums[i])) {
                        map.put(nums[i], 1);
                }
                else{
                        map.put(nums[i], map.get(nums[i]) + 1);
                }

                if(map.get(nums[i]) > majorityCount) {
                        val = nums[i];
                }
        }
        return val;
}
}
